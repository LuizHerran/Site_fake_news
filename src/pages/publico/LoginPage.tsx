import React from 'react';
import { Link, useNavigate } from 'react-router';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const headerStyle: React.CSSProperties = {
    backgroundColor: '#1a1a2e',
    color: 'white',
    padding: '0 20px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  };

  const navStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '15px 0',
  };

  const navLinkStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '20px',
    fontSize: '14px',
  };

  const containerStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
  };

  const cardStyle: React.CSSProperties = {
    width: '400px',
    maxWidth: '90vw',
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  };

  const titleStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
    fontSize: '28px',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px',
    boxSizing: 'border-box',
  };

  const checkboxLabelStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#666',
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    marginBottom: '20px',
  };

  const linksStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '30px',
  };

  const linkStyle: React.CSSProperties = {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: '500',
  };

  const hrStyle: React.CSSProperties = {
    margin: '30px 0',
    border: 'none',
    borderTop: '1px solid #eee',
  };

  const quickAccessBoxStyle: React.CSSProperties = {
    border: '2px solid red',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
  };

  const quickAccessTitleStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#666',
    fontSize: '16px',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
  };

  const redButtonStyle: React.CSSProperties = {
    padding: '12px',
    backgroundColor: 'white',
    color: 'red',
    border: '2px solid red',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'pointer',
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={headerStyle}>
        <nav style={navStyle}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/favicon.svg" alt="Portal de Notícias" style={{ width: '26px', height: '26px' }} />
            Portal de Notícias
          </Link>
          <div>
            <Link to="/" style={navLinkStyle}>Home</Link>
            <Link to="/login" style={navLinkStyle}>Login</Link>
            <Link to="/cadastro" style={navLinkStyle}>Cadastro</Link>
          </div>
        </nav>
      </header>
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h1 style={titleStyle}>Login</h1>
          <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="E-mail" style={inputStyle} />
          <input type="password" placeholder="Senha" style={inputStyle} />
          <label style={checkboxLabelStyle}>
            <input type="checkbox" style={{ marginRight: '8px' }} />
            Lembrar-me
          </label>
          <button type="submit" style={buttonStyle}>Entrar</button>
        </form>
        <div style={linksStyle}>
          <Link to="/lembrar-senha" style={linkStyle}>Esqueci minha senha</Link>
          {' | '}
          <Link to="/cadastro" style={linkStyle}>Não tem conta? Cadastre-se</Link>
        </div>
        <hr style={hrStyle} />
        <div style={quickAccessBoxStyle}>
          <p style={quickAccessTitleStyle}>Acesso Rápido (Desenvolvimento)</p>
          <div style={gridStyle}>
            <button style={redButtonStyle} onClick={() => navigate('/leitor/perfil')}>LEITOR</button>
            <button style={redButtonStyle} onClick={() => navigate('/autor/noticias')}>AUTOR</button>
            <button style={redButtonStyle} onClick={() => navigate('/editor/painel')}>EDITOR</button>
            <button style={redButtonStyle} onClick={() => navigate('/admin/dashboard')}>SUPERADMIN</button>
          </div>
        </div>
        </div>
      </div>
      <footer style={{ backgroundColor: '#1a1a2e', color: '#aaa', textAlign: 'center', padding: '30px 20px', marginTop: 'auto' }}>
        <p>&copy; 2025 Portal de Notícias. Todos os direitos reservados.</p>
        <div style={{ marginTop: '10px' }}>
          <a href="#" style={{ color: '#aaa', margin: '0 10px', textDecoration: 'none' }}>Sobre</a>
          <a href="#" style={{ color: '#aaa', margin: '0 10px', textDecoration: 'none' }}>Contato</a>
          <a href="#" style={{ color: '#aaa', margin: '0 10px', textDecoration: 'none' }}>Termos</a>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
