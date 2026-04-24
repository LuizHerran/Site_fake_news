import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import noticias from '../../data/noticias';
import usuarios from '../../data/usuarios';

const PublicarDespublicarPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const noticiaOriginal = noticias.find(n => n.id === Number(id));
  const [publicada, setPublicada] = useState(noticiaOriginal?.publicada ?? false);

  if (!noticiaOriginal) return <div style={{ padding: '40px', textAlign: 'center' }}>Notícia não encontrada.</div>;

  const autor = usuarios.find(u => u.id === noticiaOriginal.autorId);

  const handleToggle = () => {
    const acao = publicada ? 'despublicar' : 'publicar';
    if (window.confirm(`Deseja ${acao} esta notícia?`)) {
      setPublicada(!publicada);
      setTimeout(() => navigate('/editor/painel'), 1000);
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <main style={{ flex: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <span style={{ padding: '8px 18px', borderRadius: '12px', backgroundColor: publicada ? '#d4edda' : '#e9ecef', color: publicada ? '#155724' : '#6c757d', fontWeight: 'bold' }}>
              {publicada ? '✅ Publicada' : '📝 Rascunho'}
            </span>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Link to="/editor/painel" style={{ padding: '10px 20px', backgroundColor: '#6c757d', color: 'white', textDecoration: 'none', borderRadius: '6px' }}>Voltar</Link>
              <button onClick={handleToggle} style={{ padding: '10px 20px', backgroundColor: publicada ? '#dc3545' : '#28a745', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                {publicada ? 'Despublicar' : 'Publicar'}
              </button>
            </div>
          </div>

          <h1 style={{ fontSize: '28px', color: '#333', marginBottom: '10px' }}>{noticiaOriginal.titulo}</h1>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Por <strong>{autor?.nome}</strong> · {new Date(noticiaOriginal.criadoEm).toLocaleDateString('pt-BR')}
          </p>
          <img src={noticiaOriginal.imagemCapa} alt={noticiaOriginal.titulo}
            style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }}
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x250'; }}
          />
          <p style={{ lineHeight: '1.8', color: '#444' }}>{noticiaOriginal.conteudo}</p>
        </main>

        <aside style={{ flex: 1, backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px', height: 'fit-content' }}>
          <h3 style={{ marginBottom: '10px' }}>Ações do Editor</h3>
          <p><strong>Autor:</strong> {autor?.nome}</p>
          <p><strong>Status:</strong> {publicada ? 'Publicada' : 'Rascunho'}</p>
          <p><strong>Data:</strong> {new Date(noticiaOriginal.criadoEm).toLocaleDateString('pt-BR')}</p>
          <p><strong>Visualizações:</strong> {noticiaOriginal.visualizacoes}</p>
          <button onClick={handleToggle}
            style={{ width: '100%', padding: '12px', backgroundColor: publicada ? '#dc3545' : '#28a745', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' }}>
            {publicada ? 'Despublicar' : 'Publicar'}
          </button>
        </aside>
      </div>
    </div>
  );
};

export default PublicarDespublicarPage;
