import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { Link, useParams } from 'react-router';
import noticias from '../../data/noticias';
import autores from '../../data/usuarios';
import comentariosData from '../../data/comentarios';
import tags from '../../data/tags';
import cidades from '../../data/cidades';
import ufs from '../../data/ufs';

const DetalheNoticiaPage = () => {
  const { id } = useParams<{ id: string }>();
  const [novoComentario, setNovoComentario] = useState('');
  const [comentariosLocais, setComentariosLocais] = useState<{ id: number; texto: string; autor: string; data: string }[]>([]);

  const noticia = noticias.find(n => n.id === Number(id));
  const autor = noticia ? autores.find(u => u.id === noticia.autorId) : undefined;
  const noticiasTags = noticia ? tags.filter(t => noticia.tags.includes(t.id)) : [];
  const cidade = noticia ? cidades.find(c => c.id === noticia.cidadeId) : undefined;
  const uf = cidade ? ufs.find(u => u.id === cidade.ufId) : undefined;
  const outrasNoticias = noticias.filter(n => n.publicada && n.id !== Number(id)).slice(0, 5);
  const noticiasPopularesTags = tags.slice(0, 6);
  const autorNoticias = noticia ? noticias.filter(n => n.publicada && n.autorId === noticia.autorId).length : 0;

  const comentariosDaNoticia = comentariosData
    .filter(c => c.noticiaId === Number(id) && c.aprovado)
    .map(c => ({
      id: c.id,
      texto: c.texto,
      autor: autores.find(u => u.id === c.autorId)?.nome ?? 'Usuário',
      data: c.criadoEm,
    }));

  const todosComentarios = [...comentariosDaNoticia, ...comentariosLocais];

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!novoComentario.trim()) return;
    setComentariosLocais(prev => [...prev, { id: Date.now(), texto: novoComentario, autor: 'Visitante', data: new Date().toISOString().split('T')[0] }]);
    setNovoComentario('');
  };

  if (!noticia) return (
    <div style={{ textAlign: 'center', padding: '60px', fontFamily: 'Arial' }}>
      <h2>Notícia não encontrada</h2>
      <Link to="/" style={{ color: '#007bff' }}>Voltar para Home</Link>
    </div>
  );

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#1a1a2e', color: 'white', padding: '15px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/favicon.svg" alt="Portal de Notícias" style={{ width: '26px', height: '26px' }} />
            Portal de Notícias
          </Link>
          <div>
            <Link to="/login" style={{ color: 'white', textDecoration: 'none', marginLeft: '20px', fontSize: '14px' }}>Login</Link>
            <Link to="/cadastro" style={{ color: 'white', textDecoration: 'none', marginLeft: '20px', fontSize: '14px' }}>Cadastro</Link>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '20px auto', padding: '0 20px' }}>
        {/* Breadcrumb */}
        <nav style={{ marginBottom: '20px', fontSize: '14px', color: '#666' }}>
          <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>Home</Link>
          {' > '}
          {noticiasTags[0] && <><Link to={`/busca/tag/${noticiasTags[0].slug}`} style={{ color: '#007bff', textDecoration: 'none' }}>{noticiasTags[0].nome}</Link>{' > '}</>}
          <span>{noticia.titulo.substring(0, 40)}...</span>
        </nav>

        <div style={{ display: 'flex', gap: '30px' }}>
          {/* Coluna principal */}
          <main style={{ flex: 2 }}>
            <img src={noticia.imagemCapa} alt={noticia.titulo}
              style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', borderRadius: '10px', marginBottom: '20px' }}
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x450'; }}
            />
            <h1 style={{ fontSize: '28px', color: '#333', marginBottom: '8px' }}>{noticia.titulo}</h1>
            <h2 style={{ fontSize: '18px', color: '#555', fontWeight: 'normal', marginBottom: '15px' }}>{noticia.subtitulo}</h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px', color: '#666', fontSize: '13px' }}>
              <span>Por <strong>{autor?.nome}</strong></span>
              <span>{new Date(noticia.criadoEm).toLocaleDateString('pt-BR')}</span>
              <span>👁 {noticia.visualizacoes} visualizações</span>
              {cidade && uf && <span>📍 {cidade.nome}/{uf.sigla}</span>}
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
              {noticiasTags.map(tag => (
                <Link key={tag.id} to={`/busca/tag/${tag.slug}`}
                  style={{ padding: '4px 14px', backgroundColor: '#007bff', color: 'white', borderRadius: '20px', textDecoration: 'none', fontSize: '12px' }}>
                  {tag.nome}
                </Link>
              ))}
            </div>

            <div style={{ lineHeight: '1.8', fontSize: '16px', color: '#444', backgroundColor: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              {noticia.conteudo.split('\n').map((p, i) => <p key={i}>{p}</p>)}
            </div>

            {/* Comentários */}
            <section style={{ marginTop: '40px' }}>
              <h2 style={{ fontSize: '22px', color: '#333', marginBottom: '20px' }}>Comentários ({todosComentarios.length})</h2>
              <form onSubmit={handleSubmit} style={{ marginBottom: '30px', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <textarea value={novoComentario} onChange={e => setNovoComentario(e.target.value)}
                  placeholder="Deixe seu comentário..."
                  style={{ width: '100%', minHeight: '100px', padding: '12px', border: '1px solid #ddd', borderRadius: '6px', resize: 'vertical', fontSize: '14px', boxSizing: 'border-box' }} />
                <button type="submit" style={{ marginTop: '10px', padding: '10px 24px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                  Enviar Comentário
                </button>
              </form>
              {todosComentarios.map(c => (
                <article key={c.id} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', marginBottom: '15px', boxShadow: '0 1px 4px rgba(0,0,0,0.07)' }}>
                  <p style={{ margin: '0 0 10px 0', color: '#333', lineHeight: '1.6' }}>{c.texto}</p>
                  <footer style={{ color: '#888', fontSize: '13px' }}>Por <strong>{c.autor}</strong> · {c.data}</footer>
                </article>
              ))}
            </section>
          </main>

          {/* Sidebar */}
          <aside style={{ flex: 1, maxWidth: '320px' }}>
            {/* Sobre o autor */}
            {autor && (
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginBottom: '20px' }}>
                <h3 style={{ marginBottom: '15px', borderBottom: '2px solid #007bff', paddingBottom: '8px' }}>Sobre o Autor</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#007bff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '20px' }}>
                    {autor.nome[0]}
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: 'bold' }}>{autor.nome}</p>
                    <p style={{ margin: 0, color: '#666', fontSize: '13px' }}>{autorNoticias} notícias</p>
                  </div>
                </div>
                {autor.bio && <p style={{ color: '#555', fontSize: '13px', lineHeight: '1.5' }}>{autor.bio}</p>}
              </div>
            )}

            {/* Notícias recentes */}
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginBottom: '20px' }}>
              <h3 style={{ marginBottom: '15px', borderBottom: '2px solid #007bff', paddingBottom: '8px' }}>Notícias Recentes</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {outrasNoticias.map(n => (
                  <li key={n.id} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <img src={n.imagemCapa} alt={n.titulo}
                      style={{ width: '60px', height: '45px', objectFit: 'cover', borderRadius: '4px', flexShrink: 0 }}
                      onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/60x45'; }}
                    />
                    <div>
                      <Link to={`/noticia/${n.id}`} style={{ color: '#333', textDecoration: 'none', fontSize: '13px', fontWeight: '500', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as React.CSSProperties}>
                        {n.titulo}
                      </Link>
                      <p style={{ margin: '2px 0 0', color: '#888', fontSize: '11px' }}>{new Date(n.criadoEm).toLocaleDateString('pt-BR')}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags populares */}
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <h3 style={{ marginBottom: '15px', borderBottom: '2px solid #007bff', paddingBottom: '8px' }}>Tags Populares</h3>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {noticiasPopularesTags.map(tag => (
                  <Link key={tag.id} to={`/busca/tag/${tag.slug}`}
                    style={{ padding: '5px 14px', backgroundColor: '#e3f2fd', color: '#1976d2', borderRadius: '16px', textDecoration: 'none', fontSize: '13px' }}>
                    {tag.nome}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DetalheNoticiaPage;
