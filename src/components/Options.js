import { useState } from 'react';
import { useSocket } from '../contexts/SocketContext';

const Options = ({ children }) => {
  const [idToCall, setIdToCall] = useState('');

  const { me, callAccepted, callEnded, leaveCall, callUser } = useSocket();

  return (
    <div className="options-container">
      <h1>Options</h1>
      <div className="root" noValidate autoComplete="off">
        <div className="grid-container">
          <div className="grid-item">
            <h6>Account Info</h6>
            <label htmlFor="name">ID: </label>
            <input type="text" id="name" value={me} readOnly />
          </div>
        </div>

        <br />
        <br />

        <div className="grid-container">
          <div className="grid-item">
            <h6>Make a Call</h6>
            <label htmlFor="name">ID To Call</label>
            <input
              type="text"
              id="id-to-call"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
            />
            <br />
            <br />
            {callAccepted && !callEnded ? (
              <button onClick={leaveCall}>Hang Up</button>
            ) : (
              <button onClick={() => callUser(idToCall)}>Call</button>
            )}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Options;
