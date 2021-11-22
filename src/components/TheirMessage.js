import { Avatar, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    float: 'right',
  },
}));

const TheirMessage = ({ lastMessage, message }) => {
  const classes = useStyles();

  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <Avatar src={message.sender.avatar} className={classes.avatar} />
      )}
      {message.attachments && message.attachments.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
        />
      ) : (
        <Paper elevation={0} outlined className={classes.root}>
          <Avatar
            alt={message.sender.username}
            src={message.sender.avatar}
            className={classes.avatar}
          />
          <Paper
            elevation={3}
            style={{
              float: 'left',
              marginLeft: isFirstMessageByUser ? '4px' : '48px',
            }}
          >
            {message.text}
          </Paper>
        </Paper>
      )}
    </div>
  );
};

export default TheirMessage;
