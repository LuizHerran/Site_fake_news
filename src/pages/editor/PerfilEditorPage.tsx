import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PerfilEditorPage: React.FC = () => {
  const [editando, setEditando] = useState(false);

  const [user, setUser] = useState({
    nome: 'João Silva',
    email: 'joao.silva@news.com',
    cidade: 'São Paulo',
    uf: 'SP',
    bio: 'Editor chefe apaixonado por jornalismo.',
    dataCadastro: '15/03/2020',
  });

  const [formData, setFormData] = useState(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const salvar = () => {
    setUser(formData);
    setEditando(false);
  };

  const cancelar = () => {
    setFormData(user);
    setEditando(false);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f1f5f9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter, Arial'
    }}>

      <div style={{
        width: '100%',
        maxWidth: '500px',
        background: '#fff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
      }}>

        <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>
          Perfil do Editor
        </h1>

        {/* Avatar */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img
            src="https://via.placeholder.com/120"
            alt="avatar"
            style={{
              borderRadius: '50%',
              border: '3px solid #3b82f6'
            }}
          />
        </div>

        {!editando ? (
          <>
            <Info label="Nome" value={user.nome} />
            <Info label="Email" value={user.email} />
            <Info label="Cidade/UF" value={`${user.cidade}/${user.uf}`} />
            <Info label="Bio" value={user.bio} />
            <Info label="Cadastro" value={user.dataCadastro} />

            <button style={btnPrimary} onClick={() => setEditando(true)}>
              Editar Perfil
            </button>
          </>
        ) : (
          <>
            <Input name="nome" value={formData.nome} onChange={handleChange} />
            <Input name="email" value={formData.email} onChange={handleChange} />
            <Input name="cidade" value={formData.cidade} onChange={handleChange} />
            <Input name="uf" value={formData.uf} onChange={handleChange} />
            <Input name="bio" value={formData.bio} onChange={handleChange} />

            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={btnSuccess} onClick={salvar}>Salvar</button>
              <button style={btnDanger} onClick={cancelar}>Cancelar</button>
            </div>
          </>
        )}

        <Link to="/editor/painel" style={linkBack}>
          ← Voltar ao Painel
        </Link>

      </div>
    </div>
  );
};

/* COMPONENTES */

const Info = ({ label, value }: { label: string; value: string }) => (
  <div style={{ marginBottom: '10px' }}>
    <strong style={{ color: '#64748b' }}>{label}:</strong>
    <div>{value}</div>
  </div>
);

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    style={{
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '6px',
      border: '1px solid #cbd5e1'
    }}
  />
);

/* STYLES */

const btnPrimary = {
  width: '100%',
  padding: '10px',
  background: '#3b82f6',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  marginTop: '10px'
};

const btnSuccess = {
  flex: 1,
  padding: '10px',
  background: '#22c55e',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer'
};

const btnDanger = {
  flex: 1,
  padding: '10px',
  background: '#ef4444',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer'
};

const linkBack = {
  display: 'block',
  textAlign: 'center' as const,
  marginTop: '20px',
  color: '#3b82f6',
  textDecoration: 'none'
};

export default PerfilEditorPage;