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

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ marginBottom: '20px' }}>Lista de UFs</h1>
      <Link 
        to="/admin/ufs/nova" 
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
          <tr style={{ backgroundColor: '#f8f9fa' }}>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>Nome</th>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #dee2e6', width: '100px' }}>Sigla</th>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #dee2e6', width: '120px' }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {ufs.map((uf) => (
            <tr key={uf.id} style={{ borderBottom: '1px solid #dee2e6' }}>
              <td style={{ padding: '12px' }}>{uf.nomeUF}</td>
              <td style={{ padding: '12px' }}>{uf.sigla}</td>
              <td style={{ padding: '12px' }}>
                <Link 
                  to={`/admin/ufs/${uf.id}/editar`} 
                  style={{ 
                    color: '#007bff', 
                    textDecoration: 'none', 
                    fontWeight: 'bold' 
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

export default CrudUFPage;