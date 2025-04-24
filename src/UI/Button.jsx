import React from 'react'

const variantClasses = {
  primary: "bg-[var(--custom-blue)] text-white hover:bg-transparent border hover:border-[var(--custom-blue)] duration-150 hover:text-[var(--custom-blue)]  px-6 py-2 ",
  outline: "bg-transparent text-gray-500 border border-gray-500 hover:bg-gray-100 px-3 py-1",
};

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
         rounded-md cursor-pointer 
        ${variantClasses[variant]} ${className}
      `}
    >
      {children}
    </button>
  );
};
  
export default Button