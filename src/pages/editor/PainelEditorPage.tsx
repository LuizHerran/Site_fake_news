import { Link } from 'react-router';

const PainelEditorPage = () => {
  const headerStyle: React.CSSProperties = {
    backgroundColor: '#1a1a2e',
    color: '#fff',
    padding: '16px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  };

  const navStyle: React.CSSProperties = {
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  };

  const navLinkStyle: React.CSSProperties = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer'
  };

  const noticiasPendentes = [
    { id: 1, titulo: 'Notícia 1', autor: 'Autor A', data: '01/04/2026' },
    { id: 2, titulo: 'Notícia 2', autor: 'Autor B', data: '02/04/2026' },
  ];

  const comentarios = [
    { id: 1, texto: 'Muito bom!' },
    { id: 2, texto: 'Precisa revisar.' },
  ];

  const tags = [
    { nome: 'Política', valor: 80 },
    { nome: 'Esporte', valor: 50 },
    { nome: 'Tecnologia', valor: 30 },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'Inter, Arial, sans-serif', backgroundColor: '#f1f5f9' }}>
      <header style={headerStyle}>
        <nav style={navStyle}>
          <Link to="/" style={{ ...navLinkStyle, fontSize: '16px', fontWeight: 'bold', color: 'white' }}>
            <img src="/favicon.svg" alt="Portal de Notícias" style={{ width: '26px', height: '26px' }} />
            Portal de Notícias
          </Link>
          <Link to="/" style={navLinkStyle}>Home</Link>
          <Link to="/editor/painel" style={navLinkStyle}>Painel</Link>
          <Link to="/editor/perfil" style={navLinkStyle}>Perfil</Link>
        </nav>
      </header>

      <div style={{ display: 'flex', flex: 1 }}>
        {/* SIDEBAR */}
        <aside style={{
          width: '240px',
          background: '#0f172a',
          color: '#fff',
          padding: '24px'
        }}>
          <h2 style={{ marginBottom: '30px', fontSize: '20px' }}>🧾 Editor</h2>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link to="/editor/painel" style={linkStyle}>Painel</Link>
            <Link to="/editor/perfil" style={linkStyle}>Perfil</Link>
          </nav>
        </aside>

        {/* CONTEÚDO */}
        <main style={{ flex: 1, padding: '32px' }}>

          <h1 style={{ fontSize: '28px', marginBottom: '24px' }}>
            Painel do Editor
          </h1>

          {/* CARDS */}
          <div style={cardsContainer}>
            <Card label="Publicadas" valor={12} />
            <Card label="Rascunhos" valor={5} />
            <Card label="Comentários" valor={3} />
            <Card label="Autores" valor={8} />
          </div>

          {/* TABELA */}
          <Section title="Notícias Pendentes">
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thTdStyle}>Título</th>
                  <th style={thTdStyle}>Autor</th>
                  <th style={thTdStyle}>Data</th>
                  <th style={{ ...thTdStyle, textAlign: 'center' }}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {noticiasPendentes.map(n => (
                  <tr key={n.id}>
                    <td style={thTdStyle}>{n.titulo}</td>
                    <td style={thTdStyle}>{n.autor}</td>
                    <td style={thTdStyle}>{n.data}</td>
                    <td style={thTdStyle}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <button style={btnSuccess}>Publicar</button>
                        <button style={btnDanger}>Rejeitar</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          {/* COMENTÁRIOS */}
          <Section title="Comentários para Moderar">
            {comentarios.map(c => (
              <div key={c.id} style={commentBox}>
                <p>{c.texto}</p>
                <div>
                  <button style={btnSuccess}>Aprovar</button>
                  <button style={btnDanger}>Rejeitar</button>
                </div>
              </div>
            ))}
          </Section>

          {/* GRÁFICO */}
          <Section title="Notícias por Tag">
            {tags.map(t => (
              <div key={t.nome} style={{ marginBottom: '12px' }}>
                <span style={{ fontSize: '14px' }}>{t.nome}</span>
                <div style={barContainer}>
                  <div style={{ ...barFill, width: `${t.valor}%` }} />
                </div>
              </div>
            ))}
          </Section>

        </main>
      </div>
    </div>
  );
};

/* COMPONENTES AUXILIARES */

type CardProps = {
  label: string;
  valor: number;
};

const Card = ({ label, valor }: CardProps) => (
  <div style={{
    background: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
  }}>
    <div style={{ fontSize: '14px', color: '#64748b' }}>{label}</div>
    <div style={{ fontSize: '26px', fontWeight: 'bold' }}>{valor}</div>
  </div>
);

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: SectionProps) => (
  <div style={{ marginTop: '30px' }}>
    <h2 style={{ marginBottom: '10px' }}>{title}</h2>
    <div style={{
      background: '#fff',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}>
      {children}
    </div>
  </div>
);

/* STYLES */

const linkStyle = {
  color: '#cbd5f5',
  textDecoration: 'none',
  padding: '8px',
  borderRadius: '6px'
};

const cardsContainer = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '16px'
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse' as const
};

/* 🔥 NOVO STYLE (ESSA FOI A CHAVE) */
const thTdStyle = {
  padding: '12px',
  textAlign: 'left' as const,
  borderBottom: '1px solid #e5e7eb'
};

const btnSuccess = {
  background: '#22c55e',
  color: '#fff',
  border: 'none',
  padding: '6px 10px',
  marginRight: '5px',
  borderRadius: '6px',
  cursor: 'pointer'
};

const btnDanger = {
  background: '#ef4444',
  color: '#fff',
  border: 'none',
  padding: '6px 10px',
  borderRadius: '6px',
  cursor: 'pointer'
};

const commentBox = {
  borderBottom: '1px solid #eee',
  paddingBottom: '10px',
  marginBottom: '10px'
};

const barContainer = {
  background: '#e2e8f0',
  height: '10px',
  borderRadius: '6px',
  marginTop: '4px'
};

const barFill = {
  background: '#3b82f6',
  height: '100%',
  borderRadius: '6px'
};

export default PainelEditorPage;