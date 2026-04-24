import type { FC, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  className = '',
}) => {
  const baseClasses = `btn btn-${size} btn-${variant}`;
  const disabledClasses = disabled ? 'btn-disabled' : '';

  return (
    <button
      className={`${baseClasses} ${disabledClasses} ${className}`.trim()}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;

export type { ButtonProps };