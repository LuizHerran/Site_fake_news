import { type FC } from 'react';
import { Link } from 'react-router'; 

type Profile = {
  id: number;
  name: string;
};

const mockProfiles: Profile[] = [
  { id: 1, name: 'Administrador' },
  { id: 2, name: 'Usuário' },
  { id: 3, name: 'Editor' },
  { id: 4, name: 'Visualizador' },
];

const CrudPerfisPage: FC = () => {
  // Estilos base
  const containerStyle: React.CSSProperties = {
    padding: '40px',
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
    fontFamily: '"Inter", system-ui, -apple-system, sans-serif'
  };

  const tableCardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    marginTop: '24px'
  };

  const thStyle: React.CSSProperties = {
    padding: '16px 24px',
    textAlign: 'left',
    fontSize: '12px',
    fontWeight: 600,
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    backgroundColor: '#f1f5f9'
  };

  const tdStyle: React.CSSProperties = {
    padding: '16px 24px',
    borderBottom: '1px solid #f1f5f9',
    fontSize: '14px',
    color: '#334155'
  };

  return (
    <div style={containerStyle}>
      {/* Header Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1000px', margin: '0 auto' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#1e293b', margin: 0 }}>Perfis de Acesso</h1>
          <p style={{ color: '#64748b', margin: '4px 0 0 0' }}>Gerencie as permissões e níveis de usuários.</p>
        </div>
        
        <Link
          to="/admin/perfis/nova"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '10px 20px',
            backgroundColor: '#10b981',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 600,
            transition: 'background 0.2s',
          }}
        >
          + Novo Perfil
        </Link>
      </div>

      {/* Table Container */}
      <div style={{ ...tableCardStyle, maxWidth: '1000px', margin: '24px auto 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={thStyle}>Nome do Perfil</th>
              <th style={{ ...thStyle, width: '120px', textAlign: 'center' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {mockProfiles.map((profile) => (
              <tr key={profile.id} style={{ transition: 'background 0.2s' }}>
                <td style={tdStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* Um pequeno ícone visual para cada perfil */}
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#cbd5e1' }}></div>
                    <span style={{ fontWeight: 500 }}>{profile.name}</span>
                  </div>
                </td>
                <td style={{ ...tdStyle, textAlign: 'center' }}>
                  <Link
                    to={`/admin/perfis/${profile.id}/editar`}
                    style={{
                      color: '#2563eb',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: 500,
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

export default CrudPerfisPage;