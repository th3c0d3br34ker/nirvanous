import { useHistory } from 'react-router-dom';
import firebaseAuth from '../utils/firebase';

const NavBar = () => {
  const history = useHistory();

  const handleLogout = async () => {
    await firebaseAuth.signOut();
    history.push('/');
  };

  return (
    <div className="nav-bar">
      <div className="logo-tab">Nirvanous</div>
      <div className="logout-tab" onClick={handleLogout}>
        Logout
      </div>
    </div>
  );
};

export default NavBar;
