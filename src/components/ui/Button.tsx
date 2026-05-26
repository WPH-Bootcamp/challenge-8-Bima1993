import type { ReactNode } from "react";
import type { ButtonSize, ButtonVariant } from "../../types";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

function Button({
  variant = "primary",
  size = "md",
  children,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-1 rounded-full p-2 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "keep-white bg-[rgba(255,98,62,1)] text-white shadow-[inset_4px_4px_4px_0_rgba(255,255,255,0.25)] hover:bg-[#ff735c] focus:ring-[rgba(255,98,62,1)]",
    secondary: "bg-white/10 text-white hover:bg-white/15 focus:ring-white/30",
    outline:
      "border border-white/20 text-white hover:bg-white/10 focus:ring-white/30",
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "h-[44px] w-[197px] text-xs",
    md: "px-9 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
