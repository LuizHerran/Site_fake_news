import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { Link, useParams } from 'react-router';

const ComentarAutorPage = () => {
  const params = useParams<{ id: string }>();
  const noticiaId = params.id || '';

  const [comment, setComment] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSuccess(true);
    setIsSubmitting(false);
    setComment('');
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh', 
      padding: '20px', 
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ 
        maxWidth: '500px', 
        width: '100%', 
        padding: '30px', 
        backgroundColor: 'white', 
        borderRadius: '12px', 
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)', 
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Comentar Notícia</h2>
        
        <p style={{ marginBottom: '20px', color: '#666' }}>
          ID da notícia: <strong>{noticiaId}</strong>
        </p>

        {success && (
          <div style={{ 
            marginBottom: '20px', 
            padding: '15px', 
            backgroundColor: '#d4edda', 
            border: '1px solid #c3e6cb', 
            borderRadius: '8px', 
            color: '#155724'
          }}>
            Comentário enviado com sucesso!
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <textarea
              rows={6}
              value={comment}
              onChange={handleChange}
              maxLength={500}
              placeholder="Digite seu comentário aqui..."
              disabled={isSubmitting || success}
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid #ddd', 
                borderRadius: '8px', 
                resize: 'vertical',
                fontSize: '16px',
                fontFamily: 'Arial, sans-serif'
              }}
            />
            <p style={{ fontSize: '12px', color: '#666' }}>
              {comment.length}/500 caracteres
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || success || !comment.trim()}
            style={{ 
              padding: '12px 24px', 
              backgroundColor: '#007bff', 
              color: 'white', 
              border: 'none', 
              borderRadius: '8px', 
              fontSize: '16px', 
              cursor: 'pointer',
              opacity: (isSubmitting || success || !comment.trim()) ? 0.6 : 1,
              transition: 'opacity 0.2s'
            }}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Comentário'}
          </button>
        </form>

        <Link
          to="/autor/minhas-noticias"
          style={{ 
            display: 'inline-block', 
            marginTop: '20px', 
            padding: '10px 20px', 
            backgroundColor: '#6c757d', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '8px',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5a6268'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6c757d'}
        >
          Voltar para Notícias
        </Link>
      </div>
    </div>
  );
};

export default ComentarAutorPage;