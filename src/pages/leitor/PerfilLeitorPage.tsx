import React, { useState } from 'react';
import { Link } from 'react-router';

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

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: '40px 20px'
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
              src="https://png.pngtree.com/png-vector/20220529/ourmid/pngtree-bearded-man-face-male-generic-profile-picture-isolated-retro-character-vector-png-image_46003888.jpg"
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

export default PerfilLeitorPage;