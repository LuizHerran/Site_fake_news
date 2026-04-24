import type { ReactNode, FC } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div
      style={{
        padding: '1.5rem',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        backgroundColor: 'white',
        maxWidth: '400px',
      }}
    >
      {children}
    </div>
  );
};

export default Card;
