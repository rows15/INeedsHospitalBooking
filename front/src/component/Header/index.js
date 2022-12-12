import { useNavigate } from 'react-router';
import "./styles.css"


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
            <div className='container-header'>
              <div className='logIn'><h3>Welcome, {estaLogado()}!</h3></div>
              <button className="button-logout" onClick={logout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Header;