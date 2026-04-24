import React from 'react';
import { useParams, Link } from 'react-router';

interface Noticia {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  uf: string;
}

const BuscaPorUFPage: React.FC = () => {
  const { uf } = useParams<{ uf: string }>();

  const noticias: Noticia[] = [
    {
      id: '1',
      title: 'Notícia Importante em São Paulo',
      excerpt: 'Esta é uma notícia relevante sobre eventos em São Paulo, com detalhes sobre o impacto local...',
      date: '2024-10-01',
      uf: 'SP'
    },
    {
      id: '2',
      title: 'Evento Cultural em SP',
      excerpt: 'Descrição do evento cultural que atraiu milhares de pessoas na capital paulista...',
      date: '2024-10-05',
      uf: 'SP'
    },
    {
      id: '3',
      title: 'Notícia do Rio de Janeiro',
      excerpt: 'Atualizações sobre o turismo no Rio de Janeiro e novas atrações para visitantes...',
      date: '2024-10-02',
      uf: 'RJ'
    },
    {
      id: '4',
      title: 'Esportes no RJ',
      excerpt: 'Competições esportivas agitam o estado do Rio de Janeiro este mês...',
      date: '2024-10-06',
      uf: 'RJ'
    },
    {
      id: '5',
      title: 'Economia em Minas Gerais',
      excerpt: 'Análise do crescimento econômico em Belo Horizonte e região metropolitana...',
      date: '2024-10-03',
      uf: 'MG'
    },
    {
      id: '6',
      title: 'Educação em MG',
      excerpt: 'Novos investimentos em educação no estado de Minas Gerais...',
      date: '2024-10-07',
      uf: 'MG'
    }
  ];

  const filteredNoticias = noticias.filter(noticia =>
    noticia.uf.toUpperCase() === (uf || '').toUpperCase()
  );

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6'
    }}>
      {/* Breadcrumb */}
      <nav style={{
        marginBottom: '30px',
        fontSize: '14px',
        color: '#666'
      }}>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none', fontWeight: '500' }}>
          Início
        </Link>
        {' > '}
        <Link to="/busca" style={{ color: '#007bff', textDecoration: 'none', fontWeight: '500' }}>
          Busca por UF
        </Link>
        {' > '}
        <span style={{ fontWeight: 'bold', color: '#333' }}>{uf?.toUpperCase()}</span>
      </nav>

      {/* Título */}
      <h1 style={{
        marginBottom: '40px',
        color: '#333',
        fontSize: '2.5rem',
        textAlign: 'center'
      }}>
        Notícias da {uf?.toUpperCase()}
      </h1>

      {filteredNoticias.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '40px',
          color: '#666',
          fontSize: '1.2rem'
        }}>
          Nenhuma notícia encontrada para <strong>{uf?.toUpperCase()}</strong>.
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '25px',
          marginBottom: '40px'
        }}>
          {filteredNoticias.map((noticia) => (
            <article
              key={noticia.id}
              style={{
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                padding: '25px',
                backgroundColor: '#fff',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                transition: 'box-shadow 0.3s ease'
              }}
            >
              <h3 style={{
                margin: '0 0 15px 0',
                color: '#2c3e50',
                fontSize: '1.4rem',
                lineHeight: '1.4'
              }}>
                {noticia.title}
              </h3>
              <p style={{
                margin: '0 0 15px 0',
                color: '#555',
                fontSize: '1rem'
              }}>
                {noticia.excerpt}
              </p>
              <p style={{
                margin: '0 0 20px 0',
                fontSize: '0.9rem',
                color: '#888',
                fontStyle: 'italic'
              }}>
                Data: {noticia.date}
              </p>
              <Link
                to={`/noticia/${noticia.id}`}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#007bff',
                  color: 'white',
                  padding: '12px 24px',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  transition: 'background-color 0.3s ease'
                }}
              >
                Ler mais
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default BuscaPorUFPage;
