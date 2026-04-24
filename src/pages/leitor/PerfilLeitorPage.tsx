import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PerfilLeitorPage = () => {
  const [editando, setEditando] = useState(false);

  const [readerData, setReaderData] = useState({
    name: 'João Silva',
    email: 'joao.silva@email.com',
    uf: 'SP',
    city: 'São Paulo',
    bio: 'Sou apaixonado por notícias e tecnologia.',
    dataCadastro: '01/01/2024',
  });

  const [tempData, setTempData] = useState(readerData);

  const comments = [
    { texto: 'Ótima notícia!', titulo: 'Tecnologia hoje', id: 1, data: '10/04/2026' },
    { texto: 'Muito bom!', titulo: 'Meio ambiente', id: 2, data: '11/04/2026' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempData({ ...tempData, [e.target.name]: e.target.value });
  };

  const salvar = () => {
    setReaderData(tempData);
    setEditando(false);
  };

  const cancelar = () => {
    setTempData(readerData);
    setEditando(false);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '10px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f2f5'
    }}>
      <div style={{
        background: '#fff',
        padding: 30,
        borderRadius: 12,
        width: 400,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>

        <h1 style={{ textAlign: 'center' }}>Perfil do Leitor</h1>

        {/* Avatar */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <img
            src="https://via.placeholder.com/120"
            alt="avatar"
            style={{ width: 120, height: 120, borderRadius: '50%' }}
          />
        </div>

        {/* Dados */}
        {editando ? (
          <>
            <input name="name" value={tempData.name} onChange={handleChange} style={inputStyle} />
            <input name="email" value={tempData.email} onChange={handleChange} style={inputStyle} />
            <input name="uf" value={tempData.uf} onChange={handleChange} style={inputStyle} />
            <input name="city" value={tempData.city} onChange={handleChange} style={inputStyle} />
            <input name="bio" value={tempData.bio} onChange={handleChange} style={inputStyle} />

            <button
              onClick={salvar}
              style={{ ...buttonStyle, backgroundColor: '#28a745', color: '#fff', width: '100%', marginBottom: 10 }}
            >
              Salvar
            </button>

            <button
              onClick={cancelar}
              style={{ ...buttonStyle, backgroundColor: '#dc3545', color: '#fff', width: '100%' }}
            >
              Cancelar
            </button>
          </>
        ) : (
          <>
            <p><b>Nome:</b> {readerData.name}</p>
            <p><b>Email:</b> {readerData.email}</p>
            <p><b>UF:</b> {readerData.uf}</p>
            <p><b>Cidade:</b> {readerData.city}</p>
            <p><b>Bio:</b> {readerData.bio}</p>
            <p><b>Membro desde:</b> {readerData.dataCadastro}</p>

            <button
              onClick={() => setEditando(true)}
              style={{ ...buttonStyle, backgroundColor: '#007bff', color: '#fff', width: '100%', marginBottom: 20 }}
            >
              Editar Perfil
            </button>
          </>
        )}

        {/* Comentários */}
        <h2 style={{ marginBottom: 10 }}>Meus Comentários</h2>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {comments.map((c, i) => (
            <li key={i} style={{
              background: '#f8f9fa',
              padding: 12,
              borderRadius: 8,
              marginBottom: 10
            }}>
              <p style={{ margin: 0 }}>"{c.texto}"</p>

              <Link to={`/noticia/${c.id}`} style={{
                color: '#007bff',
                fontWeight: 'bold',
                textDecoration: 'none'
              }}>
                {c.titulo}
              </Link>

              <br />
              <small style={{ color: '#666' }}>{c.data}</small>
            </li>
          ))}
        </ul>

        <Link
          to="/"
          style={{
            display: 'block',
            textAlign: 'center',
            marginTop: 15,
            textDecoration: 'none',
            color: '#007bff',
            fontWeight: 'bold'
          }}
        >
          Ver Notícias
        </Link>

      </div>
    </div>
  );
};

export default PerfilLeitorPage;