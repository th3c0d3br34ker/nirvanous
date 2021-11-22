import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    float: 'right',
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const MyMessage = ({ message }) => {
  const classes = useStyles();

  if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: 'right' }}
      />
    );
  }

  return (
    <Paper elevation={0} outlined className={classes.root}>
      <Paper
        elevation={3}
        style={{
          float: 'right',
          marginRight: '18px',
          display: 'flex',
        }}
      >
        {message.text}
      </Paper>

      <Avatar
        alt={message.sender.username}
        src={message.sender.avatar}
        className={classes.avatar}
      />
    </Paper>
  );
};

export default MyMessage;
