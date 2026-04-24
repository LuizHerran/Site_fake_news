import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

type Noticia = {
  id: string;
  titulo: string;
  conteudo: string;
  autor: string;
  data: string;
  publicada: boolean;
};

const mockNoticias: Noticia[] = [
  {
    id: '1',
    titulo: 'Notícia Exemplo',
    conteudo: 'Conteúdo completo da notícia...',
    autor: 'João Silva',
    data: '01/04/2026',
    publicada: false
  }
];

const PublicarDespublicarPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [noticia, setNoticia] = useState<Noticia | undefined>(
    mockNoticias.find(n => n.id === id)
  );

  if (!noticia) return <p>Notícia não encontrada</p>;

  const handleToggle = () => {
    const confirmacao = window.confirm(
      noticia.publicada
        ? 'Deseja despublicar esta notícia?'
        : 'Deseja publicar esta notícia?'
    );

    if (!confirmacao) return;

    setNoticia({ ...noticia, publicada: !noticia.publicada });

    navigate('/editor/painel');
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1>{noticia.titulo}</h1>

      <p><strong>Autor:</strong> {noticia.autor}</p>
      <p><strong>Data:</strong> {noticia.data}</p>

      <span style={{
        padding: '6px 10px',
        borderRadius: '6px',
        background: noticia.publicada ? 'green' : 'gray',
        color: '#fff'
      }}>
        {noticia.publicada ? 'Publicada' : 'Rascunho'}
      </span>

      <p style={{ marginTop: '20px' }}>{noticia.conteudo}</p>

      <button onClick={handleToggle} style={{ marginTop: '20px' }}>
        {noticia.publicada ? 'Despublicar' : 'Publicar'}
      </button>
    </div>
  );
};

export default PublicarDespublicarPage;