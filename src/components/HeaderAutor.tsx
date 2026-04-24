import { Link } from 'react-router';

const HeaderAutor = () => (
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
      to='/'
      style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}
    >
      Home
    </Link>
    <Link to='/autor/minhas-noticias' style={{ color: 'white', textDecoration: 'none' }}>
      Minhas Notícias
    </Link>
    <Link to='/autor/nova-noticia' style={{ color: 'white', textDecoration: 'none' }}>
      Nova Notícia
    </Link>
    <Link to='/autor/perfil' style={{ color: 'white', textDecoration: 'none' }}>
      Perfil
    </Link>
  </header>
);

export default HeaderAutor;
