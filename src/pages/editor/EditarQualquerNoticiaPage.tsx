import { useState } from 'react';
import { useParams } from 'react-router-dom';

type Noticia = {
  id: string;
  titulo: string;
  conteudo: string;
  autor: string;
};

const mockNoticias: Noticia[] = [
  {
    id: '1',
    titulo: 'Notícia Exemplo',
    conteudo: 'Conteúdo aqui...',
    autor: 'João Silva'
  }
];

const EditarQualquerNoticiaPage = () => {
  const { id } = useParams();

  const noticia = mockNoticias.find(n => n.id === id);

  const [form, setForm] = useState({
    titulo: noticia?.titulo || '',
    conteudo: noticia?.conteudo || ''
  });

  if (!noticia) return <p>Notícia não encontrada</p>;

  return (
    <div style={{ padding: '30px' }}>

      {/* AVISO */}
      <div style={{
        background: '#fde68a',
        padding: '10px',
        marginBottom: '20px'
      }}>
        Você está editando uma notícia de <strong>{noticia.autor}</strong>
      </div>

      <h1>Editar Notícia</h1>

      <input
        value={form.titulo}
        onChange={(e) => setForm({ ...form, titulo: e.target.value })}
        placeholder="Título"
      />

      <br /><br />

      <textarea
        value={form.conteudo}
        onChange={(e) => setForm({ ...form, conteudo: e.target.value })}
        placeholder="Conteúdo"
      />

      <br /><br />

      <button>Salvar</button>
    </div>
  );
};

export default EditarQualquerNoticiaPage;