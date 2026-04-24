import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import logo from "/favicon.svg";
import lupa from "/lupa.png";
import LoginPage from './LoginPage';
import CadastroPage from './CadastroPage';
import noticias from '../../data/noticias';
import autores from '../../data/usuarios';
import tagss from '../../data/tags';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ufs from '../../data/ufs';
import cidades from '../../data/cidades';

<BrowserRouter>
  <Routes>
    <Route path="/cadastro" element={<CadastroPage />} />
    <Route path="/login" element={<LoginPage />} /> 
  </Routes>
</BrowserRouter>

const placeholderNoticias = noticias.map(item => {
  const autor = autores.find(a => a.id === item.autorId);
   const tags = tagss
  .filter(t => item.tags.includes(t.id))
  .map(t => t.nome);

  return {
  id: item.id,
  title: item.titulo,
  subtitulo: item.subtitulo,
  conteudo: item.conteudo,
  imagemCapa: item.imagemCapa,
  autorId: autor?.nome ? autor.nome : 'Autor Desconecido',
  cidadeId: item.cidadeId,
  tags: tags,
  publicar: item.publicada,
  criadoEm: item.criadoEm,
  atualizadoEm: item.atualizadoEm,
  visualizacoes: item.visualizacoes
  }
});

const tags = tagss.map(tag => tag.nome);

