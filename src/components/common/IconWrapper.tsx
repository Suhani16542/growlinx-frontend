import {
  Search,
  Target,
  Share2,
  Smartphone,
  Users,
  Video,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  BarChart3,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Zap,
  ShieldCheck,
  Award,
  Layers,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Building2,
  DollarSign,
  Laptop,
  UtensilsCrossed,
  Rocket,
  Briefcase,
  Star,
  Compass,
  FileText,
  Clock,
  HelpCircle,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Search,
  Target,
  Share2,
  Smartphone,
  Users,
  Video,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  BarChart3,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Zap,
  ShieldCheck,
  Award,
  Layers,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Building2,
  DollarSign,
  Laptop,
  UtensilsCrossed,
  Rocket,
  Briefcase,
  Star,
  Compass,
  FileText,
  Clock,
  HelpCircle,
};

interface IconWrapperProps {
  name: string;
  className?: string;
  size?: number;
  animated?: boolean;
}

export function IconWrapper({
  name,
  className,
  size = 20,
  animated = false,
}: IconWrapperProps) {
  const IconComponent = iconMap[name] || Sparkles;

  const getMicroAnimationClass = () => {
    if (!animated) return "";
    switch (name) {
      case "Search":
        return "group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300";
      case "Target":
        return "group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-300";
      case "Share2":
        return "group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300";
      case "Smartphone":
        return "group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-300";
      case "Users":
        return "group-hover:scale-110 group-hover:text-purple-300 transition-all duration-300";
      case "Video":
        return "group-hover:scale-110 group-hover:text-rose-400 transition-all duration-300";
      case "Rocket":
        return "group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300";
      default:
        return "group-hover:scale-110 transition-transform duration-300";
    }
  };

  return (
    <IconComponent
      className={cn("shrink-0", getMicroAnimationClass(), className)}
      size={size}
    />
  );
}
