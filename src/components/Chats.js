import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import axios from 'axios';

import { useAuth } from '../contexts/AuthContext';
import firebaseAuth from '../utils/firebase';

import Loader from './Loader';

const getFile = async (url) => {
  let response = await fetch(url);
  let data = await response.blob();
  return new File([data], 'test.jpg', { type: 'image/jpeg' });
};

const Chats = () => {
  const { currentUser } = useAuth();
  const history = useHistory();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      if (currentUser) {
        try {
          await axios.get('https://api.chatengine.io/users/me', {
            headers: {
              'project-id': process.env.REACT_APP_CHATENGINE_ID,
              'user-name': currentUser?.email,
              'user-secret': currentUser?.uid,
            },
          });

          console.log('/users/me');
          setLoading(false);
        } catch (error) {
          let formData = new FormData();

          formData.append('email', currentUser.email);
          formData.append('username', currentUser.email);
          formData.append('secret', currentUser.uid);

          if (currentUser.photoURL) {
            const avatar = await getFile(currentUser.photoURL);
            formData.append('avatar', avatar, avatar.name);
          }

          await axios.post('https://api.chatengine.io/users/', formData, {
            headers: {
              'private-key': process.env.REACT_APP_CHATENGINE_KEY,
            },
          });

          setLoading(false);
        }
      } else {
        history.push('/');
        return;
      }
    };

    // Call the function
    getUser();
    // eslint-disable-next-line
  }, []);

  const handleLogout = async () => {
    await firebaseAuth.signOut();
    history.push('/');
  };

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Nirvanous</div>
        <div className="logout-tab" onClick={handleLogout}>
          Logout
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <ChatEngine
          height="calc(100vh - 66px)"
          projectID={process.env.REACT_APP_CHATENGINE_ID}
          userName={currentUser?.email}
          userSecret={currentUser?.uid}
        />
      )}
    </div>
  );
};

// const Loading = () => (

// )
export default Chats;
