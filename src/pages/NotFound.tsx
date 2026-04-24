import type { FC } from 'react';
import { Link } from 'react-router';

const NotFoundPage: FC = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          color: '#dc3545',
          marginBottom: '1rem'
        }}
      >
        Página não encontrada
      </h1>

      <Link
        to="/"
        style={{
          padding: '12px 24px',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}
      >
        Voltar para o início
      </Link>
    </div>
  );
};

export default NotFoundPage;