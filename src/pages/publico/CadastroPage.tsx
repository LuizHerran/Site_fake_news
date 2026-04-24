import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { ChangeEvent, FormEvent, CSSProperties } from 'react';
import ufss from '../../data/ufs';
import cidades from '../../data/cidades';

interface FormData {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
  uf: string;
  cidade: string;
  bio: string;
}

const CadastroPage = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    uf: '',
    cidade: '',
    bio: '',
  });

  const estados = ufss.map(uf => uf.sigla);

  const cidadesPorUF: Record<string, string[]> = ufss.reduce((acc, uf) => {
    acc[uf.sigla] = cidades
      .filter(cidade => cidade.ufId === uf.id)
      .map(cidade => cidade.nome);
    return acc;
  }, {} as Record<string, string[]>);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const value = target.value;
    const name = target.name as keyof FormData;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'uf' && { cidade: '' }),
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      alert('Senhas não coincidem!');
      return;
    }

    console.log('Dados do cadastro:', formData);
    alert('Cadastro realizado com sucesso!');

    setFormData({
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: '',
      uf: '',
      cidade: '',
      bio: '',
    });
  };

  const containerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  };

  const formStyle: CSSProperties = {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  };

  const labelStyle: CSSProperties = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#333',
  };

  const inputStyle: CSSProperties = {
    width: '100%',
    padding: '12px',
    marginBottom: '20px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    boxSizing: 'border-box',
  };

  const buttonStyle: CSSProperties = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
          Cadastro de Usuário
        </h2>

        <label style={labelStyle}>Nome Completo</label>
        <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} style={inputStyle} required />

        <label style={labelStyle}>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} style={inputStyle} required />

        <label style={labelStyle}>Senha</label>
        <input type="password" name="senha" value={formData.senha} onChange={handleInputChange} style={inputStyle} required minLength={6} />

        <label style={labelStyle}>Confirmar Senha</label>
        <input type="password" name="confirmarSenha" value={formData.confirmarSenha} onChange={handleInputChange} style={inputStyle} required />

        <label style={labelStyle}>UF</label>
        <select name="uf" value={formData.uf} onChange={handleInputChange} style={inputStyle} required>
          <option value="">Selecione</option>
          {estados.map((uf) => (
            <option key={uf} value={uf}>{uf}</option>
          ))}
        </select>

        <label style={labelStyle}>Cidade</label>
        <select name="cidade" value={formData.cidade} onChange={handleInputChange} style={inputStyle} required disabled={!formData.uf}>
          <option value="">Selecione</option>
          {formData.uf &&
            cidadesPorUF[formData.uf]?.map((cidade) => (
              <option key={cidade} value={cidade}>{cidade}</option>
            ))}
        </select>

        <label style={labelStyle}>Bio</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
          placeholder="Fale um pouco sobre você...(opcional)"
          style={{ ...inputStyle, minHeight: '100px' }}
        />

        <button type="submit" style={buttonStyle}>
          Cadastrar
        </button>

        {/* 🔥 LINK ADICIONADO AQUI */}
        <p style={{ textAlign: 'center', marginTop: '15px' }}>
          Já tem uma conta?{' '}
          <Link to="/login" style={{ color: '#007bff', fontWeight: 'bold' }}>
            Fazer login
          </Link>
        </p>

      </form>
    </div>
  );
};

export default CadastroPage;