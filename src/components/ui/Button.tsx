import { ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
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
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-blue-600 text-white font-semibold hover:bg-blue-500 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 active:scale-[0.98]",
      gradient:
        "bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:opacity-95 active:scale-[0.98]",
      secondary:
        "bg-white/[0.06] text-white font-medium hover:bg-white/[0.12] border border-white/15 hover:border-white/25 backdrop-blur-md active:scale-[0.98]",
      outline:
        "border border-white/20 bg-transparent text-white font-medium hover:bg-white/[0.08] hover:border-white/30 active:scale-[0.98]",
      ghost:
        "bg-transparent text-slate-300 font-medium hover:bg-white/[0.08] hover:text-white",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-2 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5",
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