const HomePage: React.FC = () => {
  const noticia_destaque = noticias.find(a => a.id === a.id);
  const tags = tagss
  const location = useLocation();
  const navigate = useNavigate();
  const [ufSelecionada, setUfSelecionada] = useState('');
  const handleBuscaPorUF = () => {
    if (!ufSelecionada) {
      alert('Selecione uma UF');
      return;
    }

    const ufEncontrada = ufs.find(uf => uf.sigla === ufSelecionada);
    if (!ufEncontrada) return;

    const cidadesDaUF = cidades.filter(cidade => cidade.ufId === ufEncontrada.id);
    const cidadeIds = cidadesDaUF.map(cidade => cidade.id);

    const noticiaEncontrada = noticias.find(noticia => 
      cidadeIds.includes(noticia.cidadeId)
    );

    if (noticiaEncontrada) {
      navigate(`/noticia/${noticiaEncontrada.id}`);
    } else {
      alert('Nenhuma notícia encontrada para esta UF');
    }
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', 
      lineHeight: 1.6,
      color: '#333'
    }}>
      {/**Cabeçalho*/}
      <header>
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '14px',
            color: '#7c7c7c',
            marginBottom: "5px",
          }}
        >
          {/*Lado esquerdo*/}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={logo} alt="Logo" style={{ width: "30px"}} />
            <span style={{ margin: '0 8px' }}>›</span>
            <a href="#ultimas_noticias" style={{ marginLeft: "auto", fontSize: '1.1rem', textDecoration: 'none', color: "#667eea" }}>Noticias </a>
          </div>
          
          {/**Lado direito */}
          <div style={{marginLeft: "auto"}}>
            <Link to='/cadastro' style={{ marginLeft: "auto", fontSize: '1.1rem', textDecoration: 'none', color: "#667eea" }} >Cadastro</Link>
            <span style={{ margin: '0 8px' }}>|</span>
            <Link to='/login' style={{ marginLeft: "auto", fontSize: '1.1rem', textDecoration: 'none', color: "#667eea" }} >Login</Link>
          </div>
          
        </nav>
      </header>

      {/* Noticia destaque */}
      <section style={{
        backgroundImage: noticia_destaque?.imagemCapa ? `url(${noticia_destaque.imagemCapa})` 
        : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        width: '100%',
        boxSizing: 'border-box',
        textAlign: 'center',
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: '5px solid',
        borderImage: 'linear-gradient(to right, #667eea, #764ba2 100%) 1',
        backgroundSize: 'cover',
        borderImageSource: 'linear-gradient(to right, #667eea, #764ba2 100%)',
        backgroundRepeat: 'no-repeat',                 
        backgroundPosition: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', margin: 0, marginBottom: '1rem' }}>
          {noticia_destaque?.titulo || 'Bem-vindo ao Portal de Notícias'}
        </h1>        

        <p style={{ fontSize: '1.5rem', marginBottom: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          Fique por dentro das últimas notícias do Brasil
        </p>
        <Link 
                    to={`/noticia/${noticia_destaque?.id}`} 
                    style={{ 
                      color: '#ffffff', 
                      textDecoration: 'none',
                      fontWeight: '500'
                    }}
                  >
                    Ler mais
                  </Link>
      </section>

      {/* Barra de Busca */}
      <section style={{ padding: '3rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Simplified SearchBar with UFSelector */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'end',
          marginBottom: '3rem'
        }}>
          <input 
            type="text" 
            placeholder="Pesquisar notícias.." 
            style={{ 
              padding: '1rem', 
              fontSize: '1.1rem', 
              border: '1px solid #ddd', 
              borderRadius: '5px', 
              flex: 1, 
              minWidth: '300px',
              maxWidth: '500px'
            }} 
          />
          <select 
            value={ufSelecionada}
            onChange={(e) => setUfSelecionada(e.target.value)}
            style={{ 
              padding: '1rem', 
              fontSize: '1.1rem', 
              border: '1px solid #ddd', 
              borderRadius: '5px',
              minWidth: '150px'
            }}>
            <option value="">Selecione UF</option>
            {ufs.map((uf, index) => (
              <option key={index} value={uf.sigla}>
                {uf.sigla}
              </option>
            ))}
          </select>
          <button 
            onClick={handleBuscaPorUF}
            style={{
              background: '#667eea',
              color: 'white',
              padding: '0.8rem',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1.1rem',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <img src={lupa} alt="Lupa" style={{ width: "32px", height: "32px" }} />
          </button>
        </div>

        {/* Tags */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '3rem'
        }}>

          {tags.map((tags) => (
            
            <Link 
              key={tags.id}
              to={`/noticia/${tags.id}`} 
              style={{
                textDecoration: 'none', 
                color: 'inherit',       
                display: 'inline-block' 
              }}
            >
              <span 
                style={{
                  background: '#f0f0f0',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  border: '1px solid #e0e0e0',
                  display: 'block', 
                  cursor: 'pointer',
                  transition: '0.3s'   
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#e2e2e2'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#f0f0f0'}
              >
                {tags.nome}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Notícias Grid */}
      <section style={{ padding: '0 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div id="ultimas_noticias">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem', color: '#333' }}>
          Últimas Notícias
          </h2>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {placeholderNoticias.map((noticia) => (
            <div 
              key={noticia.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{
                height: '200px',
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999',
                fontSize: '1rem'
              }}>
                {noticia.imagemCapa ? <img src={noticia.imagemCapa} alt={noticia.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : 'Sem imagem'}
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ 
                  margin: 0, 
                  marginBottom: '0.5rem', 
                  fontSize: '1.3rem',
                  lineHeight: 1.3
                }}>
                  {noticia.title}
                </h3>
                <p style={{ color: '#666', marginBottom: '1rem' }}>
                  {noticia.subtitulo}
                </p>
                <p style={{ color: '#666', marginBottom: '1rem' }}>
                  {noticia.autorId ? `Por Autor ${noticia.autorId}` : 'Autor Desconecido'}
                  {noticia.tags && noticia.tags.length > 0 ? ` | Tags: ${noticia.tags.join(', ')}` : ''}
                </p>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  fontSize: '0.9rem', 
                  color: '#888' 
                }}>
                  <span>{noticia.criadoEm}</span>
                  <Link 
                    to={`/noticia/${noticia.id}`} 
                    style={{ 
                      color: '#667eea', 
                      textDecoration: 'none',
                      fontWeight: '500'
                    }}
                  >
                    Ler mais
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div>
          <footer
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: '#fff',
              padding: '0rem',
              textAlign: 'center',
              marginTop: '1rem'
            }}
          >
            <p>© 2026 Fake_News. Todos os direitos reservados.</p>
            <a href="#sobre" style={{ marginLeft: "auto", fontSize: '1.1rem', textDecoration: 'none', color: "#ffffff" }}>Sobre </a>
            <span style={{ margin: '0 8px' }}>|</span>
            <a href="#contato" style={{ marginLeft: "auto", fontSize: '1.1rem', textDecoration: 'none', color: "#ffffff" }}>Contato</a>
            <span style={{ margin: '0 8px' }}>|</span>
            <a href="#termos" style={{ marginLeft: "auto", fontSize: '1.1rem', textDecoration: 'none', color: "#ffffff" }}>Termos de Uso</a>
          </footer>
        </div>

    </div>

    

  );
};

export default HomePage;
