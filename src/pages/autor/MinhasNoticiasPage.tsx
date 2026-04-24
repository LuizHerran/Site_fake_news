import type { FC } from 'react';
import { Link } from 'react-router';
import { useState } from 'react';
import noticias from '../../data/noticias';
import usuarios from '../../data/usuarios';

const MinhasNoticiasPage: FC = () => {
  const [busca, setBusca] = useState('');
  const [status, setStatus] = useState('Todas');

  // Simula o autor logado como id=3 (primeiro AUTOR nos dados)
  const autorLogado = usuarios.find(u => u.perfil === 'AUTOR');
  const minhasNoticias = noticias.filter(n => n.autorId === autorLogado?.id);

  const filtradas = minhasNoticias.filter(n => {
    const matchBusca = busca === '' || n.titulo.toLowerCase().includes(busca.toLowerCase());
    const matchStatus =
      status === 'Todas' ||
      (status === 'Publicadas' && n.publicada) ||
      (status === 'Rascunhos' && !n.publicada);
    return matchBusca && matchStatus;
  });

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: '#333' }}>Minhas Notícias</h1>
        <Link
          to="/autor/noticias/nova"
          style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold' }}
        >
          + Nova Notícia
        </Link>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          placeholder="Buscar..."
          value={busca}
          onChange={e => setBusca(e.target.value)}
          style={{ flex: 1, padding: '10px', border: '1px solid #ddd', borderRadius: '6px' }}
        />
        <select
          value={status}
          onChange={e => setStatus(e.target.value)}
          style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '6px' }}
        >
          <option>Todas</option>
          <option>Publicadas</option>
          <option>Rascunhos</option>
        </select>
      </div>

      {filtradas.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px', color: '#666' }}>
          <p>Você ainda não escreveu nenhuma notícia.</p>
          <Link to="/autor/noticias/nova" style={{ color: '#007bff' }}>Criar primeira notícia</Link>
        </div>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <th style={{ padding: '14px', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>Título</th>
              <th style={{ padding: '14px', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>Data</th>
              <th style={{ padding: '14px', textAlign: 'center', borderBottom: '2px solid #dee2e6' }}>Status</th>
              <th style={{ padding: '14px', textAlign: 'center', borderBottom: '2px solid #dee2e6' }}>Visualizações</th>
              <th style={{ padding: '14px', textAlign: 'center', borderBottom: '2px solid #dee2e6' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filtradas.map(noticia => (
              <tr key={noticia.id} style={{ borderBottom: '1px solid #dee2e6' }}>
                <td style={{ padding: '14px' }}>{noticia.titulo}</td>
                <td style={{ padding: '14px', color: '#666' }}>{new Date(noticia.criadoEm).toLocaleDateString('pt-BR')}</td>
                <td style={{ padding: '14px', textAlign: 'center' }}>
                  <span style={{ padding: '4px 12px', borderRadius: '12px', fontSize: '12px', backgroundColor: noticia.publicada ? '#d4edda' : '#fff3cd', color: noticia.publicada ? '#155724' : '#856404' }}>
                    {noticia.publicada ? 'Publicada' : 'Rascunho'}
                  </span>
                </td>
                <td style={{ padding: '14px', textAlign: 'center', color: '#666' }}>{noticia.visualizacoes}</td>
                <td style={{ padding: '14px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                    <Link to={`/noticia/${noticia.id}`} title="Ver" style={{ color: '#007bff', textDecoration: 'none', fontSize: '18px' }}>👁</Link>
                    <Link to={`/autor/noticias/${noticia.id}/editar`} title="Editar" style={{ color: '#28a745', textDecoration: 'none', fontSize: '18px' }}>✏️</Link>
                    <button title="Excluir" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px' }}>🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MinhasNoticiasPage;
