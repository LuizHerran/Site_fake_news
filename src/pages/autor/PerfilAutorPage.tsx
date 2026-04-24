import type { FC, CSSProperties } from 'react';
import { Link } from 'react-router'; // ✅ corrigido

const styles: Record<string, CSSProperties> = {
  page: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '32px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '32px',
    borderBottom: '2px solid #eee',
    paddingBottom: '20px',
  },
  title: {
    color: '#333333',
    fontSize: '32px',
    margin: '0 0 8px 0',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#666666',
    fontSize: '18px',
    margin: 0,
  },
  authorInfo: {
    marginBottom: '40px',
    padding: '24px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  authorName: {
    fontSize: '28px',
    color: '#2c3e50',
    margin: '0 0 12px 0',
    fontWeight: 'bold',
  },
  authorEmail: {
    fontSize: '16px',
    color: '#34495e',
    margin: '0 0 16px 0',
  },
  authorBio: {
    fontSize: '16px',
    color: '#555555',
    lineHeight: 1.6,
    margin: '0 0 20px 0',
  },
  editButton: {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: '500',
  },
  newsSection: {
    marginTop: '20px',
  },
  newsTitle: {
    fontSize: '24px',
    color: '#333333',
    margin: '0 0 20px 0',
    fontWeight: 'bold',
  },
  newsList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 24px 0',
  },
  newsItem: {
    padding: '16px',
    backgroundColor: '#f8f9fa',
    marginBottom: '12px',
    borderRadius: '6px',
    borderLeft: '4px solid #3498db',
  },
  newsItemTitle: {
    fontSize: '18px',
    color: '#2c3e50',
    margin: '0 0 4px 0',
    fontWeight: '600',
  },
  newsItemDate: {
    fontSize: '14px',
    color: '#7f8c8d',
  },
  createLink: {
    display: 'inline-block',
    backgroundColor: '#27ae60',
    color: 'white',
    padding: '12px 24px',
    textDecoration: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'background-color 0.3s',
  },
};

const PerfilAutorPage: FC = () => {
  const author = {
    name: 'João Silva',
    email: 'joao.silva@exemplo.com',
    bio: 'Desenvolvedor full-stack apaixonado por React, TypeScript e tecnologias modernas.',
  };

  const news = [
    { id: 1, title: 'Introdução ao React Hooks', date: '2023-10-01' },
    { id: 2, title: 'Melhores Práticas com TypeScript', date: '2023-10-05' },
    { id: 3, title: 'Construindo APIs com Node.js', date: '2023-10-10' },
  ];

  // ✅ NOVO: estatísticas
  const stats = [
    { label: 'Total', value: 12 },
    { label: 'Publicadas', value: 8 },
    { label: 'Rascunhos', value: 4 },
    { label: 'Visualizações', value: 1200 },
    { label: 'Comentários', value: 45 },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Perfil do Autor</h1>
          <p style={styles.subtitle}>Bem-vindo ao perfil de {author.name}</p>
        </div>

        <div style={styles.authorInfo}>
          <h2 style={styles.authorName}>{author.name}</h2>
          <p style={styles.authorEmail}>
            <strong>Email:</strong> {author.email}
          </p>
          <p style={styles.authorBio}>{author.bio}</p>
          <button style={styles.editButton}>
            Editar Perfil
          </button>
        </div>

        {/* ✅ NOVO: CARDS DE ESTATÍSTICAS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '10px',
          marginBottom: '30px'
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background: '#ecf0f1',
              padding: '15px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <strong>{s.value}</strong>
              <p style={{ margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>

        <div style={styles.newsSection}>
          <h3 style={styles.newsTitle}>Notícias do Autor</h3>
          <ul style={styles.newsList}>
            {news.map((noticia) => (
              <li key={noticia.id} style={styles.newsItem}>
                <div style={styles.newsItemTitle}>{noticia.title}</div>
                <div style={styles.newsItemDate}>
                  Publicado em: {noticia.date}
                </div>
              </li>
            ))}
          </ul>

          {/* ✅ CORRIGIDO */}
          <Link to="/autor/noticias/nova" style={styles.createLink}>
            Criar Nova Notícia
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PerfilAutorPage;