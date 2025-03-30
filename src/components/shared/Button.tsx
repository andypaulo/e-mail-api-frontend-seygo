import React from 'react';

const Button = ({ 
  variant, 
  children, 
  className = '', 
  ...props 
}: {
  variant: 'orange' | 'teal' | 'teal-solid';
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseClasses = `
    w-25 h-10 rounded-md cursor-pointer
    ease-in duration-100 font-medium 
    ${className}
  `;
  let variantClasses = '';
  switch(variant) {
    case 'orange':
      variantClasses = 'bg-white border-2 border-[#ED6F2A] text-[#ED6F2A] hover:text-[#9E4616] hover:border-[#9E4616]';
      break;
    case 'teal':
      variantClasses = 'bg-white border-2 border-[#46B7BA] text-[#46B7BA] hover:text-[#107E81] hover:border-[#107E81]';
      break;
    case 'teal-solid':
      variantClasses = 'bg-[#46B7BA] text-white hover:bg-[#107E81] hover:text-[#EDF1F5]';
      break;
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;