import { ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-extrabold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF5E3A]/40 disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide";

    const variantStyles = {
      primary:
        "bg-[#FF5E3A] text-white hover:bg-[#E8502B] shadow-md shadow-[#FF5E3A]/25 hover:shadow-lg hover:shadow-[#FF5E3A]/40 active:scale-[0.98]",
      gradient:
        "bg-[#FF5E3A] text-white hover:bg-[#E8502B] shadow-md shadow-[#FF5E3A]/25 hover:shadow-lg hover:shadow-[#FF5E3A]/40 active:scale-[0.98]",
      secondary:
        "bg-white text-[#0A0F1D] hover:bg-[#FAF6F0] border border-[#EADECE] hover:border-[#FF5E3A] shadow-xs active:scale-[0.98]",
      dark:
        "bg-[#111827] text-[#FAF6F0] hover:bg-[#162035] border border-white/10 hover:border-[#FF5E3A]/50 shadow-md active:scale-[0.98]",
      outline:
        "border border-[#EADECE] bg-transparent text-[#0A0F1D] hover:bg-white hover:border-[#FF5E3A] active:scale-[0.98]",
      ghost:
        "bg-transparent text-[#5A6578] hover:text-[#0A0F1D] hover:bg-white/50",
    };

    const sizeStyles = {
      sm: "text-xs px-4 py-2 gap-1.5 uppercase",
      md: "text-xs sm:text-sm px-6 py-2.5 gap-2 uppercase tracking-wider",
      lg: "text-xs sm:text-sm px-8 py-3.5 gap-2.5 uppercase tracking-wider",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      return (
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClassName}
        {...props}
      >
        {isLoading && (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
