import { useAuth } from 'contexts/AuthContext';
import { useSocket } from 'contexts/SocketContext';

const VideoPlayer = () => {
  const { myVideo, userVideo, stream, call, callAccepted, callEnded } =
    useSocket();
  const { currentUser } = useAuth();

  return (
    <div className="video-player-container">
      {stream && (
        <div className="video-wrapper">
          <div className="video-container">
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className="video-player"
            />
            <h4 className="user-subtitle">{currentUser.email}</h4>
          </div>
        </div>
      )}

      {callAccepted && !callEnded && (
        <div className="video-wrapper">
          <div className="video-container">
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className="video-player"
            />
          </div>
          <h4 className="user-subtitle">{call?.name}</h4>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
