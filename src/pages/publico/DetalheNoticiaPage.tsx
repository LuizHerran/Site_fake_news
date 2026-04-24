import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { Link, useParams } from 'react-router';
import noticias from '../../data/noticias';
import autores from '../../data/usuarios';
import comentarios from '../../data/comentarios';


type Noticia = {
  id: string;
  titulo: string;
  conteudo: string;
  data: string;
  autor: string;
};

type Comentario = {
  id: number;
  texto: string;
  autor: string;
  data: string;
  noticiaId: number;
};

const noticiasMock = noticias.map(item => {
  const autor = autores.find(a => a.id === item.autorId);

  return {
    id: item.id,
    titulo: item.titulo,
    conteudo: item.conteudo,
    data: item.criadoEm,
    autor: autor ? autor.nome : 'Autor desconhecido'
  };
});

const comentariosMock = comentarios.map(item => {
  const autor = autores.find(a => a.id === item.autorId);
    const noticiaId = noticias.find(n => n.id === item.noticiaId);

  return {
    id: item.id,
    texto: item.texto,
    autor: autor ? autor.nome : 'Usuário desconhecido',
    data: item.criadoEm,
    noticiaId: noticiaId ? noticiaId.id : 0
  };
});


const DetalheNoticiaPage = () => {
  const params = useParams();
  const id = params.id || '';
  console.log('ID da notícia: ', id); 

  const [noticia, setNoticia] = useState<Noticia | null>(null);
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const [novoComentario, setNovoComentario] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundNoticia = noticiasMock.find((n) => n.id === Number(id));
    setNoticia(foundNoticia ? { ...foundNoticia, id: String(foundNoticia.id) } : null);
    const comentariosDaNoticia = comentariosMock.filter((c) => c.noticiaId === Number(id));
    setComentarios(comentariosDaNoticia);
    setLoading(false);
    window.scrollTo(0, 0);
  }, [id]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (novoComentario.trim()) {
      const novoComentarioObj: Comentario = {
        id: Date.now(),
        texto: novoComentario,
        autor: 'Visitante',
        data: new Date().toISOString().split('T')[0],
        noticiaId: Number(id)
      };
      setComentarios((prev) => [novoComentarioObj, ...prev]);
      setNovoComentario('');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f4f4f4',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px',
        }}
      >
        {/* Breadcrumb */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '14px',
            color: '#7c7c7c',
            marginBottom: "5px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link to="/" style={{ marginLeft: "auto", fontSize: '1.1rem', textDecoration: 'none', color: "#667eea" }}>Home </Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <Link to="/#ultimas_noticias" style={{ marginLeft: "auto", fontSize: '1.1rem', textDecoration: 'none', color: "#667eea" }}>Noticias </Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span>{noticia?.titulo || 'Carregando...'}</span>
          </div>
          
        </nav>

        <div style={{ display: 'flex', gap: '30px' }}>
          {/* Conteúdo principal */}
          <main style={{ flex: 2 }}>
            {loading ? (
              <p>Carregando notícia...</p>
            ) : noticia ? (
              <>
                <h1
                  style={{
                    fontSize: '2.5em',
                    color: '#333',
                    marginBottom: '10px',
                  }}
                >
                  {noticia.titulo}
                </h1>
                <p
                  style={{
                    color: '#666',
                    fontSize: '1em',
                    marginBottom: '30px',
                  }}
                >
                  Por <strong>{noticia.autor}</strong> | {noticia.data}
                </p>
                <div
                  style={{
                    lineHeight: 1.8,
                    fontSize: '1.1em',
                    color: '#444',
                  }}
                  dangerouslySetInnerHTML={{ __html: noticia.conteudo }}
                />
              </>
            ) : (
              <p>Notícia não encontrada.</p>
            )}
          </main>

          {/* Sidebar */}
          <aside
            style={{
              flex: 1,
              backgroundColor: '#fff',
              padding: '25px',
              borderRadius: '10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            }}
          >
            <h3
              style={{
                color: '#333',
                borderBottom: '2px solid #007bff',
                paddingBottom: '10px',
                marginBottom: '20px',
              }}
            >
              Outras Notícias
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {noticiasMock
                .filter((n) => n.id !== Number(id))
                .slice(0, 5)
                .map((n) => (
                  <li key={n.id} style={{ marginBottom: '15px' }}>
                    <Link
                      to={`/noticia/${n.id}`}  
                      style={{
                        color: '#007bff',
                        textDecoration: 'none',
                        fontSize: '0.95em',
                        lineHeight: 1.4,
                      }}
                    >
                      {n.titulo}
                    </Link>
                  </li>
                ))}
            </ul>
          </aside>
        </div>

        {/* Seção de Comentários */}
        <section style={{ marginTop: '50px' }}>
          <h2
            style={{
              fontSize: '2em',
              color: '#333',
              marginBottom: '30px',
            }}
          >
            Comentários
          </h2>
          <form onSubmit={handleSubmit} style={{ marginBottom: '40px' }}>
            <textarea
              value={novoComentario}
              onChange={(e) => setNovoComentario(e.target.value)}
              placeholder="Deixe seu comentário aqui..."
              style={{
                width: '100%',
                minHeight: '120px',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                resize: 'vertical',
                fontSize: '1em',
                fontFamily: 'Arial, sans-serif',
                boxSizing: 'border-box',
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                padding: '12px 30px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1em',
                fontWeight: 'bold',
                marginTop: '10px',
              }}
            >
              Publicar Comentário
            </button>
          </form>
          <div>
            {comentarios.map((comentario) => (
              <article
                key={comentario.id}
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #eee',
                  borderRadius: '8px',
                  padding: '20px',
                  marginBottom: '20px',
                  boxShadow: '0 1px 5px rgba(0,0,0,0.05)',
                }}
              >
                <p
                  style={{
                    fontSize: '1.05em',
                    lineHeight: 1.6,
                    margin: '0 0 15px 0',
                    color: '#333',
                  }}
                >
                  {comentario.texto}
                </p>
                <footer
                  style={{
                    color: '#666',
                    fontSize: '0.9em',
                  }}
                >
                  Por <strong>{comentario.autor}</strong> | {comentario.data}
                </footer>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetalheNoticiaPage;
