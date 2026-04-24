import React, { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { Link } from 'react-router';

const LembrarSenhaPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess(true);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
    } finally {
      setLoading(false);
    }
  };

  const pageStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  };

  const titleStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '24px',
    color: '#333',
    fontSize: '24px',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    marginBottom: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    boxSizing: 'border-box',
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  };

  const disabledButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#6c757d',
    cursor: 'not-allowed',
  };

  const successStyle: React.CSSProperties = {
    backgroundColor: '#d4edda',
    color: '#155724',
    padding: '16px',
    borderRadius: '4px',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const linkStyle: React.CSSProperties = {
    display: 'block',
    textAlign: 'center',
    color: '#007bff',
    textDecoration: 'none',
    marginTop: '20px',
    fontSize: '16px',
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Lembrar Senha</h2>
        {!success ? (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Digite seu e-mail"
              required
              style={inputStyle}
            />
            <button
              type="submit"
              disabled={loading}
              style={loading ? disabledButtonStyle : buttonStyle}
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        ) : (
          <div>
            <div style={successStyle}>
              Se o e-mail estiver cadastrado, enviaremos as instruções para redefinir a senha.
            </div>
          </div>
        )}
        <Link to="/login" style={linkStyle}>
          Voltar para o Login
        </Link>
      </div>
    </div>
  );
};

export default LembrarSenhaPage;
