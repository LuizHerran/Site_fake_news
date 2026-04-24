import type { FC } from 'react';

const StatusBadge: FC<{ status: 'publicada' | 'rascunho' }> = ({ status }) => {
  const badgeStyles = {
    publicada: {
      backgroundColor: '#28a745',
      color: 'white',
      padding: '0.25rem 0.5rem',
      borderRadius: '0.25rem',
      fontSize: '0.75rem',
      fontWeight: 'bold',
    },
    rascunho: {
      backgroundColor: '#fd7e14',
      color: 'white',
      padding: '0.25rem 0.5rem',
      borderRadius: '0.25rem',
      fontSize: '0.75rem',
      fontWeight: 'bold',
    },
  };

  const capitalizedStatus = status.charAt(0).toUpperCase() + status.slice(1);

  return <span style={badgeStyles[status]}>{capitalizedStatus}</span>;
};

export default StatusBadge;
