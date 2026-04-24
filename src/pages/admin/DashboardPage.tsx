import { Link } from 'react-router';

export default function DashboardPage() {
  // 📊 MOCK DADOS
  const stats = [
    { label: 'Usuários', value: 1234, link: '/admin/usuarios' },
    { label: 'Notícias Publicadas', value: 567, link: '/admin/noticias' },
    { label: 'Rascunhos', value: 45, link: '/admin/noticias' },
    { label: 'Comentários', value: 89, link: '/admin/comentarios' },
    { label: 'UFs', value: 27, link: '/admin/ufs' },
    { label: 'Tags', value: 120, link: '/admin/tags' },
  ];

  const noticiasPorMes = [10, 25, 18, 30, 22, 40];

  const usuarios = [
    { id: 1, nome: 'João Silva', email: 'joao@email.com', perfil: 'Admin', data: '01/04/2026' },
    { id: 2, nome: 'Maria Souza', email: 'maria@email.com', perfil: 'Autor', data: '02/04/2026' },
    { id: 3, nome: 'Pedro Lima', email: 'pedro@email.com', perfil: 'Editor', data: '03/04/2026' },
    { id: 4, nome: 'Ana Costa', email: 'ana@email.com', perfil: 'Autor', data: '04/04/2026' },
    { id: 5, nome: 'Lucas Rocha', email: 'lucas@email.com', perfil: 'Autor', data: '05/04/2026' },
  ];

  const noticias = [
    { id: 1, titulo: 'Notícia A', autor: 'João', status: 'Publicada', data: '01/04/2026' },
    { id: 2, titulo: 'Notícia B', autor: 'Maria', status: 'Rascunho', data: '02/04/2026' },
    { id: 3, titulo: 'Notícia C', autor: 'Pedro', status: 'Publicada', data: '03/04/2026' },
    { id: 4, titulo: 'Notícia D', autor: 'Ana', status: 'Rascunho', data: '04/04/2026' },
    { id: 5, titulo: 'Notícia E', autor: 'Lucas', status: 'Publicada', data: '05/04/2026' },
  ];

  return (
    <div style={{ padding: 20, maxWidth: 1200, margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 30 }}>
        Dashboard Admin
      </h1>

      {/* 🔹 CARDS */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: 20,
        marginBottom: 40
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            background: '#fff',
            padding: 20,
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <h4>{s.label}</h4>
            <div style={{ fontSize: 28, fontWeight: 'bold', margin: '10px 0' }}>
              {s.value}
            </div>
            <Link to={s.link} style={{
              background: '#007bff',
              color: '#fff',
              padding: '8px 12px',
              borderRadius: 4,
              textDecoration: 'none'
            }}>
              Gerenciar
            </Link>
          </div>
        ))}
      </div>

      {/* 🔹 GRÁFICO CSS */}
      <div style={{
        background: '#fff',
        padding: 20,
        borderRadius: 8,
        marginBottom: 40
      }}>
        <h3>Notícias por mês</h3>

        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          height: 200,
          gap: 10,
          marginTop: 20
        }}>
          {noticiasPorMes.map((v, i) => (
            <div key={i} style={{
              flex: 1,
              background: '#007bff',
              height: `${v * 3}px`,
              borderRadius: 4
            }} />
          ))}
        </div>
      </div>

      {/* 🔹 TABELAS */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 20
      }}>
        {/* USUÁRIOS */}
        <div style={{ background: '#fff', padding: 20, borderRadius: 8 }}>
          <h3>Últimos Usuários</h3>
          <table style={{ width: '100%', marginTop: 10 }}>
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Perfil</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map(u => (
                <tr key={u.id}>
                  <td>👤</td>
                  <td>{u.nome}</td>
                  <td>{u.email}</td>
                  <td>{u.perfil}</td>
                  <td>{u.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* NOTÍCIAS */}
        <div style={{ background: '#fff', padding: 20, borderRadius: 8 }}>
          <h3>Últimas Notícias</h3>
          <table style={{ width: '100%', marginTop: 10 }}>
            <thead>
              <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>Status</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {noticias.map(n => (
                <tr key={n.id}>
                  <td>{n.titulo}</td>
                  <td>{n.autor}</td>
                  <td>{n.status}</td>
                  <td>{n.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}