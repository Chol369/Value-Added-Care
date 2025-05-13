import logoSvg from "@assets/VAC Logo.jpg";
import { HTMLAttributes } from "react";

interface LogoProps extends HTMLAttributes<HTMLImageElement> {
  className?: string;
  alt?: string;
}

export function Logo({ className, alt = "Value Added Care Logo", ...props }: LogoProps) {
  return (
    <img
      src={logoSvg}
      alt={alt}
      className={className}
      {...props}
    />
  );
}
