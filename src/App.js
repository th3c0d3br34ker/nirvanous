import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import Loader from './components/Loader';

// import Chats from './Chats';
// import Login from './Login';
// import VideoChat from './VideoChat';

const Chats = lazy(() => import('./app/Chats'));
const Login = lazy(() => import('./app/Login'));
const VideoChat = lazy(() => import('./app/VideoChat'));

const App = () => {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/chats" exact component={Chats} />
              <Route path="/video-chat" exact component={VideoChat} />
              <Route path="/" component={Login} />
            </Switch>
          </Suspense>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
