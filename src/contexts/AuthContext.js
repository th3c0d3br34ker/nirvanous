import { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import auth from '../utils/firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      if (user) history.push('/chats');
    });
  }, [currentUser, history]);

  const value = { currentUser };

  return (
    <AuthContext.Provider value={value}>
      {loading ? null : <>{children}</>}
    </AuthContext.Provider>
  );
};
