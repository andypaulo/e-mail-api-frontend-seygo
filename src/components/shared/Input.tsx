import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClass?: string;
  labelClass?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      className = '',
      containerClass = '',
      labelClass = '',
      ...props
    },
    ref
  ) => {
    const baseClasses = [
      'w-full text-[14px] border border-[#D9D9D9] p-2 rounded-md',
      'focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]',
      'transition-all duration-200',
      error ? 'border-red-500 focus:ring-red-200' : '',
      props.disabled ? 'bg-gray-100 cursor-not-allowed': '',
      className
    ].join(' ');

    return (
      <div className={` ${containerClass}`}>
        {label && (
          <label
            className={`text-[#929292] text-[13px] ${labelClass}`}
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={baseClasses}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;