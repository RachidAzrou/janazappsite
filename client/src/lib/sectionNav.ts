const HEADER_OFFSET = 80; // Account for sticky header

/**
 * Smoothly scroll to an element by ID with header offset
 */
export function scrollToId(id: string, options: { offset?: number; updateHash?: boolean } = {}) {
  const element = document.getElementById(id);
  if (!element) return false;

  const offset = options.offset ?? HEADER_OFFSET;
  const elementTop = element.getBoundingClientRect().top + window.scrollY;
  const targetPosition = elementTop - offset;

  // Respect user's motion preferences
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  window.scrollTo({
    top: targetPosition,
    behavior: prefersReducedMotion ? 'auto' : 'smooth'
  });

  // Optionally update the URL hash
  if (options.updateHash) {
    history.replaceState(null, '', `#${id}`);
  }

  return true;
}

/**
 * Navigate to a section, either on current page or by routing to homepage
 */
export function goToSection(sectionId: string, navigate: (path: string) => void) {
  // Try to scroll to the section on the current page first
  if (scrollToId(sectionId, { updateHash: true })) {
    return;
  }

  // Section doesn't exist on current page, navigate to homepage and mark for scrolling
  sessionStorage.setItem('pendingScrollTo', sectionId);
  navigate('/');
}

/**
 * Handle pending scroll targets (used by LandingPage on mount)
 */
export function handlePendingScroll(retries = 5, delay = 50): Promise<boolean> {
  const pendingId = sessionStorage.getItem('pendingScrollTo') || window.location.hash?.slice(1);
  
  if (!pendingId) return Promise.resolve(false);

  return new Promise((resolve) => {
    let attempts = 0;
    
    const attemptScroll = () => {
      attempts++;
      
      if (scrollToId(pendingId, { updateHash: true })) {
        sessionStorage.removeItem('pendingScrollTo');
        resolve(true);
        return;
      }
      
      if (attempts < retries) {
        setTimeout(attemptScroll, delay);
      } else {
        // Clear the pending scroll even if we couldn't find the element
        sessionStorage.removeItem('pendingScrollTo');
        resolve(false);
      }
    };
    
    // Try immediately, then with delays
    attemptScroll();
  });
}