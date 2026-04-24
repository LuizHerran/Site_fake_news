import React, { useState } from 'react';
import { Link } from 'react-router';

const NovaNoticiaPage: React.FC = () => {
  const [titulo, setTitulo] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  

  // ✅ NOVOS ESTADOS
  const [imagem, setImagem] = useState('');
  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const estados = ['GO', 'SP', 'RJ'];

  const cidadesPorUF: Record<string, string[]> = {
    GO: ['Goiânia', 'Anápolis'],
    SP: ['São Paulo', 'Campinas'],
    RJ: ['Rio de Janeiro', 'Niterói'],
  };

  const listaTags = ['Política', 'Tecnologia', 'Esporte', 'Saúde', 'Educação'];

  const handleTagChange = (t: string) => {
    if (tags.includes(t)) {
      setTags(tags.filter(tag => tag !== t));
    } else {
      if (tags.length < 5) {
        setTags([...tags, t]);
      } else {
        alert('Máximo de 5 tags!');
      }
    }
  };

  const handleSalvar = (tipo: string) => {
    console.log({
      titulo,
      subtitulo,
      conteudo,
      imagem,
      uf,
      cidade,
      tipo
    });
  };

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
    } as React.CSSProperties,
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    } as React.CSSProperties,
    input: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    } as React.CSSProperties,
    textarea: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      minHeight: '200px',
      resize: 'vertical',
    } as React.CSSProperties,
    label: {
      fontWeight: 'bold',
    } as React.CSSProperties,
    buttons: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'flex-end',
    } as React.CSSProperties,
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
    } as React.CSSProperties,
    salvarBtn: {
      backgroundColor: '#4CAF50',
      color: 'white',
    } as React.CSSProperties,
    rascunhoBtn: {
      backgroundColor: '#6c757d',
      color: 'white',
    } as React.CSSProperties,
    voltarBtn: {
      backgroundColor: '#f44336',
      color: 'white',
    } as React.CSSProperties,
    h1: {
      textAlign: 'center',
    } as React.CSSProperties,
    tagBox: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    } as React.CSSProperties
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Nova Notícia</h1>
      <form style={styles.form}>

        <label style={styles.label}>Título</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          style={styles.input}
        />

        <label style={styles.label}>Subtítulo</label>
        <input
          type="text"
          value={subtitulo}
          onChange={(e) => setSubtitulo(e.target.value)}
          style={styles.input}
        />

        {/* ✅ IMAGEM */}
        <label style={styles.label}>URL da Imagem</label>
        <input
          type="text"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
          style={styles.input}
        />

        {imagem && (
          <img
            src={imagem}
            alt="preview"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        )}

        {/* ✅ UF */}
        <label style={styles.label}>UF</label>
        <select value={uf} onChange={(e) => setUf(e.target.value)} style={styles.input}>
          <option value="">Selecione</option>
          {estados.map(e => <option key={e}>{e}</option>)}
        </select>

        {/* ✅ CIDADE */}
        <label style={styles.label}>Cidade</label>
        <select
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          style={styles.input}
          disabled={!uf}
        >
          <option value="">Selecione</option>
          {uf && cidadesPorUF[uf]?.map(c => <option key={c}>{c}</option>)}
        </select>

        <label style={styles.label}>Conteúdo</label>
        <textarea
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
          style={styles.textarea}
        />

        {/* ✅ TAGS */}
        <label style={styles.label}>Tags (máx 5)</label>
        <div style={styles.tagBox}>
          {listaTags.map(t => (
            <label key={t}>
              <input
                type="checkbox"
                checked={tags.includes(t)}
                onChange={() => handleTagChange(t)}
              /> {t}
            </label>
          ))}
        </div>

        <div style={styles.buttons}>
          <Link 
            to="/autor/minhas-noticias"
            style={{ ...styles.button, ...styles.voltarBtn }}
          >
            Voltar
          </Link>

          {/* ✅ NOVOS BOTÕES */}
          <button
            type="button"
            onClick={() => handleSalvar('rascunho')}
            style={{ ...styles.button, ...styles.rascunhoBtn }}
          >
            Salvar Rascunho
          </button>

          <button
            type="button"
            onClick={() => handleSalvar('revisao')}
            style={{ ...styles.button, ...styles.salvarBtn }}
          >
            Enviar para Revisão
          </button>
        </div>
      </form>
    </div>
  );
};

export default NovaNoticiaPage;