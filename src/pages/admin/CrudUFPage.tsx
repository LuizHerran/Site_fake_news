import { Link } from 'react-router'; 

interface UF {
  id: number;
  nomeUF: string;
  sigla: string;
}

const CrudUFPage = () => {
  const ufs: UF[] = [
    { id: 1, nomeUF: 'São Paulo', sigla: 'SP' },
    { id: 2, nomeUF: 'Rio de Janeiro', sigla: 'RJ' },
    { id: 3, nomeUF: 'Minas Gerais', sigla: 'MG' },
    { id: 4, nomeUF: 'Bahia', sigla: 'BA' },
  ];

  // Estilos constantes
  const containerStyle: React.CSSProperties = {
    padding: '40px',
    backgroundColor: '#f1f5f9',
    minHeight: '100vh',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  };

  const cardStyle: React.CSSProperties = {
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    overflow: 'hidden'
  };

  const thStyle: React.CSSProperties = {
    padding: '16px 24px',
    textAlign: 'left',
    fontSize: '12px',
    fontWeight: 700,
    color: '#475569',
    textTransform: 'uppercase',
    letterSpacing: '0.025em',
    backgroundColor: '#f8fafc',
    borderBottom: '2px solid #e2e8f0'
  };

  const tdStyle: React.CSSProperties = {
    padding: '16px 24px',
    borderBottom: '1px solid #f1f5f9',
    fontSize: '15px',
    color: '#1e293b'
  };

  return (
    <div style={containerStyle}>
      {/* Header Section */}
      <div style={{ maxWidth: '900px', margin: '0 auto 24px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', margin: 0 }}>UFs</h1>
          <p style={{ color: '#64748b', marginTop: '4px' }}>Configuração regional do sistema.</p>
        </div>
        
        <Link 
          to="/admin/ufs/nova" 
          style={{ 
            padding: '10px 24px', 
            backgroundColor: '#0f172a', // Azul quase preto, muito elegante
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 600,
            transition: '0.2s'
          }}
        >
          + Criar UF
        </Link>
      </div>

      {/* Table Card */}
      <div style={cardStyle}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={thStyle}>Estado</th>
              <th style={{ ...thStyle, width: '100px' }}>Sigla</th>
              <th style={{ ...thStyle, width: '120px', textAlign: 'right' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {ufs.map((uf) => (
              <tr key={uf.id} style={{ transition: 'background 0.2s' }}>
                <td style={{ ...tdStyle, fontWeight: 500 }}>{uf.nomeUF}</td>
                <td style={tdStyle}>
                  <code style={{ 
                    backgroundColor: '#f1f5f9', 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    color: '#475569',
                    fontSize: '13px'
                  }}>
                    {uf.sigla}
                  </code>
                </td>
                <td style={{ ...tdStyle, textAlign: 'right' }}>
                  <Link 
                    to={`/admin/ufs/${uf.id}/editar`} 
                    style={{ 
                      color: '#2563eb', 
                      textDecoration: 'none', 
                      fontSize: '14px',
                      fontWeight: 600
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

export default CrudUFPage;