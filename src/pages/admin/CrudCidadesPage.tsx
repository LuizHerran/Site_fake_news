import type { FC } from 'react';
import {useState} from 'react';
import { Link } from 'react-router';

type UF = { id: number; sigla: string };
type Cidade = { id: number; nomeCidade: string; ufId: number; qtdNoticias: number };

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

  const getUfSigla = (ufId: number) =>
    ufs.find((u) => u.id === ufId)?.sigla || '';

  const filtered = cidades.filter(c =>
    c.nomeCidade.toLowerCase().includes(search.toLowerCase()) &&
    (ufFilter ? c.ufId === Number(ufFilter) : true)
  );

  return (
    <div>
      <h1>Cidades</h1>

      <Link to="/admin/cidades/nova">+ Nova Cidade</Link>

      <div>
        <input
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setUfFilter(e.target.value)}>
          <option value="">Todas UFs</option>
          {ufs.map(u => (
            <option key={u.id} value={u.id}>{u.sigla}</option>
          ))}
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>UF</th>
            <th>Qtd. Notícias</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.nomeCidade}</td>
              <td>{getUfSigla(c.ufId)}</td>
              <td>{c.qtdNoticias}</td>
              <td>
                <Link to={`/admin/cidades/${c.id}/editar`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudCidadesPage;