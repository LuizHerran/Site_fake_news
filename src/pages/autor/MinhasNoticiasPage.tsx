import type { FC } from 'react';
import { Link } from 'react-router';

interface MinhaNoticia {
  id: string;
  titulo: string;
  data: string;
}

<div style={{ textAlign: 'center', marginBottom: '20px' }}>
  <input placeholder="Buscar..." style={{ padding: 8, marginRight: 10 }} />
  <select style={{ padding: 8 }}>
    <option>Todas</option>
    <option>Publicadas</option>
    <option>Rascunhos</option>
  </select>
</div>

const MinhasNoticiasPage: FC = () => {
  const noticias: MinhaNoticia[] = [
    { id: '1', titulo: 'Primeira Notícia Incrível', data: '2024-01-15' },
    { id: '2', titulo: 'Segunda Notícia Importante', data: '2024-02-20' },
    { id: '3', titulo: 'Terceira Notícia Exclusiva', data: '2024-03-10' },
    { id: '4', titulo: 'Quarta Notícia Relevante', data: '2024-04-05' },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>Minhas Notícias</h1>
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <Link 
          to="/autor/nova-noticia"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '12px 30px',
            textDecoration: 'none',
            borderRadius: '6px',
            fontSize: '18px',
            fontWeight: 'bold',
            boxShadow: '0 2px 4px rgba(0,123,255,0.3)',
            transition: 'background-color 0.2s'
          }}
        >
          + Criar Nova Notícia
        </Link>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '25px' }}>
        {noticias.map((noticia) => (
          <div 
            key={noticia.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '25px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              backgroundColor: '#fff',
              transition: 'box-shadow 0.2s'
            }}
          >
            <h3 style={{ margin: '0 0 15px 0', color: '#333', fontSize: '22px' }}>{noticia.titulo}</h3>
            <p style={{ margin: '0 0 25px 0', color: '#666', fontSize: '16px', fontStyle: 'italic' }}>
              Data: {noticia.data}
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Link 
                to={`/autor/editar/${noticia.id}`}
                style={{
                  backgroundColor: '#28a745',
                  color: 'white',
                  padding: '10px 20px',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '15px',
                  fontWeight: '500',
                  flex: 1,
                  textAlign: 'center',
                  transition: 'background-color 0.2s'
                }}
              >
                Editar
              </Link>
              <Link 
                to={`/autor/comentar/${noticia.id}`}
                style={{
                  backgroundColor: '#ffc107',
                  color: '#333',
                  padding: '10px 20px',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '15px',
                  fontWeight: '500',
                  flex: 1,
                  textAlign: 'center',
                  transition: 'background-color 0.2s'
                }}
              >
                Comentar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinhasNoticiasPage;