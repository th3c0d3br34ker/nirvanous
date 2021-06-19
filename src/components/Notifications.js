import { useSocket } from '../contexts/SocketContext';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useSocket();
  return (
    <div>
      <h1>Notifications</h1>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>{call.name} is calling:</h1>
          <button onClick={answerCall}>Answer</button>
        </div>
      )}
    </div>
  );
};

export default Notifications;
