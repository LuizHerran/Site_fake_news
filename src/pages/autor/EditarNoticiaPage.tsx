import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import { Link, useParams } from 'react-router';
import noticias from '../../data/noticias';
import tags from '../../data/tags';
import ufs from '../../data/ufs';
import cidades from '../../data/cidades';

const EditarNoticiaPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const noticia = noticias.find(n => n.id === Number(id)) || null;

  const [formData, setFormData] = useState(() => ({
    titulo: noticia?.titulo || '',
    subtitulo: noticia?.subtitulo || '',
    conteudo: noticia?.conteudo || '',
    imagemCapa: noticia?.imagemCapa || '',
    uf: '',
    cidade: '',
    tags: noticia?.tags || [] as number[],
  }));

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleTagToggle = (tagId: number) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.includes(tagId) ? prev.tags.filter(t => t !== tagId) : [...prev.tags, tagId].slice(0, 5),
    }));
  };

  if (!noticia) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Notícia não encontrada (ID: {id}).</div>;
  }

  const inputStyle: React.CSSProperties = { width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '15px', boxSizing: 'border-box', marginBottom: '15px' };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: '#333' }}>Editar Notícia</h1>
        <span style={{ padding: '6px 14px', borderRadius: '12px', backgroundColor: noticia.publicada ? '#d4edda' : '#fff3cd', color: noticia.publicada ? '#155724' : '#856404', fontSize: '13px', fontWeight: 'bold' }}>
          {noticia.publicada ? 'Publicada' : 'Rascunho'}
        </span>
      </div>

      <form onSubmit={e => e.preventDefault()}>
        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Título</label>
        <input name="titulo" value={formData.titulo} onChange={handleChange} style={inputStyle} />

        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Subtítulo</label>
        <input name="subtitulo" value={formData.subtitulo} onChange={handleChange} style={inputStyle} />

        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>URL da Imagem de Capa</label>
        <input name="imagemCapa" value={formData.imagemCapa} onChange={handleChange} style={inputStyle} />
        {formData.imagemCapa && (
          <img src={formData.imagemCapa} alt="preview" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }} />
        )}

        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>UF</label>
        <select name="uf" value={formData.uf} onChange={handleChange} style={inputStyle}>
          <option value="">Selecione</option>
          {ufs.map(uf => <option key={uf.id} value={uf.sigla}>{uf.sigla} - {uf.nome}</option>)}
        </select>

        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Cidade</label>
        <select name="cidade" value={formData.cidade} onChange={handleChange} style={inputStyle} disabled={!formData.uf}>
          <option value="">Selecione</option>
          {cidades.filter(c => ufs.find(u => u.sigla === formData.uf)?.id === c.ufId).map(c => <option key={c.id} value={c.id}>{c.nome}</option>)}
        </select>

        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Conteúdo</label>
        <textarea name="conteudo" value={formData.conteudo} onChange={handleChange} rows={10}
          style={{ ...inputStyle, resize: 'vertical', minHeight: '200px', fontFamily: 'inherit' }} />

        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>Tags (máx 5)</label>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
          {tags.map(tag => (
            <label key={tag.id} style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', padding: '6px 14px', borderRadius: '20px', backgroundColor: formData.tags.includes(tag.id) ? '#007bff' : '#e3f2fd', color: formData.tags.includes(tag.id) ? 'white' : '#1976d2' }}>
              <input type="checkbox" checked={formData.tags.includes(tag.id)} onChange={() => handleTagToggle(tag.id)} style={{ display: 'none' }} />
              {tag.nome}
            </label>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <Link to="/autor/noticias" style={{ padding: '12px 24px', backgroundColor: '#6c757d', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Cancelar</Link>
          <button type="button" onClick={() => alert('Alterações salvas!')} style={{ padding: '12px 24px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Salvar Alterações</button>
        </div>
      </form>
    </div>
  );
};

export default EditarNoticiaPage;
