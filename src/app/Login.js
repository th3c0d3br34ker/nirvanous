import { GoogleOutlined, FacebookFilled } from '@ant-design/icons';

import firebase from 'firebase/app';
import auth from 'utils/firebase';

const Login = () => {
  const handleGoogleLogin = () => {
    auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  };

  const handleFacebookLogin = () => {
    auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  };
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Nirvanous 💙</h2>
        <div className="login-button google" onClick={handleGoogleLogin}>
          <GoogleOutlined /> Sign In with Google
        </div>
        <br />
        <br />
        <div className="login-button facebook" onClick={handleFacebookLogin}>
          <FacebookFilled /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
