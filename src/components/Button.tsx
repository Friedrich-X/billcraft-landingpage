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
  const baseStyles = "group rounded-md text-center transition-all font-medium inline-block";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-7 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const variantStyles = {
    primary: "bg-foreground hover:bg-blue text-background",
    secondary: "bg-foreground hover:bg-foreground/90 text-white hover:shadow-lg",
    outline: "bg-white hover:bg-gray text-foreground border-2 border-gray hover:border-blue",
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
