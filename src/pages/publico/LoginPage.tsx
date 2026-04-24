import React from 'react';
import logo from "/favicon.svg";
import { BrowserRouter, Link, Route, Routes } from 'react-router';
import CadastroPage from './CadastroPage';
import HomePage from './HomePage';

const LoginPage: React.FC = () => {
  <BrowserRouter>
      <Routes>
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/Home" element={<HomePage />} /> 
      </Routes>
  </BrowserRouter>

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: '20px',
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
    textAlign: 'center' as const,
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
    boxSizing: 'border-box' as const,
  };

  const checkboxLabelStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center' as const,
    marginBottom: '20px',
    cursor: 'pointer' as const,
    fontSize: '14px',
    color: '#666',
  };

  const checkboxInputStyle: React.CSSProperties = {
    marginRight: '8px',
    width: '18px',
    height: '18px',
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer' as const,
    marginBottom: '20px',
  };

  const linksStyle: React.CSSProperties = {
    textAlign: 'center' as const,
    marginBottom: '30px',
  };

  const linkStyle: React.CSSProperties = {
    color: '#007bff',
    textDecoration: 'none' as const,
    fontWeight: '500' as const,
  };

  const hrStyle: React.CSSProperties = {
    margin: '30px 0',
    border: 'none',
    borderTop: '1px solid #eee',
  };

  const quickAccessTitleStyle: React.CSSProperties = {
    textAlign: 'center' as const,
    marginBottom: '20px',
    color: '#666',
    fontSize: '18px',
  };

  const quickAccessStyle: React.CSSProperties = {
    textAlign: 'center' as const,
  };

  const redButtonStyle: React.CSSProperties = {
    display: 'block',
    width: '100%',
    marginBottom: '10px',
    padding: '12px',
    backgroundColor: '#dc3545',
    color: 'white',
    textDecoration: 'none' as const,
    borderRadius: '5px',
    fontWeight: 'bold' as const,
    fontSize: '16px',
    cursor: 'pointer' as const,
    border: 'none',
  };

  return (

    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>Login</h1>
        <form>
          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            style={inputStyle}
            required
          />
          <label style={checkboxLabelStyle}>
            <input type="checkbox" style={checkboxInputStyle} />
            Lembrar-me
          </label>
          <button type="submit" style={buttonStyle}>
            Entrar
          </button>
        </form>
        <div style={linksStyle}>
          <Link to="/cadastro" style={linkStyle}>
            Cadastre-se
          </Link>{' '}
          |
          {' '}
          <Link to="/lembrar-senha" style={linkStyle}>
            Esqueceu a senha?
          </Link>
        </div>
        <hr style={hrStyle} />
        
        <div style={quickAccessStyle}>
          <h3 style={quickAccessTitleStyle}>
            Acesso Rápido (Desenvolvimento)
          </h3>

          <Link to="/leitor/perfil" style={redButtonStyle}>
            LEITOR
          </Link>

          <Link to="/autor/minhas-noticias" style={redButtonStyle}>
            AUTOR
          </Link>

          <Link to="/editor/painel" style={redButtonStyle}>
            EDITOR
          </Link>

          <Link to="/admin/dashboard" style={redButtonStyle}>
            SUPERADMIN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;