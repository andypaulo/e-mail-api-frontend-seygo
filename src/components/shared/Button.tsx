import React from 'react';

const Button = ({ 
  variant, 
  children, 
  className = '', 
  ...props 
}: {
  variant: 'orange' | 'teal' | 'teal-solid' | 'orange-solid' | 'teal-alternative-solid';
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseClasses = `
    ${className}
  `;
  let variantClasses = '';
  switch(variant) {
    case 'orange':
      variantClasses = 'bg-white border-2 border-[#ED6F2A] text-[#ED6F2A] hover:text-[#9E4616] hover:border-[#9E4616] w-25 h-10 rounded-md cursor-pointer ease-in duration-100 font-medium ';
      break;
    case 'teal':
      variantClasses = 'bg-white border-2 border-[#46B7BA] text-[#46B7BA] hover:text-[#107E81] hover:border-[#107E81] w-25 h-10 rounded-md cursor-pointer ease-in duration-100 font-medium ';
      break;
    case 'teal-solid':
      variantClasses = 'bg-[#46B7BA] text-white hover:bg-[#107E81] hover:text-[#EDF1F5] w-25 h-10 rounded-md cursor-pointer ease-in duration-100 font-medium ';
      break;
    case 'orange-solid':
      variantClasses = 'bg-[#ED6F2A] text-[#FFFFFF] px-4 py-1.5 rounded-sm flex items-center gap-2 cursor-pointer hover:bg-[#ed6e2aee] active:bg-[#BA6F47] transition delay-60 duration-40 ease-in-out';
      break;
    case 'teal-alternative-solid':
      variantClasses = 'bg-[#46B7BA] text-[#FFFFFF] px-4 py-1.5 rounded-sm flex items-center gap-0.5 cursor-pointer hover:bg-[#46b6baf3] active:bg-[#1096DE] transition delay-60 duration-40 ease-in-out';
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