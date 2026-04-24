
import type { FC } from 'react';
import { Link } from 'react-router';

type Status = 'pendente' | 'aprovado' | 'rejeitado';

interface Comment {
  id: number;
  autor: string;
  conteudo: string;
  status: Status;
  data: string; // Adicionei para o design
}

const mockComments: Comment[] = [
  { id: 1, autor: 'João Silva', conteudo: 'Ótimo conteúdo! Parabéns pela análise profunda dos dados.', status: 'pendente', data: '24/04/2026' },
  { id: 2, autor: 'Maria Oliveira', conteudo: 'Gostei muito, mas senti falta de fontes.', status: 'aprovado', data: '23/04/2026' },
  { id: 3, autor: 'Pedro Santos', conteudo: 'Não concordo com o ponto de vista apresentado.', status: 'pendente', data: '23/04/2026' },
  { id: 4, autor: 'Ana Costa', conteudo: 'Excelente! Compartilhei no meu LinkedIn.', status: 'aprovado', data: '22/04/2026' },
  { id: 5, autor: 'Carlos Lima', conteudo: 'Compre cripto moedas agora no link abaixo!!!', status: 'rejeitado', data: '21/04/2026' },
];

const GerenciarComentariosPage: FC = () => {
  const handleAprovar = (id: number) => console.log(`Aprovando ${id}`);
  const handleRejeitar = (id: number) => console.log(`Rejeitando ${id}`);

  const statusMap = {
    aprovado: { color: '#10b981', bg: '#ecfdf5', label: 'Aprovado' },
    rejeitado: { color: '#ef4444', bg: '#fef2f2', label: 'Rejeitado' },
    pendente: { color: '#f59e0b', bg: '#fffbeb', label: 'Pendente' },
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', padding: '40px 20px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', margin: 0 }}>💬 Moderação</h1>
            <p style={{ color: '#64748b', margin: '4px 0 0 0' }}>Gerencie o que os leitores estão dizendo no portal.</p>
          </div>
          <Link to="/admin/dashboard" style={{ textDecoration: 'none', color: '#6366f1', fontWeight: 600, fontSize: '14px' }}>
            ← Voltar ao Dashboard
          </Link>
        </header>

        {/* TABELA ESTILIZADA */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase' }}>Autor</th>
                <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase' }}>Comentário</th>
                <th style={{ padding: '16px 24px', textAlign: 'center', fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '16px 24px', textAlign: 'right', fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {mockComments.map((comment) => (
                <tr key={comment.id} style={{ borderBottom: '1px solid #f1f5f9', transition: 'background 0.2s' }}>
                  <td style={{ padding: '20px 24px', verticalAlign: 'top' }}>
                    <div style={{ fontWeight: 700, color: '#1e293b' }}>{comment.autor}</div>
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>{comment.data}</div>
                  </td>
                  <td style={{ padding: '20px 24px', maxWidth: '400px', lineHeight: '1.5', color: '#475569', fontSize: '15px' }}>
                    "{comment.conteudo}"
                  </td>
                  <td style={{ padding: '20px 24px', textAlign: 'center', verticalAlign: 'top' }}>
                    <span style={{ 
                      backgroundColor: statusMap[comment.status].bg, 
                      color: statusMap[comment.status].color,
                      padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 700
                    }}>
                      {statusMap[comment.status].label}
                    </span>
                  </td>
                  <td style={{ padding: '20px 24px', textAlign: 'right', verticalAlign: 'top' }}>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                      <button 
                        onClick={() => handleAprovar(comment.id)}
                        style={{ 
                          padding: '8px 12px', border: '1px solid #dcfce7', backgroundColor: '#f0fdf4', 
                          color: '#166534', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' 
                        }}
                      >
                        Aprovar
                      </button>
                      <button 
                        onClick={() => handleRejeitar(comment.id)}
                        style={{ 
                          padding: '8px 12px', border: '1px solid #fee2e2', backgroundColor: '#fef2f2', 
                          color: '#991b1b', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' 
                        }}
                      >
                        Bloquear
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GerenciarComentariosPage;