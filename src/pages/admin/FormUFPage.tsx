import { useParams, Link } from 'react-router';
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
  const ufId = id ? parseInt(id, 10) : undefined;

  const ufInicial = mockUFs.find(u => u.id === ufId);

  const [formData, setFormData] = useState({
    nomeUF: ufInicial?.nomeUF || '',
    sigla: ufInicial?.sigla || '',
  });

  const isEdit = !!ufInicial;

  const handleSave = () => {
    console.log({
      ...formData,
      id: ufId || 'novo'
    });
  };

  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <h1>
        {isEdit
          ? `Editar UF — ${formData.sigla}`
          : 'Nova UF'}
      </h1>

      {/* INPUTS */}
      <label>Nome</label>
      <input
        value={formData.nomeUF}
        onChange={e =>
          setFormData({ ...formData, nomeUF: e.target.value })
        }
      />

      <label>Sigla</label>
      <input
        value={formData.sigla}
        onChange={e =>
          setFormData({
            ...formData,
            sigla: e.target.value.toUpperCase()
          })
        }
      />

      {/* BOTÕES */}
      <div style={{ marginTop: 20 }}>
        <button onClick={handleSave}>Salvar</button>

        <Link to="/admin/ufs">
          <button type="button">Cancelar</button>
        </Link>
      </div>
    </div>
  );
}