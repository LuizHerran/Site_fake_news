import { Link } from 'react-router';

const HeaderEditor = () => (
  <header
    style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '15px 20px',
      backgroundColor: '#333',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}
  >
    <Link
      to='/editor'
      style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}
    >
      Editor
    </Link>
    <Link to='/editor/perfil-editor' style={{ color: 'white', textDecoration: 'none' }}>
      Perfil Editor
    </Link>
    <Link to='/editor/publicar-despublicar' style={{ color: 'white', textDecoration: 'none' }}>
      Publicar/Despublicar
    </Link>
  </header>
);

export default HeaderEditor;