import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Link, useParams } from 'react-router-dom';

const ComentarLeitorPage: React.FC = () => {
  const { idNoticia } = useParams<{ idNoticia: string }>();

  const [comentario, setComentario] = useState('');
  const [enviado, setEnviado] = useState(false);

  // Mock da notícia
  const noticia = {
    titulo: 'Notícia de Exemplo',
    autor: 'Maria Souza',
    imagem: 'https://via.placeholder.com/80',
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!comentario.trim()) return;

    console.log('Comentário:', comentario);
    setEnviado(true);
    setComentario('');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
      <div style={{ background: '#fff', padding: 30, width: 400 }}>

        <h1>Comentar Notícia</h1>

        {/* Resumo da notícia */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 15 }}>
          <img src={noticia.imagem} width={80} />
          <div>
            <p><b>{noticia.titulo}</b></p>
            <small>{noticia.autor}</small>
          </div>
        </div>

        {enviado ? (
          <>
            <p>Comentário enviado com sucesso!</p>
            <Link to={`/noticia/${idNoticia}`}>
              Voltar para a Notícia
            </Link>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <textarea
              maxLength={500}
              value={comentario}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setComentario(e.target.value)
              }
              placeholder="Escreva seu comentário..."
              style={{ width: '100%', minHeight: 100 }}
            />

            <p>{comentario.length}/500</p>

            <button type="submit">Enviar Comentário</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ComentarLeitorPage;