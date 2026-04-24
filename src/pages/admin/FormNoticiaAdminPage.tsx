import { useState } from 'react';
import { Link, useParams } from 'react-router';

const ufs = ['SP', 'RJ'];
const cidades = {
  SP: ['São Paulo', 'Campinas'],
  RJ: ['Rio de Janeiro', 'Niterói'],
};

const tagsDisponiveis = ['Tech', 'Política', 'Esporte', 'Saúde', 'Educação'];

export default function FormNoticiaAdminPage() {
  const { id } = useParams();
  const isEdit = !!id;

  const [form, setForm] = useState({
    titulo: '',
    subtitulo: '',
    imagem: '',
    conteudo: '',
    uf: '',
    cidade: '',
    tags: [] as string[],
    autor: '',
    status: 'rascunho',
  });

  const handleTag = (tag: string) => {
    if (form.tags.includes(tag)) {
      setForm({ ...form, tags: form.tags.filter(t => t !== tag) });
    } else if (form.tags.length < 5) {
      setForm({ ...form, tags: [...form.tags, tag] });
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>{isEdit ? 'Editar Notícia' : 'Nova Notícia'}</h1>

      {/* STATUS BADGE */}
      {isEdit && <span>Status: {form.status}</span>}

      <form>
        <input
          placeholder="Título"
          value={form.titulo}
          onChange={e => setForm({ ...form, titulo: e.target.value })}
        />

        <input
          placeholder="Subtítulo"
          value={form.subtitulo}
          onChange={e => setForm({ ...form, subtitulo: e.target.value })}
        />

        {/* IMAGEM */}
        <input
          placeholder="URL da imagem"
          value={form.imagem}
          onChange={e => setForm({ ...form, imagem: e.target.value })}
        />
        {form.imagem && <img src={form.imagem} width={200} />}

        {/* CONTEÚDO */}
        <textarea
          rows={15}
          value={form.conteudo}
          onChange={e => setForm({ ...form, conteudo: e.target.value })}
        />

        {/* UF → CIDADE */}
        <select
          onChange={e => setForm({ ...form, uf: e.target.value, cidade: '' })}
        >
          <option>UF</option>
          {ufs.map(u => <option key={u}>{u}</option>)}
        </select>

        <select
          disabled={!form.uf}
          onChange={e => setForm({ ...form, cidade: e.target.value })}
        >
          <option>Cidade</option>
          {form.uf &&
            cidades[form.uf as keyof typeof cidades].map(c => (
              <option key={c}>{c}</option>
            ))}
        </select>

        {/* TAGS */}
        <div>
          {tagsDisponiveis.map(tag => (
            <label key={tag}>
              <input
                type="checkbox"
                checked={form.tags.includes(tag)}
                onChange={() => handleTag(tag)}
              />
              <span style={{ background: '#eee', margin: 5 }}>{tag}</span>
            </label>
          ))}
        </div>

        {/* AUTOR */}
        <select onChange={e => setForm({ ...form, autor: e.target.value })}>
          <option>Autor</option>
          <option>Admin1</option>
          <option>Admin2</option>
        </select>

        {/* BOTÕES */}
        <button type="button">Salvar como Rascunho</button>
        <button type="button">Enviar para Revisão</button>

        <Link to="/admin/noticias">Cancelar</Link>
      </form>

      {/* PREVIEW */}
      <div style={{ marginTop: 20 }}>
        <h3>Preview</h3>
        <div style={{ border: '1px solid #ccc', padding: 10 }}>
          <h2>{form.titulo}</h2>
          <p>{form.subtitulo}</p>
          {form.imagem && <img src={form.imagem} width={200} />}
        </div>
      </div>
    </div>
  );
}