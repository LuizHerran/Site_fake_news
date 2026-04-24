export type Perfil = "LEITOR" | "AUTOR" | "EDITOR" | "SUPERADMIN";

export interface UF {
  id: number;
  sigla: string;
  nome: string;
}

export interface Cidade {
  id: number;
  nome: string;
  ufId: number;
}

export interface Tag {
  id: number;
  nome: string;
  slug: string;
}

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  perfil: Perfil;
  avatar?: string;
  bio?: string;
  cidadeId: number;
  ativo: boolean;
  criadoEm: string;
}

export interface Noticia {
  id: number;
  titulo: string;
  subtitulo: string;
  conteudo: string;
  imagemCapa: string;
  autorId: number;
  cidadeId: number;
  tags: number[];
  publicada: boolean;
  criadoEm: string;
  atualizadoEm: string;
  visualizacoes: number;
}

export interface Comentario {
  id: number;
  noticiaId: number;
  autorId: number;
  texto: string;
  criadoEm: string;
  aprovado: boolean;
}