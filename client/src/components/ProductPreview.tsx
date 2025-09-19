import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Monitor, Smartphone, Sparkles } from "lucide-react";
import mockupImage from "@assets/2_1758293870009.png";

export default function ProductPreview() {
  const handleDemoClick = () => {
    console.log('Request demo clicked');
    // TODO: Remove mock functionality - replace with actual demo request
  };

  const handleVideoClick = () => {
    console.log('Watch video clicked');
    // TODO: Remove mock functionality - replace with actual video modal
  };

  return null;
}