import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router';

const mockTags = [
  { id: 1, nome: 'Tag 1' },
  { id: 2, nome: 'Tag 2' },
];

function gerarSlug(texto: string) {
  return texto
    .toLowerCase()
    .trim()
    .normalize('NFD') // Remove acentos
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
}

export default function FormTagPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tagId = id ? parseInt(id, 10) : undefined;
  const tagInicial = mockTags.find(t => t.id === tagId);

  const [nome, setNome] = useState(tagInicial?.nome || '');
  const slug = gerarSlug(nome);

  // Estilos
  const containerStyle: React.CSSProperties = {
    padding: '60px 20px',
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
    fontFamily: 'system-ui, sans-serif'
  };

  const cardStyle: React.CSSProperties = {
    maxWidth: '400px',
    margin: '0 auto',
    backgroundColor: 'white',
    padding: '32px',
    borderRadius: '16px',
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)',
    border: '1px solid #f1f5f9'
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box',
    marginTop: '8px'
  };

  const slugViewStyle: React.CSSProperties = {
    backgroundColor: '#f1f5f9',
    padding: '10px 14px',
    borderRadius: '8px',
    fontSize: '13px',
    color: '#64748b',
    fontFamily: 'monospace',
    marginTop: '8px',
    display: 'block',
    border: '1px dashed #cbd5e1'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <header style={{ marginBottom: '24px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            {tagId ? '🏷️ Editar Tag' : '🏷️ Nova Tag'}
          </h1>
          <p style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>
            As tags ajudam a categorizar as notícias.
          </p>
        </header>

        {/* NOME DA TAG */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '14px', fontWeight: 600, color: '#475569' }}>Nome da Tag</label>
          <input
            placeholder="Ex: Tecnologia"
            style={inputStyle}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            autoFocus
          />
        </div>

        {/* SLUG AUTOMÁTICO */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '14px', fontWeight: 600, color: '#475569' }}>URL amigável (Slug)</label>
          <div style={slugViewStyle}>
            portal.com/busca/tag/<strong>{slug || '...'}</strong>
          </div>
        </div>

        {/* PREVIEW */}
        <div style={{ 
          backgroundColor: '#f8fafc', 
          padding: '16px', 
          borderRadius: '12px', 
          textAlign: 'center',
          marginBottom: '32px',
          border: '1px solid #f1f5f9'
        }}>
          <span style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Preview do Badge
          </span>
          <span style={{
            background: '#6366f1',
            color: 'white',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: 600,
            boxShadow: '0 4px 10px rgba(99, 102, 241, 0.3)'
          }}>
            {nome || 'Sua Tag'}
          </span>
        </div>

        {/* BOTÕES */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button 
            style={{
              padding: '12px',
              backgroundColor: '#0f172a',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
            onClick={() => {
              console.log({ id: tagId, nome, slug });
              navigate('/admin/tags');
            }}
          >
            Salvar Tag
          </button>

          <Link to="/admin/tags" style={{ textDecoration: 'none', textAlign: 'center' }}>
            <span style={{ fontSize: '14px', color: '#64748b', fontWeight: 500 }}>Cancelar</span>
          </Link>
        </div>
      </div>
    </div>
  );
}