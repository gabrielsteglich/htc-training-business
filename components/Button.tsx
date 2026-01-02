import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'outline-white';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-md font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-aviation-red text-white hover:bg-red-700 focus:ring-red-500 shadow-md hover:shadow-lg",
    secondary: "bg-aviation-navy text-white hover:bg-slate-800 focus:ring-slate-500 shadow-md hover:shadow-lg",
    outline: "border-2 border-aviation-navy text-aviation-navy hover:bg-aviation-navy hover:text-white focus:ring-slate-500",
    white: "bg-white text-aviation-navy hover:bg-slate-100 focus:ring-white shadow-md hover:shadow-lg",
    'outline-white': "border-2 border-white text-white hover:bg-white hover:text-aviation-navy focus:ring-white"
  };

  const widthStyle = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};