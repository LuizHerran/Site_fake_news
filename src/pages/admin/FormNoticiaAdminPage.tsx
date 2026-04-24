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

  // Estilos Reutilizáveis
  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '16px',
    marginBottom: '16px',
    outline: 'none',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '13px',
    fontWeight: 700,
    color: '#64748b',
    textTransform: 'uppercase',
    marginBottom: '8px',
    marginTop: '20px'
  };

  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', padding: '40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              {isEdit ? '📝 Editar Matéria' : '✍️ Nova Notícia'}
            </h1>
            <span style={{ fontSize: '14px', color: '#64748b' }}>
              Status Atual: <strong style={{ color: '#6366f1' }}>{form.status.toUpperCase()}</strong>
            </span>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link to="/admin/noticias" style={{ padding: '10px 20px', textDecoration: 'none', color: '#64748b', fontWeight: 600 }}>Cancelar</Link>
            <button style={{ padding: '10px 20px', borderRadius: '8px', border: '1px solid #e2e8f0', background: 'white', cursor: 'pointer', fontWeight: 600 }}>Salvar Rascunho</button>
            <button style={{ padding: '10px 20px', borderRadius: '8px', background: '#6366f1', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Publicar Agora</button>
          </div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '30px' }}>
          
          {/* COLUNA DA ESQUERDA: CONTEÚDO */}
          <section style={{ backgroundColor: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <label style={labelStyle}>Manchete Principal</label>
            <input
              style={{ ...inputStyle, fontSize: '24px', fontWeight: 700, border: 'none', borderBottom: '2px solid #f1f5f9', borderRadius: 0, paddingLeft: 0 }}
              placeholder="Digite o título da notícia..."
              value={form.titulo}
              onChange={e => setForm({ ...form, titulo: e.target.value })}
            />

            <label style={labelStyle}>Subtítulo / Gravata</label>
            <textarea
              style={{ ...inputStyle, border: 'none', borderBottom: '2px solid #f1f5f9', borderRadius: 0, paddingLeft: 0, resize: 'none' }}
              placeholder="Um breve resumo para atrair o leitor..."
              value={form.subtitulo}
              onChange={e => setForm({ ...form, subtitulo: e.target.value })}
            />

            <label style={labelStyle}>Corpo da Matéria</label>
            <textarea
              style={{ ...inputStyle, minHeight: '400px', border: 'none', backgroundColor: '#f8fafc', padding: '8px', lineHeight: '1.6' }}
              placeholder="Conte sua noticia aqui..."
              value={form.conteudo}
              onChange={e => setForm({ ...form, conteudo: e.target.value })}
            />
          </section>

          {/* COLUNA DA DIREITA: METADADOS */}
          <aside>
            <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '16px', marginBottom: '20px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ margin: '0 0 16px 0', fontSize: '16px' }}>Mídia e Capa</h4>
              <input
                style={inputStyle}
                placeholder="URL da Imagem de Capa"
                value={form.imagem}
                onChange={e => setForm({ ...form, imagem: e.target.value })}
              />
              {form.imagem && (
                <img src={form.imagem} style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }} alt="Preview" />
              )}
            </div>

            <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ margin: '0 0 16px 0', fontSize: '16px' }}>Configurações</h4>
              
              <label style={labelStyle}>Localização</label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <select style={{ ...inputStyle, marginBottom: 0 }} onChange={e => setForm({ ...form, uf: e.target.value, cidade: '' })}>
                  <option>UF</option>
                  {ufs.map(u => <option key={u}>{u}</option>)}
                </select>
                <select style={{ ...inputStyle, marginBottom: 0 }} disabled={!form.uf} onChange={e => setForm({ ...form, cidade: e.target.value })}>
                  <option>Cidade</option>
                  {form.uf && cidades[form.uf as keyof typeof cidades].map(c => <option key={c}>{c}</option>)}
                </select>
              </div>

              <label style={labelStyle}>Tags (Máx. 5)</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {tagsDisponiveis.map(tag => {
                  const selected = form.tags.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => handleTag(tag)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '20px',
                        border: '1px solid',
                        borderColor: selected ? '#6366f1' : '#e2e8f0',
                        backgroundColor: selected ? '#6366f1' : 'white',
                        color: selected ? 'white' : '#64748b',
                        fontSize: '12px',
                        cursor: 'pointer',
                        transition: '0.2s'
                      }}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>

              <label style={labelStyle}>Autor Atribuído</label>
              <select style={inputStyle} onChange={e => setForm({ ...form, autor: e.target.value })}>
                <option>Selecionar autor...</option>
                <option>Admin João</option>
                <option>Editora Maria</option>
              </select>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}