import React from 'react';
import { useParams, Link } from 'react-router';

type Params = {
  tag: string;
};

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

const fakeNews: NewsItem[] = [
  {
    id: '1',
    title: 'Nova tecnologia revoluciona o mercado',
    excerpt: 'Uma inovação tecnológica está mudando a forma como interagimos com dispositivos...',
    date: '2024-01-15',
    tags: ['tecnologia']
  },
  {
    id: '2',
    title: 'Vitória histórica no futebol',
    excerpt: 'O time nacional conquista o campeonato após anos de luta...',
    date: '2024-01-14',
    tags: ['esportes', 'futebol']
  },
  {
    id: '3',
    title: 'Avanço em IA e inovação',
    excerpt: 'Inteligência artificial promete soluções para problemas complexos...',
    date: '2024-01-13',
    tags: ['tecnologia', 'inovacao']
  },
  {
    id: '4',
    title: 'Debate político agita o congresso',
    excerpt: 'Políticos discutem reformas importantes para o país...',
    date: '2024-01-12',
    tags: ['politica']
  },
  {
    id: '5',
    title: 'Gadgets do futuro',
    excerpt: 'Os próximos lançamentos em tecnologia móvel...',
    date: '2024-01-11',
    tags: ['tecnologia']
  },
  {
    id: '6',
    title: 'Maratona internacional',
    excerpt: 'Atletas de elite competem pela medalha de ouro...',
    date: '2024-01-10',
    tags: ['esportes']
  }
];

const BuscaPorTagPage: React.FC = () => {
  const { tag } = useParams<Params>();

  const filteredNews = fakeNews.filter((news) => news.tags.includes(tag || ''));

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Breadcrumb */}
      <nav style={{ marginBottom: '20px', fontSize: '14px' }}>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none', marginRight: '5px' }}>
          Home
        </Link>
        {' > '}
        <span style={{ color: '#6c757d' }}>Busca por Tag: <strong>{tag}</strong></span>
      </nav>

      {/* Title */}
      <h1 style={{ marginBottom: '30px', color: '#333' }}>
        Notícias sobre &quot;{tag}&quot;
      </h1>

      {/* Grid de notícias */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '20px',
        }}
      >
        {filteredNews.length > 0 ? (
          filteredNews.map((news) => (
            <article
              key={news.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
              }}
            >
              <h3 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '1.2em' }}>
                {news.title}
              </h3>
              <p style={{ margin: '0 0 10px 0', color: '#666', lineHeight: '1.5' }}>
                {news.excerpt}
              </p>
              <small style={{ color: '#999', fontSize: '0.9em' }}>
                {news.date}
              </small>
              <div style={{ marginTop: '15px' }}>
                <Link
                  to={`/noticia/${news.id}`}
                  style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    padding: '10px 20px',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.95em',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
                >
                  Ler mais
                </Link>
              </div>
            </article>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#999', fontSize: '1.1em', padding: '40px' }}>
            Nenhuma notícia encontrada para a tag &quot;{tag}&quot;.
          </p>
        )}
      </div>
    </div>
  );
};

export default BuscaPorTagPage;
