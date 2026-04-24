import React from 'react';
import { Link, Outlet } from 'react-router';

const LayoutAutor: React.FC = () => {
  const headerStyle = {
    backgroundColor: '#ffc107',
    color: 'black',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.2s'
  };

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <header style={headerStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/autor/minhas-noticias" style={linkStyle}>Minhas Notícias</Link>
        <Link to="/autor/nova-noticia" style={linkStyle}>Nova Notícia</Link>
        <Link to="/autor/perfil" style={linkStyle}>Perfil</Link>
      </header>
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutAutor;