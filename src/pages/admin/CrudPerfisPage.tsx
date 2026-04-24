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
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ margin: '0 0 20px 0', color: '#333' }}>Perfis</h1>
        <Link
          to="/admin/perfis/nova"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          Criar Novo
        </Link>
      </div>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#f8f9fa' }}>
            <th
              style={{
                border: '1px solid #ddd',
                padding: '12px',
                textAlign: 'left',
                fontWeight: 'bold',
                color: '#333',
              }}
            >
              Nome do Perfil
            </th>
            <th
              style={{
                border: '1px solid #ddd',
                padding: '12px',
                textAlign: 'left',
                fontWeight: 'bold',
                color: '#333',
                width: '150px',
              }}
            >
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {mockProfiles.map((profile) => (
            <tr
              key={profile.id}
              style={{ backgroundColor: profile.id % 2 === 0 ? '#f8f9fa' : 'white' }}
            >
              <td
                style={{
                  border: '1px solid #ddd',
                  padding: '12px',
                }}
              >
                {profile.name}
              </td>
              <td
                style={{
                  border: '1px solid #ddd',
                  padding: '12px',
                }}
              >
                <Link
                  to={`/admin/perfis/${profile.id}/editar`}
                  style={{
                    display: 'inline-block',
                    padding: '6px 12px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '14px',
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

export default CrudPerfisPage;