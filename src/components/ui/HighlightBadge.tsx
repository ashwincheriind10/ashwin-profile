"use client";

import { cn } from "@/lib/utils";

interface HighlightBadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "success" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variantStyles = {
  primary: "bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300",
  secondary: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  accent: "bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300",
  success: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  outline: "border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300"
};

const sizeStyles = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-base"
};

export function HighlightBadge({
  children,
  variant = "primary",
  size = "md",
  className
}: HighlightBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
