import { useState } from 'react';
import { useSocket } from 'contexts/SocketContext';

import CallIcon from '@material-ui/icons/Call';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

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
            <TextField
              type="text"
              id="name"
              value={me}
              readOnly
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="Copy ID"
                    onClick={() => {}}
                    onMouseDown={() => {}}
                  >
                    <FileCopyIcon />
                  </IconButton>
                ),
              }}
            />
          </div>
        </div>

        <br />
        <br />

        <div className="grid-container">
          <div className="grid-item">
            <h6>Make a Call</h6>
            <label htmlFor="name">ID To Call</label>
            <TextField
              type="text"
              id="id-to-call"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
            />
            <br />
            <br />
            {callAccepted && !callEnded ? (
              <Button onClick={leaveCall}>Hang Up</Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={() => callUser(idToCall)}
                startIcon={<CallIcon />}
              >
                Call
              </Button>
            )}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Options;
