import React from 'react';
import { useNavigate } from 'react-router';

const LogsPage: React.FC = () => {
  const navigate = useNavigate();

  const logs = [
    { id: 1, usuario: 'João Silva', acao: 'Publicou notícia', alvo: 'Novos investimentos...', data: '24/04/2026 10:45' },
    { id: 2, usuario: 'Maria Souza', acao: 'Criou Tag', alvo: '#Economia', data: '24/04/2026 09:20' },
    { id: 3, usuario: 'Sistema', acao: 'Backup Automático', alvo: 'Banco de Dados', data: '24/04/2026 03:00' },
    { id: 4, usuario: 'Pedro Lima', acao: 'Editou Perfil', alvo: 'Editor', data: '23/04/2026 18:10' },
  ];

  return (
    <div style={{ padding: '40px', backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <button 
          onClick={() => navigate(-1)} 
          style={{ marginBottom: '20px', background: 'none', border: 'none', color: '#4f46e5', cursor: 'pointer', fontWeight: 600 }}
        >
          ← Voltar para o Dashboard
        </button>

        <header style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#1e293b' }}>Logs de Atividade</h1>
          <p style={{ color: '#64748b' }}>Rastreabilidade de todas as ações realizadas no painel.</p>
        </header>

        <div style={{ backgroundColor: '#1e293b', borderRadius: '16px', padding: '24px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#cbd5e1' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <th style={{ textAlign: 'left', padding: '12px', fontSize: '12px', textTransform: 'uppercase', color: '#94a3b8' }}>Usuário</th>
                <th style={{ textAlign: 'left', padding: '12px', fontSize: '12px', textTransform: 'uppercase', color: '#94a3b8' }}>Ação</th>
                <th style={{ textAlign: 'left', padding: '12px', fontSize: '12px', textTransform: 'uppercase', color: '#94a3b8' }}>Alvo</th>
                <th style={{ textAlign: 'right', padding: '12px', fontSize: '12px', textTransform: 'uppercase', color: '#94a3b8' }}>Data/Hora</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} style={{ borderBottom: '1px solid #334155' }}>
                  <td style={{ padding: '16px 12px', fontWeight: 600, color: '#fff' }}>{log.usuario}</td>
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ backgroundColor: '#334155', padding: '4px 8px', borderRadius: '6px', fontSize: '12px' }}>
                      {log.acao}
                    </span>
                  </td>
                  <td style={{ padding: '16px 12px', fontSize: '14px' }}>{log.alvo}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'right', fontSize: '13px', color: '#94a3b8' }}>{log.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LogsPage;