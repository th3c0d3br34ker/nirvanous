import NavBar from '../components/NavBar';
import Options from '../components/Options';
import Notifications from '../components/Notifications';
import VideoPlayer from '../components/VideoPlayer';
import SocketProvider from '../contexts/SocketContext';

const VideoChat = () => {
  return (
    <div className="chats-page">
      <NavBar />

      <SocketProvider>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </SocketProvider>
    </div>
  );
};

export default VideoChat;
