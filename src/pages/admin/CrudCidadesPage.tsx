import type { FC } from 'react';
import { useState } from 'react';
import { Link } from 'react-router'; // Ajustado para a biblioteca padrão

// 1. Tipos mantidos
type UF = { id: number; sigla: string };
type Cidade = { id: number; nomeCidade: string; ufId: number; qtdNoticias: number };

// 2. Dados (Certifique-se de que eles existam fora ou dentro do componente)
const ufs: UF[] = [
  { id: 1, sigla: 'SP' },
  { id: 2, sigla: 'RJ' },
];

const cidades: Cidade[] = [
  { id: 1, nomeCidade: 'São Paulo', ufId: 1, qtdNoticias: 10 },
  { id: 2, nomeCidade: 'Rio de Janeiro', ufId: 2, qtdNoticias: 5 },
];

const CrudCidadesPage: FC = () => {
  const [search, setSearch] = useState('');
  const [ufFilter, setUfFilter] = useState('');

  // 3. Função auxiliar para pegar a sigla
  const getUfSigla = (ufId: number) => 
    ufs.find((u) => u.id === ufId)?.sigla || 'N/A';

  const filtered = cidades.filter(c =>
    c.nomeCidade.toLowerCase().includes(search.toLowerCase()) &&
    (ufFilter ? c.ufId === Number(ufFilter) : true)
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h1>Cidades</h1>
        <Link to="/admin/cidades/nova" style={{ textDecoration: 'none', backgroundColor: '#2563eb', color: 'white', padding: '10px 15px', borderRadius: '5px' }}>
          + Nova Cidade
        </Link>
      </div>

      {/* Barra de Filtros */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '8px', flex: 1, borderRadius: '4px', border: '1px solid #ccc' }}
        />

        <select 
          onChange={(e) => setUfFilter(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="">Todas UFs</option>
          {ufs.map(u => (
            <option key={u.id} value={u.id}>{u.sigla}</option>
          ))}
        </select>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f3f4f6', textAlign: 'left' }}>
            <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>ID</th>
            <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Nome</th>
            <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>UF</th>
            <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Notícias</th>
            <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(c => (
            <tr key={c.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '12px' }}>{c.id}</td>
              <td style={{ padding: '12px' }}>{c.nomeCidade}</td>
              <td style={{ padding: '12px' }}>
                 <span style={{ background: '#e5e7eb', padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>
                    {getUfSigla(c.ufId)}
                 </span>
              </td>
              <td style={{ padding: '12px' }}>{c.qtdNoticias}</td>
              <td style={{ padding: '12px' }}>
                <Link to={`/admin/cidades/${c.id}/editar`} style={{ color: '#2563eb' }}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudCidadesPage;