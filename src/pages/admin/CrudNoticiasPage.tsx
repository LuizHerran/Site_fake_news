import React, { useState } from 'react';
import { Link } from 'react-router'; // Ajustado para o padrão mais comum

type Noticia = {
  id: number;
  titulo: string;
  autor: string;
  uf: string;
  status: string;
  data: string;
  views: number;
};

const mock: Noticia[] = [
  { id: 1, titulo: 'Notícia sobre tecnologia', autor: 'João Silva', uf: 'SP', status: 'Publicado', data: '01/04/2026', views: 1240 },
  { id: 2, titulo: 'Crescimento do agronegócio', autor: 'Maria Souza', uf: 'MT', status: 'Rascunho', data: '02/04/2026', views: 85 },
];

const CrudNoticiasPage: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = mock.filter(n =>
    n.titulo.toLowerCase().includes(search.toLowerCase())
  );

  // Estilos constantes para reutilização
  const thStyle: React.CSSProperties = { padding: '12px 16px', textAlign: 'left', color: '#6b7280', fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', borderBottom: '1px solid #e5e7eb' };
  const tdStyle: React.CSSProperties = { padding: '16px', borderBottom: '1px solid #f3f4f6', color: '#374151', fontSize: '14px' };
  const btnActionStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, cursor: 'pointer', border: '1px solid #e5e7eb', backgroundColor: 'white', transition: '0.2s', textDecoration: 'none', color: '#374151', display: 'inline-block', marginRight: '5px' };

  return (
    <div style={{ padding: '32px', backgroundColor: '#f9fafb', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Cabeçalho */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#111827', margin: 0 }}>Gestão de Notícias</h1>
        <Link to="/admin/noticias/nova" style={{ ...btnActionStyle, backgroundColor: '#2563eb', color: 'white', borderColor: '#2563eb' }}>
          + Criar Notícia
        </Link>
      </div>

      {/* Filtros */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <input 
          placeholder="Buscar pelo título..." 
          onChange={e => setSearch(e.target.value)} 
          style={{ padding: '10px 16px', borderRadius: '8px', border: '1px solid #d1d5db', flex: 1, minWidth: '250px', outline: 'none' }}
        />
        <select style={{ padding: '10px', borderRadius: '8px', border: '1px solid #d1d5db', backgroundColor: 'white' }}><option>Status</option><option>Publicado</option><option>Rascunho</option></select>
        <select style={{ padding: '10px', borderRadius: '8px', border: '1px solid #d1d5db', backgroundColor: 'white' }}><option>UF</option><option>SP</option><option>MT</option><option>GO</option></select>
        <select style={{ padding: '10px', borderRadius: '8px', border: '1px solid #d1d5db', backgroundColor: 'white' }}><option>Autor</option><option>João Silva</option><option>Maria Souza</option></select>
      </div>

      {/* Tabela */}
      <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#f8fafc' }}>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Título / Autor</th>
              <th style={thStyle}>UF</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Data</th>
              <th style={thStyle}>Views</th>
              <th style={{ ...thStyle, textAlign: 'center' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(n => (
              <tr key={n.id} style={{ transition: '0.2s' }}>
                <td style={{ ...tdStyle, color: '#9ca3af', fontFamily: 'monospace' }}>#{n.id}</td>
                <td style={tdStyle}>
                  <div style={{ fontWeight: 600, color: '#1f2937' }}>{n.titulo}</div>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>por {n.autor}</div>
                </td>
                <td style={tdStyle}><span style={{ padding: '2px 8px', backgroundColor: '#f3f4f6', borderRadius: '4px', fontSize: '12px' }}>{n.uf}</span></td>
                <td style={tdStyle}>
                  <span style={{ 
                    padding: '4px 10px', 
                    borderRadius: '20px', 
                    fontSize: '12px', 
                    fontWeight: 500,
                    backgroundColor: n.status === 'Publicado' ? '#dcfce7' : '#fef9c3',
                    color: n.status === 'Publicado' ? '#166534' : '#854d0e'
                  }}>
                    {n.status}
                  </span>
                </td>
                <td style={tdStyle}>{n.data}</td>
                <td style={{ ...tdStyle, fontWeight: 500 }}>{n.views.toLocaleString()}</td>
                <td style={{ ...tdStyle, textAlign: 'center', whiteSpace: 'nowrap' }}>
                  <button style={btnActionStyle}>Ver</button>
                  <Link to={`/admin/noticias/${n.id}/editar`} style={btnActionStyle}>Editar</Link>
                  <button style={{ ...btnActionStyle, color: '#dc2626' }}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CrudNoticiasPage;