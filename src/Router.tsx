import { createBrowserRouter, RouterProvider } from 'react-router';
import type { RouteObject } from 'react-router';

import HomePage from './pages/publico/HomePage';
import LoginPage from './pages/publico/LoginPage';
import CadastroPage from './pages/publico/CadastroPage';
import LembrarSenhaPage from './pages/publico/LembrarSenhaPage';
import DetalheNoticiaPage from './pages/publico/DetalheNoticiaPage';
import BuscaPorUFPage from './pages/publico/BuscaPorUFPage';
import BuscaPorTagPage from './pages/publico/BuscaPorTagPage';

import PerfilLeitorPage from './pages/leitor/PerfilLeitorPage';
import ComentarLeitorPage from './pages/leitor/ComentarLeitorPage';

import PerfilAutorPage from './pages/autor/PerfilAutorPage';
import MinhasNoticiasPage from './pages/autor/MinhasNoticiasPage';
import NovaNoticiaPage from './pages/autor/NovaNoticiaPage';
import EditarNoticiaPage from './pages/autor/EditarNoticiaPage';
import ComentarAutorPage from './pages/autor/ComentarAutorPage';

import PainelEditorPage from './pages/editor/PainelEditorPage';
import PerfilEditorPage from './pages/editor/PerfilEditorPage';
import PublicarDespublicarPage from './pages/editor/PublicarDespublicarPage';
import EditarQualquerNoticiaPage from './pages/editor/EditarQualquerNoticiaPage';

import DashboardPage from './pages/admin/DashboardPage';
import CrudUFPage from './pages/admin/CrudUFPage';
import FormUFPage from './pages/admin/FormUFPage';
import CrudCidadesPage from './pages/admin/CrudCidadesPage';
import FormCidadePage from './pages/admin/FormCidadePage';
import CrudTagsPage from './pages/admin/CrudTagsPage';
import FormTagPage from './pages/admin/FormTagPage';
import CrudPerfisPage from './pages/admin/CrudPerfisPage';
import CrudNoticiasPage from './pages/admin/CrudNoticiasPage';
import FormNoticiaAdminPage from './pages/admin/FormNoticiaAdminPage';
import CrudUsuariosPage from './pages/admin/CrudUsuariosPage';
import FormUsuarioPage from './pages/admin/FormUsuarioPage';
import GerenciarComentariosPage from './pages/admin/GerenciarComentariosPage';
import NotFoundPage from './pages/NotFound';

const routes: RouteObject[] = [
  // PÚBLICO
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/cadastro', element: <CadastroPage /> },
  { path: '/lembrar-senha', element: <LembrarSenhaPage /> },
  { path: '/busca/uf/:sigla', element: <BuscaPorUFPage /> },
  { path: '/busca/tag/:slug', element: <BuscaPorTagPage /> },
  { path: '/noticia/:id', element: <DetalheNoticiaPage /> },

  // LEITOR
  { path: '/leitor/perfil', element: <PerfilLeitorPage /> },
  { path: '/leitor/comentar/:noticiaId', element: <ComentarLeitorPage /> },

  // AUTOR
  { path: '/autor/perfil', element: <PerfilAutorPage /> },
  { path: '/autor/comentar/:noticiaId', element: <ComentarAutorPage /> },
  { path: '/autor/noticias', element: <MinhasNoticiasPage /> },
  { path: '/autor/noticias/nova', element: <NovaNoticiaPage /> },
  { path: '/autor/noticias/:id/editar', element: <EditarNoticiaPage /> },

  // EDITOR
  { path: '/editor/painel', element: <PainelEditorPage /> },
  { path: '/editor/perfil', element: <PerfilEditorPage /> },
  { path: '/editor/publicar/:id', element: <PublicarDespublicarPage /> },
  { path: '/editor/noticias/:id/editar', element: <EditarQualquerNoticiaPage /> },

  // SUPERADMIN
  { path: '/admin/dashboard', element: <DashboardPage /> },
  { path: '/admin/ufs', element: <CrudUFPage /> },
  { path: '/admin/ufs/nova', element: <FormUFPage /> },
  { path: '/admin/ufs/:id/editar', element: <FormUFPage /> },
  { path: '/admin/cidades', element: <CrudCidadesPage /> },
  { path: '/admin/cidades/nova', element: <FormCidadePage /> },
  { path: '/admin/cidades/:id/editar', element: <FormCidadePage /> },
  { path: '/admin/tags', element: <CrudTagsPage /> },
  { path: '/admin/tags/nova', element: <FormTagPage /> },
  { path: '/admin/tags/:id/editar', element: <FormTagPage /> },
  { path: '/admin/perfis', element: <CrudPerfisPage /> },
  { path: '/admin/noticias', element: <CrudNoticiasPage /> },
  { path: '/admin/noticias/:id/editar', element: <FormNoticiaAdminPage /> },
  { path: '/admin/usuarios', element: <CrudUsuariosPage /> },
  { path: '/admin/usuarios/:id/editar', element: <FormUsuarioPage /> },
  { path: '/admin/comentarios', element: <GerenciarComentariosPage /> },

  // 404
  { path: '*', element: <NotFoundPage /> },
];

const router = createBrowserRouter(routes);

export default function Router() {
  return <RouterProvider router={router} />;
}
