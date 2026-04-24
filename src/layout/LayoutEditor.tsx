import React from 'react';
import { Link, Outlet } from 'react-router';

const LayoutEditor: React.FC = () => {
  const headerStyle = {
    backgroundColor: '#17a2b8',
    color: 'white',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.2s'
  };

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <header style={headerStyle}>
        <Link to="/editor" style={linkStyle}>Painel</Link>
        <Link to="/editor/perfil-editor" style={linkStyle}>Perfil</Link>
        <Link to="/editor/publicar-despublicar" style={linkStyle}>Publicar</Link>
      </header>
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutEditor;