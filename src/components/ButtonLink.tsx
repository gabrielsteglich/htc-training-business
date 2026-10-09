"use client";

import React from "react";
import Link from "next/link";

interface ButtonLinkProps {
    href: string;
    variant?: "primary" | "secondary" | "outline" | "white" | "outline-white";
    fullWidth?: boolean;
    className?: string;
    children: React.ReactNode;
    disabled?: boolean;
    external?: boolean;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
    href,
    children,
    variant = "primary",
    fullWidth = false,
    className = "",
    disabled = false,
    external = false,
}) => {
    const baseStyles =
        "inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary:
            "bg-aviation-red text-white hover:bg-red-700 focus:ring-red-500 shadow-md hover:shadow-lg",
        secondary:
            "bg-aviation-navy text-white hover:bg-slate-800 focus:ring-slate-500 shadow-md hover:shadow-lg",
        outline:
            "border-2 border-aviation-navy text-aviation-navy hover:bg-aviation-navy hover:text-white focus:ring-slate-500",
        white:
            "bg-white text-aviation-navy hover:bg-slate-100 focus:ring-white shadow-md hover:shadow-lg",
        "outline-white":
            "border-2 border-white text-white hover:bg-white hover:text-aviation-navy focus:ring-white",
    };

    const widthStyle = fullWidth ? "w-full" : "w-auto";
    const disabledStyles = disabled
        ? "opacity-50 cursor-not-allowed pointer-events-none"
        : "";

    const combinedClassName = `${baseStyles} ${variants[variant]} ${widthStyle} ${disabledStyles} ${className}`;

    if (disabled) {
        return (
            <span
                className={combinedClassName}
                aria-disabled="true"
                tabIndex={-1}
            >
                {children}
            </span>
        );
    }

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={combinedClassName}
            >
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={combinedClassName}>
            {children}
        </Link>
    );
};
