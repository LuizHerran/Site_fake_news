import React from 'react';
import { Link, Outlet } from 'react-router';

const LayoutSuperadmin: React.FC = () => {
  const sidebarStyle = {
    position: 'fixed' as const,
    left: 0,
    top: 0,
    width: '250px',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    padding: '1rem 0',
    overflowY: 'auto' as const,
    borderRight: '1px solid #dee2e6',
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif'
  };

  const titleStyle = {
    padding: '0 1rem 1.5rem',
    margin: 0,
    color: '#212529',
    fontSize: '1.25rem',
    fontWeight: 'bold'
  };

  const ulStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const liStyle = {
    margin: '0.25rem 0'
  };

  const linkStyle = {
    display: 'block',
    color: '#495057',
    textDecoration: 'none',
    padding: '0.75rem 1rem',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    transition: 'background-color 0.2s'
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <aside style={sidebarStyle}>
        <h3 style={titleStyle}>Superadmin</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link to="/superadmin/dashboard" style={linkStyle}>Dashboard</Link>
          </li>
          <li style={liStyle}>
            <Link to="/superadmin/ufs" style={linkStyle}>UFs</Link>
          </li>
          <li style={liStyle}>
            <Link to="/superadmin/cidades" style={linkStyle}>Cidades</Link>
          </li>
          <li style={liStyle}>
            <Link to="/superadmin/tags" style={linkStyle}>Tags</Link>
          </li>
          <li style={liStyle}>
            <Link to="/superadmin/perfis" style={linkStyle}>Perfis</Link>
          </li>
          <li style={liStyle}>
            <Link to="/superadmin/noticias" style={linkStyle}>Notícias</Link>
          </li>
          <li style={liStyle}>
            <Link to="/superadmin/usuarios" style={linkStyle}>Usuários</Link>
          </li>
          <li style={liStyle}>
            <Link to="/superadmin/comentarios" style={linkStyle}>Comentários</Link>
          </li>
        </ul>
      </aside>
      <main style={{ marginLeft: '250px', padding: '2rem', minHeight: '100vh' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutSuperadmin;