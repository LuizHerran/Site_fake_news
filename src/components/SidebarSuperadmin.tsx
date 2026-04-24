import type { FC } from 'react';
import { Link } from 'react-router';

const SidebarSuperadmin: FC = () => {
  return (
    <aside
      style={{
        position: 'fixed' as const,
        left: 0,
        top: 0,
        width: 240,
        height: '100vh',
        backgroundColor: '#f8f9fa',
        overflowY: 'auto' as const,
        borderRight: '1px solid #dee2e6',
        padding: 0,
        margin: 0,
      }}
    >
      <nav style={{ padding: '1rem 0' }}>
        <ul style={{ listStyle: 'none' as const, margin: 0, padding: 0 }}>
          <li>
            <Link
              to="/superadmin/dashboard"
              style={{
                display: 'block',
                padding: '0.75rem 1rem',
                color: '#495057',
                textDecoration: 'none' as const,
                fontSize: '1rem',
                borderBottom: '1px solid #dee2e6',
              }}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/superadmin/ufs"
              style={{
                display: 'block',
                padding: '0.75rem 1rem',
                color: '#495057',
                textDecoration: 'none' as const,
                fontSize: '1rem',
                borderBottom: '1px solid #dee2e6',
              }}
            >
              UFs
            </Link>
          </li>
          <li>
            <Link
              to="/superadmin/cidades"
              style={{
                display: 'block',
                padding: '0.75rem 1rem',
                color: '#495057',
                textDecoration: 'none' as const,
                fontSize: '1rem',
                borderBottom: '1px solid #dee2e6',
              }}
            >
              Cidades
            </Link>
          </li>
          <li>
            <Link
              to="/superadmin/tags"
              style={{
                display: 'block',
                padding: '0.75rem 1rem',
                color: '#495057',
                textDecoration: 'none' as const,
                fontSize: '1rem',
                borderBottom: '1px solid #dee2e6',
              }}
            >
              Tags
            </Link>
          </li>
          <li>
            <Link
              to="/superadmin/perfis"
              style={{
                display: 'block',
                padding: '0.75rem 1rem',
                color: '#495057',
                textDecoration: 'none' as const,
                fontSize: '1rem',
                borderBottom: '1px solid #dee2e6',
              }}
            >
              Perfis
            </Link>
          </li>
          <li>
            <Link
              to="/superadmin/noticias"
              style={{
                display: 'block',
                padding: '0.75rem 1rem',
                color: '#495057',
                textDecoration: 'none' as const,
                fontSize: '1rem',
                borderBottom: '1px solid #dee2e6',
              }}
            >
              Notícias
            </Link>
          </li>
          <li>
            <Link
              to="/superadmin/usuarios"
              style={{
                display: 'block',
                padding: '0.75rem 1rem',
                color: '#495057',
                textDecoration: 'none' as const,
                fontSize: '1rem',
                borderBottom: '1px solid #dee2e6',
              }}
            >
              Usuários
            </Link>
          </li>
          <li>
            <Link
              to="/superadmin/comentarios"
              style={{
                display: 'block',
                padding: '0.75rem 1rem',
                color: '#495057',
                textDecoration: 'none' as const,
                fontSize: '1rem',
              }}
            >
              Comentários
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarSuperadmin;
