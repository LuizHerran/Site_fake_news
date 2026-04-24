import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router';

type UF = { id: number; sigla: string; };
type Cidade = { id: number; nomeCidade: string; ufId: number; };

const ufs: UF[] = [
  { id: 1, sigla: 'SP' },
  { id: 2, sigla: 'RJ' },
  { id: 3, sigla: 'MG' },
  { id: 4, sigla: 'BA' },
];

const cidadesMock: Cidade[] = [
  { id: 1, nomeCidade: 'São Paulo', ufId: 1 },
  { id: 2, nomeCidade: 'Rio de Janeiro', ufId: 2 },
];

const FormCidadePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cidadeId = id ? parseInt(id, 10) : undefined;
  const isEditMode = !!cidadeId;

  const [formData, setFormData] = useState<Cidade>({
    id: 0,
    nomeCidade: '',
    ufId: 1,
  });

  useEffect(() => {
    if (isEditMode && cidadeId) {
      const cidade = cidadesMock.find(c => c.id === cidadeId);
      if (cidade) setFormData(cidade);
    }
  }, [cidadeId, isEditMode]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Salvar cidade:', formData);
    // Após salvar, geralmente voltamos para a listagem
    navigate('/admin/cidades');
  };

  // Estilos constantes
  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#475569'
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '15px',
    color: '#1e293b',
    outline: 'none',
    boxSizing: 'border-box', // Importante para o padding não quebrar o layout
    transition: 'border-color 0.2s, box-shadow 0.2s'
  };

  return (
    <div style={{ padding: '60px 20px', backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '450px', margin: '0 auto' }}>
        
        <Link to="/admin/cidades" style={{ color: '#6366f1', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
          ← Voltar para listagem
        </Link>

        <div style={{ 
          backgroundColor: 'white', 
          padding: '40px', 
          borderRadius: '16px', 
          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)',
          marginTop: '20px',
          border: '1px solid #f1f5f9'
        }}>
          <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', margin: '0 0 8px 0' }}>
            {isEditMode ? 'Editar Cidade' : 'Cadastrar Cidade'}
          </h1>
          <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '32px' }}>
            {isEditMode ? 'Atualize as informações da cidade selecionada.' : 'Preencha os dados para adicionar uma nova cidade.'}
          </p>

          <form onSubmit={handleSubmit}>
            {/* Campo Nome */}
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>Nome da Cidade</label>
              <input
                type="text"
                placeholder="Ex: Santo Antônio do Descoberto"
                style={inputStyle}
                value={formData.nomeCidade}
                onChange={(e) => setFormData({ ...formData, nomeCidade: e.target.value })}
                required
              />
            </div>

            {/* Campo UF */}
            <div style={{ marginBottom: '32px' }}>
              <label style={labelStyle}>Estado (UF)</label>
              <select
                style={{ ...inputStyle, appearance: 'none', backgroundColor: 'white' }}
                value={formData.ufId}
                onChange={(e) => setFormData({ ...formData, ufId: Number(e.target.value) })}
              >
                {ufs.map(uf => (
                  <option key={uf.id} value={uf.id}>
                    {uf.sigla}
                  </option>
                ))}
              </select>
            </div>

            {/* Ações */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button 
                type="submit"
                style={{
                  padding: '14px',
                  backgroundColor: '#4f46e5',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px -1px rgba(79, 70, 229, 0.2)'
                }}
              >
                {isEditMode ? 'Salvar Alterações' : 'Confirmar Cadastro'}
              </button>

              <Link to="/admin/cidades" style={{ textDecoration: 'none' }}>
                <button 
                  type="button"
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: 'transparent',
                    color: '#64748b',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '14px',
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
};

export default FormCidadePage;