import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';

type UF = {
  id: number;
  sigla: string;
};

type Cidade = {
  id: number;
  nomeCidade: string;
  ufId: number;
};

const ufs: UF[] = [
  { id: 1, sigla: 'SP' },
  { id: 2, sigla: 'RJ' },
];

const cidadesMock: Cidade[] = [
  { id: 1, nomeCidade: 'SÃ£o Paulo', ufId: 1 },
  { id: 2, nomeCidade: 'Rio de Janeiro', ufId: 2 },
];

const FormCidadePage = () => {
  const { id } = useParams();
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
      if (cidade) setFormData(() => cidade);
    }
  }, [cidadeId, isEditMode]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Salvar cidade:', formData);
  };

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: '0 auto' }}>
      <h1>
        {isEditMode ? 'Editar Cidade' : 'Nova Cidade'}
      </h1>

      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          type="text"
          value={formData.nomeCidade}
          onChange={(e) =>
            setFormData({ ...formData, nomeCidade: e.target.value })
          }
          required
        />

        <label>UF</label>
        <select
          value={formData.ufId}
          onChange={(e) =>
            setFormData({ ...formData, ufId: Number(e.target.value) })
          }
        >
          {ufs.map(uf => (
            <option key={uf.id} value={uf.id}>
              {uf.sigla}
            </option>
          ))}
        </select>

        <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
          <button type="submit">Salvar</button>

          <Link to="/admin/cidades">
            <button type="button">Cancelar</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormCidadePage;