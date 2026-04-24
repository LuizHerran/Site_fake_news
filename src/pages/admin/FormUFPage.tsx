import { useParams, Link, useNavigate } from 'react-router';
import { useState } from 'react';

interface UF {
  id: number;
  nomeUF: string;
  sigla: string;
}

const mockUFs: UF[] = [
  { id: 1, nomeUF: 'São Paulo', sigla: 'SP' },
  { id: 2, nomeUF: 'Rio de Janeiro', sigla: 'RJ' },
];

export default function FormUFPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const ufId = id ? parseInt(id, 10) : undefined;
  const ufInicial = mockUFs.find(u => u.id === ufId);

  const [formData, setFormData] = useState({
    nomeUF: ufInicial?.nomeUF || '',
    sigla: ufInicial?.sigla || '',
  });

  const isEdit = !!ufInicial;

  // Estilos padronizados
  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '15px',
    color: '#1e293b',
    outline: 'none',
    boxSizing: 'border-box',
    marginTop: '6px'
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 600,
    color: '#475569',
    display: 'block'
  };

  return (
    <div style={{ padding: '60px 20px', backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        
        <header style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            {isEdit ? '🗺️ Editar Estado' : '🗺️ Nova UF'}
          </h1>
          <p style={{ color: '#64748b', marginTop: '4px' }}>
            Gerencie as divisões territoriais do sistema.
          </p>
        </header>

        <div style={{ 
          backgroundColor: 'white', 
          padding: '32px', 
          borderRadius: '16px', 
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
          border: '1px solid #f1f5f9'
        }}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '16px', marginBottom: '24px' }}>
              {/* NOME */}
              <div>
                <label style={labelStyle}>Nome do Estado</label>
                <input
                  placeholder="Ex: Minas Gerais"
                  style={inputStyle}
                  value={formData.nomeUF}
                  onChange={e => setFormData({ ...formData, nomeUF: e.target.value })}
                />
              </div>

              {/* SIGLA */}
              <div>
                <label style={labelStyle}>Sigla</label>
                <input
                  placeholder="MG"
                  maxLength={2}
                  style={{ ...inputStyle, textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase' }}
                  value={formData.sigla}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      sigla: e.target.value.toUpperCase()
                    })
                  }
                />
              </div>
            </div>

            {/* BOTÕES */}
            <div style={{ display: 'flex', gap: '12px', borderTop: '1px solid #f1f5f9', paddingTop: '24px' }}>
              <button 
                onClick={() => {
                  console.log({ ...formData, id: ufId || 'novo' });
                  navigate('/admin/ufs');
                }}
                style={{
                  flex: 2,
                  padding: '12px',
                  backgroundColor: '#4f46e5',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {isEdit ? 'Salvar Alterações' : 'Cadastrar Estado'}
              </button>

              <Link to="/admin/ufs" style={{ flex: 1, textDecoration: 'none' }}>
                <button 
                  type="button"
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: 'white',
                    color: '#64748b',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '15px',
                    fontWeight: 500,
                    cursor: 'pointer'
                  }}
                >
                  Cancelar
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}