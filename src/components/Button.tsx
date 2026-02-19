import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  type = "button",
}) => {
  const baseStyles = "group rounded-md text-center transition-all font-semibold inline-block md:w-auto";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-10 py-3 text-xl",
  };

  const variantStyles = {
    primary: "bg-foreground hover:bg-blue text-background",
    secondary: "bg-blue/80 hover:bg-blue text-white hover:shadow-lg",
    outline: "bg-background text-foreground border border-foreground hover:bg-foreground hover:text-background",
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed hover:translate-y-0 hover:shadow-none" : "";

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
    </button>
  );
};

export default Button;
