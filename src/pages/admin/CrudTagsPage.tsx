import type { FC } from 'react';
import { Link } from 'react-router'; // Padrão recomendado

interface Tag {
  id: number;
  nome: string;
}

const mockTags: Tag[] = [
  { id: 1, nome: 'Tecnologia' },
  { id: 2, nome: 'Política' },
  { id: 3, nome: 'Esportes' },
  { id: 4, nome: 'Economia' }
];

const CrudTagsPage: FC = () => {
  // Configuração de estilos reutilizáveis
  const containerStyle: React.CSSProperties = {
    padding: '40px',
    backgroundColor: '#f9fafb', // Fundo cinza bem claro
    minHeight: '100vh',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  };

  const cardStyle: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
    border: '1px solid #f3f4f6',
    overflow: 'hidden'
  };

  const thStyle: React.CSSProperties = {
    padding: '16px 24px',
    backgroundColor: '#f8fafc',
    textAlign: 'left',
    fontSize: '12px',
    fontWeight: 600,
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    borderBottom: '1px solid #e2e8f0'
  };

  const tdStyle: React.CSSProperties = {
    padding: '16px 24px',
    borderBottom: '1px solid #f1f5f9',
    fontSize: '14px',
    color: '#334155'
  };

  return (
    <div style={containerStyle}>
      <div style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#111827', margin: 0 }}>Tags</h1>
          <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>Organize as categorias do seu conteúdo.</p>
        </div>
        
        <Link 
          to="/admin/tags/nova"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '10px 20px',
            backgroundColor: '#4f46e5', // Índigo moderno
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 600,
            boxShadow: '0 2px 4px rgba(79, 70, 229, 0.2)'
          }}
        >
          + Criar Nova
        </Link>
      </div>

      <div style={cardStyle}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={thStyle}>Nome da Tag</th>
              <th style={{ ...thStyle, width: '100px', textAlign: 'center' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {mockTags.map((tag) => (
              <tr key={tag.id} style={{ transition: 'background 0.2s' }}>
                <td style={tdStyle}>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    backgroundColor: '#eef2ff', // Fundo lilás claro
                    color: '#4f46e5', // Texto índigo
                    borderRadius: '9999px', // Formato de pílula (Pill)
                    fontSize: '13px',
                    fontWeight: 600,
                    border: '1px solid #e0e7ff'
                  }}>
                    # {tag.nome}
                  </span>
                </td>
                <td style={{ ...tdStyle, textAlign: 'center' }}>
                  <Link
                    to={`/admin/tags/${tag.id}/editar`}
                    style={{
                      display: 'inline-block',
                      padding: '6px 12px',
                      backgroundColor: 'white',
                      color: '#475569',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: 500,
                      border: '1px solid #d1d5db'
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
    </div>
  );
};

export default CrudTagsPage;