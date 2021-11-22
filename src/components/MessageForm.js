import { useState } from 'react';

import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';

import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue('');
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (
    <Paper conponent="form" elevation={0} onSubmit={handleSubmit}>
      <label htmlFor="contained-button-file">
        <Button>
          <AttachFileIcon />
        </Button>
      </label>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="contained-button-file"
        multiple={false}
        type="file"
        onChange={handleUpload.bind(this)}
      />
      <InputBase
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
        style={{ flexGrow: 1 }}
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleSubmit}
      >
        <SendIcon />
      </Button>
    </Paper>
  );
};

export default MessageForm;
