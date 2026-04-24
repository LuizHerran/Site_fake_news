import { Link } from 'react-router';

const HeaderPublico = () => (
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
    <Link to='/login' style={{ color: 'white', textDecoration: 'none' }}>
      Login
    </Link>
    <Link to='/cadastro' style={{ color: 'white', textDecoration: 'none' }}>
      Cadastro
    </Link>
  </header>
);

export default HeaderPublico;