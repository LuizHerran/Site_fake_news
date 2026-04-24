import { Link } from 'react-router';

export default function DashboardPage() {
  const stats = [
    { label: 'Usuários', value: '1,234', link: '/admin/usuarios', color: '#4f46e5' },
    { label: 'Publicadas', value: '567', link: '/admin/noticias', color: '#10b981' },
    { label: 'Rascunhos', value: '45', link: '/admin/noticias', color: '#f59e0b' },
    { label: 'Comentários', value: '89', link: '/admin/comentarios', color: '#ec4899' },
    { label: 'UFs', value: '27', link: '/admin/ufs', color: '#06b6d4' },
    { label: 'Tags', value: '120', link: '/admin/tags', color: '#8b5cf6' },
  ];

  const noticiasPorMes = [10, 25, 18, 30, 22, 40];

  // Estilos Comuns
  const cardStyle: React.CSSProperties = {
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
    border: '1px solid #f1f5f9',
    padding: '24px'
  };

  const thStyle: React.CSSProperties = {
    textAlign: 'left',
    padding: '12px 8px',
    fontSize: '12px',
    color: '#64748b',
    textTransform: 'uppercase',
    borderBottom: '1px solid #f1f5f9'
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#1e293b', margin: 0 }}>Visão Geral</h1>
        <p style={{ color: '#64748b', marginTop: '4px' }}>Bem-vindo ao painel de controle do seu portal.</p>
      </header>

      {/* 🔹 STATS CARDS */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {stats.map((s, i) => (
          <div key={i} style={cardStyle}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>{s.label}</span>
            <div style={{ fontSize: '32px', fontWeight: 800, color: s.color, margin: '8px 0' }}>
              {s.value}
            </div>
            <Link to={s.link} style={{ fontSize: '13px', color: '#94a3b8', textDecoration: 'none', fontWeight: 500 }}>
              Ver detalhes →
            </Link>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginBottom: '40px' }}>
        {/* 🔹 GRÁFICO */}
        <div style={cardStyle}>
          <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', color: '#1e293b' }}>Volume de Notícias</h3>
          <div style={{ display: 'flex', alignItems: 'flex-end', height: '200px', gap: '12px' }}>
            {noticiasPorMes.map((v, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ 
                  width: '100%', 
                  background: 'linear-gradient(180deg, #4f46e5 0%, #818cf8 100%)', 
                  height: `${v * 4}px`, 
                  borderRadius: '6px 6px 0 0',
                  transition: 'height 0.3s ease'
                }} />
                <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>Mês {i+1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 INFO RÁPIDA (Exemplo de UF/Tags mais usadas) */}
        <div style={{ ...cardStyle, background: '#1e293b', color: '#fff' }}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '18px' }}>Status do Sistema</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '4px' }}>Servidor</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }} />
                <span style={{ fontWeight: 600 }}>Operacional</span>
              </div>
            </div>
            <div style={{ height: '1px', background: '#334155' }} />
            <Link to="/admin/logs" style={{ color: '#818cf8', textDecoration: 'none', fontSize: '14px' }}>Ver logs de atividade →</Link>
          </div>
        </div>
      </div>

      {/* 🔹 TABELAS DE ATIVIDADE RECENTE */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '24px' }}>
        
        {/* ÚLTIMOS USUÁRIOS */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ margin: 0, fontSize: '18px' }}>Usuários Recentes</h3>
            <Link to="/admin/usuarios" style={{ fontSize: '13px', color: '#4f46e5', textDecoration: 'none' }}>Ver todos</Link>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={thStyle}>Nome</th>
                <th style={thStyle}>Perfil</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>Cadastro</th>
              </tr>
            </thead>
            <tbody>
              {[
                { nome: 'João Silva', perfil: 'Admin', data: '01/04' },
                { nome: 'Maria Souza', perfil: 'Autor', data: '02/04' },
                { nome: 'Pedro Lima', perfil: 'Editor', data: '03/04' },
              ].map((u, i) => (
                <tr key={i}>
                  <td style={{ padding: '12px 8px', fontSize: '14px', fontWeight: 500 }}>{u.nome}</td>
                  <td style={{ padding: '12px 8px' }}>
                    <span style={{ fontSize: '11px', background: '#f1f5f9', padding: '2px 8px', borderRadius: '4px' }}>{u.perfil}</span>
                  </td>
                  <td style={{ padding: '12px 8px', textAlign: 'right', fontSize: '13px', color: '#64748b' }}>{u.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ÚLTIMAS NOTÍCIAS */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ margin: 0, fontSize: '18px' }}>Últimas Notícias</h3>
            <Link to="/admin/noticias" style={{ fontSize: '13px', color: '#4f46e5', textDecoration: 'none' }}>Ver todas</Link>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={thStyle}>Título</th>
                <th style={thStyle}>Status</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>Data</th>
              </tr>
            </thead>
            <tbody>
              {[
                { titulo: 'Nova Tecnologia', status: 'Publicada', data: '05/04' },
                { titulo: 'Evento Local', status: 'Rascunho', data: '04/04' },
                { titulo: 'Entrevista', status: 'Publicada', data: '03/04' },
              ].map((n, i) => (
                <tr key={i}>
                  <td style={{ padding: '12px 8px', fontSize: '14px', fontWeight: 500 }}>{n.titulo}</td>
                  <td style={{ padding: '12px 8px' }}>
                    <div style={{ 
                      width: '8px', height: '8px', borderRadius: '50%', 
                      display: 'inline-block', marginRight: '6px',
                      background: n.status === 'Publicada' ? '#10b981' : '#f59e0b' 
                    }} />
                    <span style={{ fontSize: '13px' }}>{n.status}</span>
                  </td>
                  <td style={{ padding: '12px 8px', textAlign: 'right', fontSize: '13px', color: '#64748b' }}>{n.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}