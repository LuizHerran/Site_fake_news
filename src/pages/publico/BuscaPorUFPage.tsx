import React from 'react';
import { useParams, Link } from 'react-router';
import noticias from '../../data/noticias';
import usuarios from '../../data/usuarios';
import ufs from '../../data/ufs';
import cidades from '../../data/cidades';

const BuscaPorUFPage: React.FC = () => {
  const { sigla } = useParams<{ sigla: string }>();
  const uf = ufs.find(u => u.sigla.toUpperCase() === (sigla || '').toUpperCase());
  const cidadesDaUF = cidades.filter(c => c.ufId === uf?.id);
  const cidadeIds = cidadesDaUF.map(c => c.id);
  const noticiasDaUF = noticias.filter(n => n.publicada && cidadeIds.includes(n.cidadeId));

  const getAutor = (id: number) => usuarios.find(u => u.id === id)?.nome ?? 'Desconhecido';

  const parseDate = (dateStr: string) => {
    const [datePart, timePart] = dateStr.split(' - ');
    const [day, month, year] = datePart.split('/');
    const [hour, minute] = timePart.split(':');

    return new Date(
      parseInt(year, 10),
      parseInt(month, 10) - 1,
      parseInt(day, 10),
      parseInt(hour, 10),
      parseInt(minute, 10)
    );
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

  const linkStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '20px',
    fontSize: '14px',
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <header style={headerStyle}>
        <nav style={navStyle}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/favicon.svg" alt="Portal de Notícias" style={{ width: '26px', height: '26px' }} />
            Portal de Notícias
          </Link>
          <div>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/login" style={linkStyle}>Login</Link>
            <Link to="/cadastro" style={linkStyle}>Cadastro</Link>
          </div>
        </nav>
      </header>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 20px 40px' }}>
      <nav style={{ marginBottom: '20px', fontSize: '14px', color: '#666' }}>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>Home</Link>
        {' > '}
        <span>Busca por UF</span>
        {' > '}
        <strong>{sigla?.toUpperCase()}</strong>
      </nav>

      <h1 style={{ marginBottom: '10px', color: '#333' }}>
        Notícias de {uf ? uf.nome : sigla?.toUpperCase()} ({noticiasDaUF.length})
      </h1>

      <div style={{ display: 'flex', gap: '20px' }}>
        <main style={{ flex: 3 }}>
          {noticiasDaUF.length === 0 ? (
            <p style={{ color: '#666', textAlign: 'center', padding: '40px' }}>
              Nenhuma notícia encontrada para <strong>{sigla?.toUpperCase()}</strong>.
            </p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
              {noticiasDaUF.map(noticia => (
                <article key={noticia.id} style={{ border: '1px solid #e0e0e0', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                  <img src={noticia.imagemCapa} alt={noticia.titulo}
                    style={{ width: '100%', height: '160px', objectFit: 'cover' }}
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x160'; }}
                  />
                  <div style={{ padding: '16px' }}>
                    <h3 style={{ margin: '0 0 8px 0', color: '#2c3e50', fontSize: '16px' }}>{noticia.titulo}</h3>
                    <p style={{ margin: '0 0 10px 0', color: '#555', fontSize: '13px' }}>{getAutor(noticia.autorId)} · {parseDate(noticia.criadoEm).toLocaleDateString('pt-BR')}</p>
                    <Link to={`/noticia/${noticia.id}`}
                      style={{ display: 'inline-block', backgroundColor: '#007bff', color: 'white', padding: '8px 16px', textDecoration: 'none', borderRadius: '5px', fontSize: '13px' }}>
                      Ler mais
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>

        <aside style={{ flex: 1, minWidth: '160px' }}>
          <h3 style={{ marginBottom: '10px', color: '#333', fontSize: '16px', borderBottom: '2px solid #007bff', paddingBottom: '8px' }}>UFs</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {ufs.map(u => (
              <li key={u.id} style={{ marginBottom: '6px' }}>
                <Link to={`/busca/uf/${u.sigla}`}
                  style={{ color: u.sigla === sigla?.toUpperCase() ? '#007bff' : '#555', textDecoration: 'none', fontWeight: u.sigla === sigla?.toUpperCase() ? 'bold' : 'normal', fontSize: '14px' }}>
                  {u.sigla} - {u.nome}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <footer style={{ backgroundColor: '#1a1a2e', color: '#aaa', textAlign: 'center', padding: '30px 20px', marginTop: '50px' }}>
        <p>&copy; 2025 Portal de Notícias. Todos os direitos reservados.</p>
        <div style={{ marginTop: '10px' }}>
          <a href="#" style={{ color: '#aaa', margin: '0 10px', textDecoration: 'none' }}>Sobre</a>
          <a href="#" style={{ color: '#aaa', margin: '0 10px', textDecoration: 'none' }}>Contato</a>
          <a href="#" style={{ color: '#aaa', margin: '0 10px', textDecoration: 'none' }}>Termos</a>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default BuscaPorUFPage;
