import type { FC, ChangeEvent } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchBar: FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Pesquisar...'
}) => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <span
        style={{
          position: 'absolute',
          left: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#6c757d',
          fontSize: '1.1rem',
          pointerEvents: 'none'
        }}
      >
        🔎
      </span>

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '0.75rem 0.75rem 0.75rem 2.5rem',
          border: '1px solid #ced4da',
          borderRadius: '0.375rem',
          fontSize: '1rem',
          boxSizing: 'border-box'
        }}
      />
    </div>
  );
};

export default SearchBar;