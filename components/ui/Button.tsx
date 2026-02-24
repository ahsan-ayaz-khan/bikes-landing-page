import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "filled" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  filled: "bg-primary hover:bg-transparent",
  outline: "bg-transparent hover:bg-white/5",
};

export default function Button({
  variant = "filled",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`cursor-pointer rounded-lg border-2 border-primary px-10 py-3 text-base font-medium text-white transition-all ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
