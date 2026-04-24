import type { FC } from 'react';
import { Link } from 'react-router';

type Status = 'pendente' | 'aprovado' | 'rejeitado';

interface Comment {
  id: number;
  autor: string;
  conteudo: string;
  status: Status;
}

const mockComments: Comment[] = [
  { id: 1, autor: 'João Silva', conteudo: 'Ótimo conteúdo!', status: 'pendente' },
  { id: 2, autor: 'Maria Oliveira', conteudo: 'Gostei muito.', status: 'aprovado' },
  { id: 3, autor: 'Pedro Santos', conteudo: 'Não concordo.', status: 'pendente' },
  { id: 4, autor: 'Ana Costa', conteudo: 'Excelente!', status: 'aprovado' },
  { id: 5, autor: 'Carlos Lima', conteudo: 'Spam.', status: 'rejeitado' },
];

const GerenciarComentariosPage: FC = () => {
  const handleAprovar = (id: number) => {
    console.log(`Aprovando comentário ${id}`);
  };

  const handleRejeitar = (id: number) => {
    console.log(`Rejeitando comentário ${id}`);
  };

  const getStatusColor = (status: Status): string => {
    switch (status) {
      case 'aprovado':
        return 'green';
      case 'rejeitado':
        return 'red';
      default:
        return 'orange';
    }
  };

  const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ margin: 0, color: '#333' }}>Gerenciar Comentários</h1>
        <Link
          to="/admin/dashboard"
          style={{
            textDecoration: 'none',
            color: '#007bff',
            fontWeight: 'bold',
            padding: '10px 20px',
            border: '2px solid #007bff',
            borderRadius: '6px',
          }}
          onMouseOver={(e) => {
            (e.target as HTMLElement).style.backgroundColor = '#007bff';
            (e.target as HTMLElement).style.color = 'white';
          }}
          onMouseOut={(e) => {
            (e.target as HTMLElement).style.backgroundColor = 'transparent';
            (e.target as HTMLElement).style.color = '#007bff';
          }}
        >
          Voltar ao Painel
        </Link>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <th style={{ border: '1px solid #ddd', padding: '15px 12px', textAlign: 'left', fontWeight: 'bold' }}>ID</th>
              <th style={{ border: '1px solid #ddd', padding: '15px 12px', textAlign: 'left', fontWeight: 'bold' }}>Autor</th>
              <th style={{ border: '1px solid #ddd', padding: '15px 12px', textAlign: 'left', fontWeight: 'bold' }}>Conteúdo</th>
              <th style={{ border: '1px solid #ddd', padding: '15px 12px', textAlign: 'left', fontWeight: 'bold' }}>Status</th>
              <th style={{ border: '1px solid #ddd', padding: '15px 12px', textAlign: 'left', fontWeight: 'bold' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {mockComments.map((comment) => (
              <tr key={comment.id} style={{ backgroundColor: comment.id % 2 === 0 ? '#f8f9fa' : 'white' }}>
                <td style={{ border: '1px solid #ddd', padding: '15px 12px' }}>{comment.id}</td>
                <td style={{ border: '1px solid #ddd', padding: '15px 12px' }}>{comment.autor}</td>
                <td style={{ border: '1px solid #ddd', padding: '15px 12px' }}>{comment.conteudo}</td>
                <td style={{ border: '1px solid #ddd', padding: '15px 12px' }}>
                  <span
                    style={{
                      color: getStatusColor(comment.status),
                      fontWeight: 'bold',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      backgroundColor: `${getStatusColor(comment.status)}20`,
                      fontSize: '14px',
                    }}
                  >
                    {capitalize(comment.status)}
                  </span>
                </td>
                <td style={{ border: '1px solid #ddd', padding: '15px 12px' }}>
                  <button
                    onClick={() => handleAprovar(comment.id)}
                    style={{
                      marginRight: '10px',
                      padding: '8px 16px',
                      backgroundColor: '#28a745',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                    }}
                    onMouseOver={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = '#218838';
                    }}
                    onMouseOut={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = '#28a745';
                    }}
                  >
                    Aprovar
                  </button>
                  <button
                    onClick={() => handleRejeitar(comment.id)}
                    style={{
                      padding: '8px 16px',
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                    }}
                    onMouseOver={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = '#c82333';
                    }}
                    onMouseOut={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = '#dc3545';
                    }}
                  >
                    Rejeitar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GerenciarComentariosPage;