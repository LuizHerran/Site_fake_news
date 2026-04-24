import React from 'react';
import { useParams, Link } from 'react-router';
import noticias from '../../data/noticias';
import tags from '../../data/tags';
import usuarios from '../../data/usuarios';

const BuscaPorTagPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const tag = tags.find(t => t.slug === slug);
  const noticiasDaTag = noticias.filter(n => n.publicada && tag && n.tags.includes(tag.id));
  const getAutor = (id: number) => usuarios.find(u => u.id === id)?.nome ?? 'Desconhecido';

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
        <nav style={{ marginBottom: '20px', fontSize: '14px' }}>
          <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>Home</Link>
          {' > '}
          <strong>{tag?.nome ?? slug}</strong>
        </nav>

      <div style={{ display: 'inline-block', padding: '8px 20px', backgroundColor: '#007bff', color: 'white', borderRadius: '20px', fontSize: '18px', fontWeight: 'bold', marginBottom: '30px' }}>
        #{tag?.nome ?? slug}
      </div>

      <p style={{ color: '#666', marginBottom: '20px' }}>{noticiasDaTag.length} notícia(s) encontrada(s)</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        {noticiasDaTag.length === 0 ? (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#999', padding: '40px' }}>
            Nenhuma notícia encontrada para a tag "{slug}".
          </p>
        ) : (
          noticiasDaTag.map(noticia => (
            <article key={noticia.id} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <img src={noticia.imagemCapa} alt={noticia.titulo}
                style={{ width: '100%', height: '160px', objectFit: 'cover' }}
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x160'; }}
              />
              <div style={{ padding: '16px' }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#333', fontSize: '16px' }}>{noticia.titulo}</h3>
                <p style={{ margin: '0 0 10px 0', color: '#666', fontSize: '13px' }}>{getAutor(noticia.autorId)} · {new Date(noticia.criadoEm).toLocaleDateString('pt-BR')}</p>
                <Link to={`/noticia/${noticia.id}`}
                  style={{ display: 'inline-block', backgroundColor: '#007bff', color: 'white', padding: '8px 16px', textDecoration: 'none', borderRadius: '5px', fontSize: '13px' }}>
                  Ler mais
                </Link>
              </div>
            </article>
          ))
        )}
      </div>

      <h3 style={{ marginBottom: '10px', color: '#333' }}>Tags Relacionadas</h3>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {tags.filter(t => t.slug !== slug).map(t => (
          <Link key={t.id} to={`/busca/tag/${t.slug}`}
            style={{ padding: '6px 16px', backgroundColor: '#e3f2fd', color: '#1976d2', borderRadius: '20px', textDecoration: 'none', fontSize: '13px' }}>
            {t.nome}
          </Link>
        ))}
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

export default BuscaPorTagPage;
