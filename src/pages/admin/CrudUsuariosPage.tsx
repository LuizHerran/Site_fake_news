import React from 'react';
import { Link } from 'react-router';

type Noticia = {
  id: number;
  titulo: string;
  autor: string;
  status: string;
};

const mockNoticias: Noticia[] = [
  { id: 1, titulo: 'Novos investimentos em infraestrutura', autor: 'João Silva', status: 'Publicada' },
  { id: 2, titulo: 'Rascunho de matéria sobre esportes', autor: 'Maria Souza', status: 'Não publicada' },
];

const CrudNoticiasPage: React.FC = () => {
  // Estilos padronizados
  const containerStyle: React.CSSProperties = {
    padding: '40px',
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
    fontFamily: 'system-ui, sans-serif'
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
    border: '1px solid #e2e8f0'
  };

  const thStyle: React.CSSProperties = {
    padding: '16px 24px',
    textAlign: 'left',
    fontSize: '12px',
    fontWeight: 700,
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    backgroundColor: '#f8fafc',
    borderBottom: '1px solid #e2e8f0'
  };

  const tdStyle: React.CSSProperties = {
    padding: '16px 24px',
    borderBottom: '1px solid #f1f5f9',
    fontSize: '14px',
    color: '#1e293b'
  };

  return (
    <div style={containerStyle}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Cabeçalho */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a', margin: 0 }}>Gerenciamento de Conteúdo</h1>
            <p style={{ color: '#64748b', margin: '4px 0 0 0' }}>Visualize e edite as notícias publicadas no portal.</p>
          </div>
          
          <Link
            to="/admin/noticias/nova"
            style={{
              padding: '12px 24px',
              backgroundColor: '#2563eb',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '14px',
              boxShadow: '0 4px 10px rgba(37, 99, 235, 0.2)'
            }}
          >
            + Nova Notícia
          </Link>
        </div>

        {/* Tabela de Notícias */}
        <div style={cardStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={thStyle}>Título da Notícia</th>
                <th style={thStyle}>Autor</th>
                <th style={thStyle}>Status</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {mockNoticias.map((noticia) => (
                <tr key={noticia.id} style={{ transition: 'background 0.2s' }}>
                  <td style={{ ...tdStyle, fontWeight: 500, maxWidth: '400px' }}>{noticia.titulo}</td>
                  <td style={tdStyle}>{noticia.autor}</td>
                  <td style={tdStyle}>
                    <span style={{
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 600,
                      backgroundColor: noticia.status === 'Publicada' ? '#dcfce7' : '#fee2e2',
                      color: noticia.status === 'Publicada' ? '#166534' : '#991b1b',
                      border: `1px solid ${noticia.status === 'Publicada' ? '#bbf7d0' : '#fecaca'}`
                    }}>
                      {noticia.status}
                    </span>
                  </td>
                  <td style={{ ...tdStyle, textAlign: 'right' }}>
                    <Link
                      to={`/admin/noticias/${noticia.id}/editar`}
                      style={{
                        color: '#2563eb',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '14px'
                      }}
                    >
                      Editar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {mockNoticias.length === 0 && (
            <div style={{ padding: '40px', textAlign: 'center', color: '#94a3b8' }}>
              Nenhuma notícia cadastrada até o momento.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CrudNoticiasPage;