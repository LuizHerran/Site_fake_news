import type { FC } from 'react';
import { Link } from 'react-router';

interface Tag {
  id: number;
  nome: string;
}

const mockTags: Tag[] = [
  { id: 1, nome: 'Tag 1' },
  { id: 2, nome: 'Tag 2' },
  { id: 3, nome: 'Tag 3' }
];

const CrudTagsPage: FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Tags</h1>
      <Link 
        to="/admin/tags/nova"
        style={{
          display: 'inline-block',
          marginBottom: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px'
        }}
      >
        Criar Nova
      </Link>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#f2f2f2', textAlign: 'left' }}>Nome da Tag</th>
            <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#f2f2f2', textAlign: 'left' }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {mockTags.map((tag) => (
            <tr key={tag.id}>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>{tag.nome}</td>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>
                <Link
                  to={`/admin/tags/${tag.id}/editar`}
                  style={{
                    display: 'inline-block',
                    padding: '6px 12px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px'
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

export default CrudTagsPage;