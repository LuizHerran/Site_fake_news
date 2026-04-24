import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

type User = {
  id: number;
  nome: string;
  email: string;
  perfil: string;
};

type FormData = {
  nome: string;
  email: string;
  perfil: string;
};

const mockUsers: User[] = [
  { id: 1, nome: 'João Silva', email: 'joao@email.com', perfil: 'Admin' },
  { id: 2, nome: 'Maria Santos', email: 'maria@email.com', perfil: 'User' },
  { id: 3, nome: 'Pedro Oliveira', email: 'pedro@email.com', perfil: 'User' },
];

const FormUsuarioPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = id ? Number(id) : null;

  const userInicial = mockUsers.find((u) => u.id === userId);

  const [form, setForm] = useState<FormData>({
    nome: userInicial?.nome || '',
    email: userInicial?.email || '',
    perfil: userInicial?.perfil || 'User',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Salvando usuário:', {
      id: userId,
      ...form,
    });
  };

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '500px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
    } as React.CSSProperties,
    h1: { color: '#333', marginBottom: '20px' } as React.CSSProperties,
    form: {
      display: 'flex',
      flexDirection: 'column',
    } as React.CSSProperties,
    label: {
      marginBottom: '5px',
      fontWeight: 'bold',
      color: '#555',
    } as React.CSSProperties,
    input: {
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
    } as React.CSSProperties,
    select: {
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
    } as React.CSSProperties,
    buttons: {
      display: 'flex',
      gap: '10px',
    } as React.CSSProperties,
    saveBtn: {
      padding: '12px 20px',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
    } as React.CSSProperties,
    cancelLink: {
      padding: '12px 20px',
      backgroundColor: '#6c757d',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '4px',
      display: 'inline-block',
      fontSize: '16px',
    } as React.CSSProperties,
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Editar Usuário</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Nome:</label>
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          style={styles.input}
          required
        />

        {/* EMAIL READONLY (ajuste da spec) */}
        <label style={styles.label}>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          readOnly
          style={styles.input}
        />

        <label style={styles.label}>Perfil:</label>
        <select
          name="perfil"
          value={form.perfil}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>

        <div style={styles.buttons}>
          <button type="submit" style={styles.saveBtn}>
            Salvar
          </button>

          <Link to="/admin/usuarios" style={styles.cancelLink}>
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormUsuarioPage;