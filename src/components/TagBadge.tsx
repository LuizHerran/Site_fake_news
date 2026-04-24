import type { FC } from 'react';

type Props = {
  label: string;
  color?: string;
};

const TagBadge: FC<Props> = ({ label, color }) => (
  <span
    style={{
      backgroundColor: color || '#e0e0e0',
      color: color ? '#ffffff' : '#000000',
      padding: '2px 8px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: 500,
      display: 'inline-block',
    }}
  >
    {label}
  </span>
);

export default TagBadge;
