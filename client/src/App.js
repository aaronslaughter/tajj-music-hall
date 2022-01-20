import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import NavBar from './components/NavBar';
import Register from './pages/Register';
import LogIn from './pages/LogIn';
import HomePage from './pages/HomePage';
import './styles/App.css';
import ProtectedRoute from './components/ProtectedRoute';
import SearchPage from './pages/SearchPage';
import EventPage from './pages/EventPage';
import { CheckSession } from './services/Auth';
import LogInOut from './components/LoginOut';
import Update from './components/Update';
import LandingSplash from './LandingSplash';
import ProfilePage from './pages/ProfilePage';

function App() {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [pop, setPop] = useState(false);

  const handleLogOut = () => {
    //Reset all auth related state and clear localstorage
    setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
  };
  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkToken();
    }
  }, []);

  return (
    <div className="App">
      <NavBar
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
        pop={pop}
        setPop={setPop}
      />
      {pop && (
        <LogInOut
          pop={pop}
          setPop={setPop}
          setUser={setUser}
          user={user}
          toggleAuthenticated={toggleAuthenticated}
        />
      )}
      <main>
        <Switch>
          <Route
            exact
            path="/home"
            component={(props) => (
              <HomePage
                {...props}
                setPop={setPop}
                pop={pop}
                user={user}
                toggleAuthenticated={toggleAuthenticated}
              />
            )}
          />
          <Route
            path="/login"
            component={(props) => (
              <LogIn
                {...props}
                setPop={setPop}
                pop={pop}
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            )}
          />
          <Route path="/register" component={Register} />
          <Route
            path="/update"
            component={(props) => (
              <Update {...props} user={user} handleLogOut={handleLogOut} />
            )}
          />
          <Route
            path="/events/:artistName/:eventCode"
            component={(props) => (
              <EventPage {...props} user={user} authenticated={authenticated} />
            )}
          />
          <Route
            path="/profile"
            component={(props) => (
              <ProfilePage
                {...props}
                user={user}
                authenticated={authenticated}
              />
            )}
          />

          <Route path="/events" component={SearchPage} />
          {user && authenticated && (
            <ProtectedRoute
              authenticated={authenticated}
              user={user}
              path="/events"
              component={SearchPage}
            />
          )}
          <Route exact path="/" component={LandingSplash} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
