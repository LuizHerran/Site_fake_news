import { useState } from 'react';
import { Link, useParams } from 'react-router';

const mockTags = [
  { id: 1, nome: 'Tag 1' },
  { id: 2, nome: 'Tag 2' },
];

function gerarSlug(texto: string) {
  return texto
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')       // espaços → hífen
    .replace(/[^\w-]+/g, '');   // remove caracteres especiais
}

export default function FormTagPage() {
  const { id } = useParams();
  const tagId = id ? parseInt(id, 10) : undefined;

  const tagInicial = mockTags.find(t => t.id === tagId);

  const [nome, setNome] = useState(tagInicial?.nome || '');

  const slug = gerarSlug(nome);

  const handleSave = () => {
    console.log({
      id: tagId,
      nome,
      slug
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>{tagId ? 'Editar Tag' : 'Nova Tag'}</h1>

      {/* INPUT */}
      <div>
        <label>Nome</label>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      {/* SLUG AUTOMÁTICO */}
      <div style={{ marginTop: 10 }}>
        <strong>Slug:</strong> {slug}
      </div>

      {/* PREVIEW TAG BADGE */}
      <div style={{ marginTop: 10 }}>
        <strong>Preview:</strong>
        <span
          style={{
            background: '#eee',
            padding: '4px 8px',
            marginLeft: 10,
            borderRadius: 4
          }}
        >
          {nome || 'Tag'}
        </span>
      </div>

      {/* BOTÕES */}
      <div style={{ marginTop: 20 }}>
        <button onClick={handleSave}>Salvar</button>

        <Link to="/admin/tags">
          <button type="button">Cancelar</button>
        </Link>
      </div>
    </div>
  );
}