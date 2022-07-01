import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';

import { useAuth } from 'contexts/AuthContext';

import Loader from 'components/Loader';
import NavBar from 'components/NavBar';
import { CHAT_ENGINE_ID } from 'utils/config';
import { fetchMe, getFile } from 'api';

const Chats = () => {
  const { currentUser } = useAuth();
  const history = useHistory();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      if (currentUser) {
        try {
          await fetchMe(currentUser);

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

          await createUser(formData);

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

  return (
    <div className="chats-page">
      <NavBar />

      {loading ? (
        <Loader />
      ) : (
        <ChatEngine
          height="calc(100vh - 66px)"
          projectID={CHAT_ENGINE_ID}
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
