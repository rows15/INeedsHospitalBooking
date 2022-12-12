import { useNavigate } from 'react-router';



const Header = () => {
    const navigate = useNavigate();
    const logout = () => {
        
        localStorage.removeItem("signed");
        
        navigate('/')
        
    };

    function estaLogado() {
      try {
        let user = JSON.parse(localStorage.getItem('signed'));
        return user.name;
      } catch (error) {
        return '';
      }
    }
  
    return (
      <div className='header'>
        
        <div className='header-right'>
          
          {localStorage.signed == null ? (
            <>
              
            </>
          ) : (
            <>
              <div className='logIn'>Bem vindo, {estaLogado()}!</div>
              <button onClick={logout}>Logout</button>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default Header;