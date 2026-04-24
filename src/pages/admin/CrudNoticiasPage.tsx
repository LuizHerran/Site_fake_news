import React, { useState } from 'react';
import { Link } from 'react-router';

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
  { id: 1, titulo: 'Notícia 1', autor: 'João', uf: 'SP', status: 'Publicado', data: '01/04', views: 100 },
];

const CrudNoticiasPage: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = mock.filter(n =>
    n.titulo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Notícias</h1>

      <div>
        <input placeholder="Buscar..." onChange={e => setSearch(e.target.value)} />
        <select><option>Status</option></select>
        <select><option>UF</option></select>
        <select><option>Autor</option></select>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Autor</th>
            <th>UF</th>
            <th>Status</th>
            <th>Data</th>
            <th>Views</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map(n => (
            <tr key={n.id}>
              <td>{n.id}</td>
              <td>{n.titulo}</td>
              <td>{n.autor}</td>
              <td>{n.uf}</td>
              <td>{n.status}</td>
              <td>{n.data}</td>
              <td>{n.views}</td>
              <td>
                <button>Ver</button>
                <Link to={`/admin/noticias/${n.id}/editar`}>Editar</Link>
                <button>Publicar</button>
                <button>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudNoticiasPage;