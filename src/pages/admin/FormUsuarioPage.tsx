import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';

type User = { id: number; nome: string; email: string; perfil: string; };
type FormData = { nome: string; email: string; perfil: string; };

const mockUsers: User[] = [
  { id: 1, nome: 'João Silva', email: 'joao@email.com', perfil: 'Admin' },
  { id: 2, nome: 'Maria Santos', email: 'maria@email.com', perfil: 'User' },
  { id: 3, nome: 'Pedro Oliveira', email: 'pedro@email.com', perfil: 'User' },
];

const FormUsuarioPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const userId = id ? Number(id) : null;
  const userInicial = mockUsers.find((u) => u.id === userId);

  const [form, setForm] = useState<FormData>({
    nome: userInicial?.nome || '',
    email: userInicial?.email || '',
    perfil: userInicial?.perfil || 'User',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Estilos padronizados
  const cardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)',
    border: '1px solid #f1f5f9'
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
    fontSize: '15px',
    color: '#1e293b',
    outline: 'none',
    boxSizing: 'border-box',
    marginTop: '6px',
    transition: 'all 0.2s'
  };

  const readOnlyStyle: React.CSSProperties = {
    ...inputStyle,
    backgroundColor: '#f8fafc',
    color: '#94a3b8',
    cursor: 'not-allowed',
    borderStyle: 'dashed'
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '13px',
    fontWeight: 700,
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.025em',
    display: 'block',
    marginTop: '20px'
  };

  return (
    <div style={{ padding: '60px 20px', backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '480px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          {/* AVATAR PLACEHOLDER */}
          <div style={{ 
            width: '80px', height: '80px', backgroundColor: '#6366f1', color: 'white', 
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '32px', margin: '0 auto 16px', fontWeight: 700,
            boxShadow: '0 10px 15px -3px rgba(99, 102, 241, 0.4)'
          }}>
            {form.nome.charAt(0).toUpperCase() || '?'}
          </div>
          <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            {userId ? 'Editar Usuário' : 'Novo Usuário'}
          </h1>
          <p style={{ color: '#64748b', marginTop: '4px' }}>ID do Registro: {userId || 'Novo'}</p>
        </div>

        <div style={cardStyle}>
          <form onSubmit={(e) => { e.preventDefault(); console.log(form); navigate('/admin/usuarios'); }}>
            
            <label style={{ ...labelStyle, marginTop: 0 }}>Nome Completo</label>
            <input
              type="text"
              name="nome"
              placeholder="Ex: João Silva"
              value={form.nome}
              onChange={handleChange}
              style={inputStyle}
              required
            />

            <label style={labelStyle}>E-mail (Não editável)</label>
            <input
              type="email"
              name="email"
              value={form.email}
              readOnly
              style={readOnlyStyle}
            />

            <label style={labelStyle}>Nível de Acesso</label>
            <select
              name="perfil"
              value={form.perfil}
              onChange={handleChange}
              style={{ ...inputStyle, appearance: 'none', backgroundColor: 'white' }}
            >
              <option value="Admin">Administrador (Acesso Total)</option>
              <option value="User">Usuário Padrão (Leitor)</option>
              <option value="Autor">Autor (Escrita)</option>
            </select>

            <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button 
                type="submit"
                style={{
                  padding: '14px',
                  backgroundColor: '#0f172a',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
              >
                Salvar Alterações
              </button>

              <Link to="/admin/usuarios" style={{ textDecoration: 'none', textAlign: 'center' }}>
                <span style={{ fontSize: '14px', color: '#64748b', fontWeight: 500 }}>Voltar para a lista</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormUsuarioPage;