import { useState } from 'react';
import { useParams, Link } from 'react-router';
import noticias from '../../data/noticias';
import usuarios from '../../data/usuarios';

// tags is a default export array, re-export inline

const EditarQualquerNoticiaPage = () => {
  const { id } = useParams<{ id: string }>();
  const noticia = noticias.find(n => n.id === Number(id));
  const autor = usuarios.find(u => u.id === noticia?.autorId);

  const [form, setForm] = useState({
    titulo: noticia?.titulo || '',
    subtitulo: noticia?.subtitulo || '',
    conteudo: noticia?.conteudo || '',
    imagemCapa: noticia?.imagemCapa || '',
  });

  if (!noticia) return <div style={{ padding: '40px', textAlign: 'center' }}>Notícia não encontrada.</div>;

  const inputStyle: React.CSSProperties = { width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '15px', boxSizing: 'border-box', marginBottom: '15px' };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      {/* Aviso */}
      <div style={{ backgroundColor: '#fde68a', padding: '12px 20px', borderRadius: '6px', marginBottom: '20px', border: '1px solid #f59e0b' }}>
        ⚠️ Você está editando uma notícia de <strong>{autor?.nome}</strong>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: '#333' }}>Editar Qualquer Notícia</h1>
        <Link to="/editor/painel" style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Voltar</Link>
      </div>

      <form onSubmit={e => e.preventDefault()}>
        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Título</label>
        <input value={form.titulo} onChange={e => setForm({ ...form, titulo: e.target.value })} style={inputStyle} />

        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Subtítulo</label>
        <input value={form.subtitulo} onChange={e => setForm({ ...form, subtitulo: e.target.value })} style={inputStyle} />

        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>URL Imagem de Capa</label>
        <input value={form.imagemCapa} onChange={e => setForm({ ...form, imagemCapa: e.target.value })} style={inputStyle} />
        {form.imagemCapa && <img src={form.imagemCapa} alt="preview" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }} />}

        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Conteúdo</label>
        <textarea value={form.conteudo} onChange={e => setForm({ ...form, conteudo: e.target.value })} rows={12}
          style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }} />

        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <Link to="/editor/painel" style={{ padding: '12px 24px', backgroundColor: '#6c757d', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Cancelar</Link>
          <button type="button" onClick={() => alert('Alterações salvas!')} style={{ padding: '12px 24px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Salvar Alterações</button>
        </div>
      </form>
    </div>
  );
};

export default EditarQualquerNoticiaPage;
