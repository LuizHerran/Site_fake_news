import type { FC, ChangeEvent } from 'react';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}

const InputField: FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder
}) => (
  <div style={{ marginBottom: '1rem' }}>
    <label
      htmlFor="input-field"
      style={{
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        color: '#333'
      }}
    >
      {label}
    </label>
    <input
      id="input-field"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        width: '100%',
        padding: '0.75rem',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '1rem',
        boxSizing: 'border-box',
        transition: 'border-color 0.2s'
      }}
      onFocus={(e) => (e.target.style.borderColor = '#007bff')}
      onBlur={(e) => (e.target.style.borderColor = '#ddd')}
    />
  </div>
);

export default InputField;
