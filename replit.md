# Overview

JanazApp is a digital platform designed to streamline death-related administrative processes for the Islamic community in Western Europe. The application serves as a comprehensive solution connecting families, funeral homes, mosques, and government institutions through a unified digital interface. The platform addresses the complex bureaucratic requirements of death administration while respecting Islamic cultural and religious practices, including support for repatriation procedures.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built using React with TypeScript, leveraging Vite as the build tool for fast development and optimized production builds. The application uses a modern component-based architecture with the following key decisions:

- **UI Framework**: Radix UI primitives with shadcn/ui components for consistent, accessible design patterns
- **Styling**: Tailwind CSS with a custom design system featuring both light and dark modes, specifically tailored for Islamic cultural sensitivity
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation schemas for type-safe form processing

The design system implements a sophisticated theming approach with culturally appropriate color palettes (primary green tones) and typography supporting both Latin and Arabic scripts.

## Backend Architecture
The backend follows a traditional Express.js server architecture with the following design patterns:

- **Server Framework**: Express.js with TypeScript for type safety and modern JavaScript features
- **Modular Routing**: Centralized route registration system with API prefix pattern
- **Storage Abstraction**: Interface-based storage pattern allowing for multiple implementations (currently in-memory, designed for database expansion)
- **Development Workflow**: Hot module replacement via Vite integration for seamless development experience

The architecture separates concerns between route handling, business logic, and data persistence through clean interfaces.

## Data Storage Solutions
The application uses a hybrid approach to data management:

- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema Management**: Centralized schema definitions with Zod integration for runtime validation
- **Migration Strategy**: Drizzle Kit for database schema migrations and version control
- **Development Storage**: In-memory storage implementation for rapid prototyping and testing

The storage layer is designed with an interface pattern that allows seamless transition from development (in-memory) to production (PostgreSQL) environments.

## Authentication and Authorization
Currently, the application includes basic user schema with username/password authentication patterns. The database schema supports user management with unique constraints and UUID primary keys, providing a foundation for implementing comprehensive authentication and authorization systems.

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling via @neondatabase/serverless
- **PostgreSQL**: Primary database engine with ACID compliance for critical death administration data

### UI and Design Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Consistent icon library for user interface elements
- **shadcn/ui**: Pre-built component library based on Radix UI primitives

### Development and Build Tools
- **Vite**: Fast build tool with hot module replacement and optimized production builds
- **TypeScript**: Static type checking for enhanced code reliability
- **Drizzle Kit**: Database schema management and migration tools
- **React Query**: Server state management and caching solution

### Session and Security
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **ESBuild**: Fast JavaScript bundler for production builds

The platform is designed to be culturally sensitive while maintaining modern web standards, with particular attention to Islamic practices and requirements in the death administration process.