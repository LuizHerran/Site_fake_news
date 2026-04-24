import React from 'react';
import { Link } from 'react-router';

type Noticia = {
  id: number;
  titulo: string;
  autor: string;
  status: string;
};

const mockNoticias: Noticia[] = [
  { id: 1, titulo: 'Notícia 1', autor: 'João', status: 'Publicada' },
  { id: 2, titulo: 'Notícia 2', autor: 'Maria', status: 'Não publicada' },
];

const CrudNoticiasPage: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ marginBottom: '20px' }}>Notícias (Admin)</h1>
      <Link
        to="/admin/noticias/nova"
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          marginBottom: '20px',
        }}
      >
        Criar Nova
      </Link>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f8f9fa' }}>
            <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>Título</th>
            <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>Autor</th>
            <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>Status</th>
            <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {mockNoticias.map((noticia) => (
            <tr key={noticia.id} style={{ backgroundColor: noticia.status === 'Publicada' ? '#d4edda' : '#f8d7da' }}>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>{noticia.titulo}</td>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>{noticia.autor}</td>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>{noticia.status}</td>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>
                <Link
                  to={`/admin/noticias/${noticia.id}/editar`}
                  style={{
                    color: '#007bff',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudNoticiasPage;