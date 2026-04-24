import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import noticias from '../../data/noticias';
import usuarios from '../../data/usuarios';
import tags from '../../data/tags';
import ufs from '../../data/ufs';
import cidades from '../../data/cidades';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [busca, setBusca] = useState('');
  const [ufSelecionada, setUfSelecionada] = useState('');

  const parseDate = (dateStr: string) => {
    const [datePart, timePart] = dateStr.split(' - ');
    const [day, month, year] = datePart.split('/');
    const [hour, minute] = timePart.split(':');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute));
  };

  const noticiasPublicadas = noticias.filter(n => n.publicada);
  const destaqueNoticia = noticiasPublicadas[0];

  const handleBuscaUF = () => {
    if (!ufSelecionada) { alert('Selecione uma UF'); return; }
    navigate(`/busca/uf/${ufSelecionada}`);
  };

  const noticiasFiltradas = noticiasPublicadas.filter(n =>
    busca === '' || n.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  const getAutor = (autorId: number) => usuarios.find(u => u.id === autorId)?.nome ?? 'Desconhecido';
  const getTags = (tagIds: number[]) => tags.filter(t => tagIds.includes(t.id));
  const getCidadeUF = (cidadeId: number) => {
    const cidade = cidades.find(c => c.id === cidadeId);
    const uf = ufs.find(u => u.id === cidade?.ufId);
    return uf ? uf.sigla : '';
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: '#1a1a2e',
    color: 'white',
    padding: '0 20px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  };

  const navStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '15px 0',
  };

  const linkStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '20px',
    fontSize: '14px',
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <header style={headerStyle}>
        <nav style={navStyle}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/favicon.svg" alt="Portal de Notícias" style={{ width: '26px', height: '26px' }} />
            Portal de Notícias
          </Link>
          <div>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/login" style={linkStyle}>Login</Link>
            <Link to="/cadastro" style={linkStyle}>Cadastro</Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      {destaqueNoticia && (
        <div style={{ position: 'relative', width: '100%', height: '350px', overflow: 'hidden' }}>
          <img
            src={destaqueNoticia.imagemCapa}
            alt={destaqueNoticia.titulo}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x350/1a1a2e/white?text=Notícia+em+Destaque'; }}
          />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
            padding: '20px 40px', color: 'white'
          }}>
            <h1 style={{ margin: 0, fontSize: '28px' }}>{destaqueNoticia.titulo}</h1>
            <Link to={`/noticia/${destaqueNoticia.id}`}
              style={{ color: '#ffd700', textDecoration: 'none', fontWeight: 'bold', marginTop: '10px', display: 'inline-block' }}>
              Ler mais →
            </Link>
          </div>
        </div>
      )}

      {/* Busca e filtros */}
      <div style={{ maxWidth: '1200px', margin: '30px auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="🔍 Buscar notícias..."
            value={busca}
            onChange={e => setBusca(e.target.value)}
            style={{ flex: 1, minWidth: '200px', padding: '12px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '15px' }}
          />
          <select
            value={ufSelecionada}
            onChange={e => setUfSelecionada(e.target.value)}
            style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '15px' }}
          >
            <option value="">Filtrar por UF</option>
            {ufs.map(uf => <option key={uf.id} value={uf.sigla}>{uf.sigla} - {uf.nome}</option>)}
          </select>
          <button onClick={handleBuscaUF}
            style={{ padding: '12px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            Buscar por UF
          </button>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '30px' }}>
          {tags.map(tag => (
            <Link key={tag.id} to={`/busca/tag/${tag.slug}`}
              style={{ padding: '6px 14px', backgroundColor: '#007bff', color: 'white', borderRadius: '20px', textDecoration: 'none', fontSize: '13px' }}>
              {tag.nome}
            </Link>
          ))}
        </div>

        {/* Grid de notícias */}
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Últimas Notícias</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '25px' }}>
          {noticiasFiltradas.map(noticia => (
            <article key={noticia.id} style={{
              backgroundColor: 'white', borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)', overflow: 'hidden'
            }}>
              <img
                src={noticia.imagemCapa}
                alt={noticia.titulo}
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                onError={(e) => { (e.target as HTMLImageElement).src = `https://via.placeholder.com/320x180/007bff/white?text=${encodeURIComponent(noticia.titulo.substring(0,15))}`; }}
              />
              <div style={{ padding: '16px' }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#333' }}>{noticia.titulo}</h3>
                <p style={{ margin: '0 0 10px 0', color: '#666', fontSize: '13px' }}>{noticia.subtitulo}</p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  {getTags(noticia.tags).map(tag => (
                    <Link key={tag.id} to={`/busca/tag/${tag.slug}`}
                      style={{ padding: '2px 10px', backgroundColor: '#e3f2fd', color: '#1976d2', borderRadius: '12px', fontSize: '11px', textDecoration: 'none' }}>
                      {tag.nome}
                    </Link>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#888' }}>
                  <span>{getAutor(noticia.autorId)} · {getCidadeUF(noticia.cidadeId)}</span>
                  <span>{parseDate(noticia.criadoEm).toLocaleDateString('pt-BR')}</span>
                </div>
                <Link to={`/noticia/${noticia.id}`}
                  style={{ display: 'block', marginTop: '12px', textAlign: 'center', padding: '8px', backgroundColor: '#007bff', color: 'white', borderRadius: '6px', textDecoration: 'none', fontSize: '14px' }}>
                  Ler mais
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1a1a2e', color: '#aaa', textAlign: 'center', padding: '30px 20px', marginTop: '50px' }}>
        <p>&copy; 2025 Portal de Notícias. Todos os direitos reservados.</p>
        <div style={{ marginTop: '10px' }}>
          <a href="#" style={{ color: '#aaa', margin: '0 10px', textDecoration: 'none' }}>Sobre</a>
          <a href="#" style={{ color: '#aaa', margin: '0 10px', textDecoration: 'none' }}>Contato</a>
          <a href="#" style={{ color: '#aaa', margin: '0 10px', textDecoration: 'none' }}>Termos</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
