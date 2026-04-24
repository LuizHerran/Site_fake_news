import React, { useState} from 'react';
import type { ChangeEvent } from 'react';
import { Link, useParams } from 'react-router-dom';

interface Noticia {
  id: string;
  titulo: string;
  subtitulo: string;
  conteudo: string;
  tag: string;
}

const noticiasFicticias: Noticia[] = [
  {
    id: '1',
    titulo: 'Notícia Exemplo 1',
    subtitulo: 'Subtítulo da Notícia 1',
    conteudo: 'Este é o conteúdo completo da primeira notícia. Pode ser editado aqui.',
    tag: 'noticia1'
  },
  {
    id: '2',
    titulo: 'Notícia Exemplo 2',
    subtitulo: 'Subtítulo da Notícia 2',
    conteudo: 'Conteúdo da segunda notícia para edição.',
    tag: 'noticia2'
  },
  {
    id: '3',
    titulo: 'Notícia Exemplo 3',
    subtitulo: 'Subtítulo da Notícia 3',
    conteudo: 'Conteúdo detalhado da terceira notícia.',
    tag: 'noticia3'
  }
];

const EditarNoticiaPage: React.FC = () => {
  // ✅ CORREÇÃO AQUI
  const { id } = useParams<{ id: string }>();

  const noticia = noticiasFicticias.find(n => n.id === id) || null;

const [formData, setFormData] = useState(() => ({
  titulo: noticia?.titulo || '',
  subtitulo: noticia?.subtitulo || '',
  conteudo: noticia?.conteudo || '',
  tag: noticia?.tag || ''
}));

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!id) return;

    console.log('Salvando notícia atualizada:', { id, ...formData });
  };

  if (!noticia) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        Carregando notícia ou ID inválido...
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Editar Notícia</h1>

      {/* ✅ Status agora no lugar certo */}
      <p style={{ color: 'orange', fontWeight: 'bold' }}>
        Status: Rascunho
      </p>

      <input
        type="text"
        name="titulo"
        value={formData.titulo}
        onChange={handleChange}
        placeholder="Título da notícia"
        style={{
          display: 'block',
          width: '100%',
          marginBottom: '15px',
          padding: '12px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '16px'
        }}
      />

      <input
        type="text"
        name="subtitulo"
        value={formData.subtitulo}
        onChange={handleChange}
        placeholder="Subtítulo"
        style={{
          display: 'block',
          width: '100%',
          marginBottom: '15px',
          padding: '12px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '16px'
        }}
      />

      <textarea
        name="conteudo"
        value={formData.conteudo}
        onChange={handleChange}
        placeholder="Conteúdo da notícia"
        rows={10}
        style={{
          display: 'block',
          width: '100%',
          marginBottom: '15px',
          padding: '12px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '16px',
          resize: 'vertical',
          fontFamily: 'inherit'
        }}
      />

      <input
        type="text"
        name="tag"
        value={formData.tag}
        onChange={handleChange}
        placeholder="Tag (ex: noticia1)"
        style={{
          display: 'block',
          width: '100%',
          marginBottom: '25px',
          padding: '12px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '16px'
        }}
      />

      <div>
        <button
          onClick={handleSave}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            marginRight: '15px'
          }}
        >
          Salvar
        </button>

        <Link
          to="/autor/minhas-noticias"
          style={{
            backgroundColor: '#f44336',
            color: 'white',
            padding: '12px 24px',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            display: 'inline-block'
          }}
        >
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default EditarNoticiaPage;