import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router'
import NavBar from './components/NavBar'
import Register from './pages/Register'
import LogIn from './pages/LogIn'
import HomePage from './pages/HomePage'
import About from './pages/About'
import './styles/App.css'
import ProtectedRoute from './components/ProtectedRoute'
import SearchPage from './pages/SearchPage'
import EventPage from './pages/EventPage'
import { CheckSession } from './services/Auth'
import LogInOut from './components/LoginOut'
import Update from './components/Update'
import ProfilePage from './pages/ProfilePage'
import toast, { Toaster } from 'react-hot-toast';
import TajjMuHall from './videos/TajjMuHall.mov'
import BWlogoWhite from './assets/BWlogoWhite-8.png'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [pop, setPop] = useState(false)
  const [splash, setSplash] = useState (true)

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

  const notifyRegister = () => toast.success('Registered!', {
    duration: 4000,
    position: 'bottom-center'
  });

  const notifyLogin = () => toast.success('Login Successful!', {
    duration: 4000,
    position: 'bottom-center'
  });

  return (
    <div className="App">
      {splash ? 
      <div className='splash'>
        <p id="buttonSplash" onClick={() => setSplash(!splash)}>Enter</p>
        <img id="splashImage" onClick={() => setSplash(!splash)} src={BWlogoWhite}/>
        <video id="splash" onClick={() => setSplash(!splash)} autoPlay muted loop src={TajjMuHall} width="100%"></video>
      </div> :
      <div>
        <NavBar
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
          pop={pop}
          setPop={setPop}
        />
        {pop && ( <LogInOut 
          notifyRegister={notifyRegister} 
          notifyLogin={notifyLogin}
          pop={pop} setPop={setPop} 
          setUser={setUser} 
          user={user} 
          toggleAuthenticated={toggleAuthenticated}/>)
        }

        <main>
          <Switch>
            <Route exact path="/" component={(props) => <HomePage {...props} setPop={setPop} pop={pop} user={user} toggleAuthenticated={toggleAuthenticated} />} />
            <Route path="/about" component={About} />
            <Route path="/login" component={(props) => <LogIn {...props} setPop={setPop} pop={pop} setUser={setUser}
              toggleAuthenticated={toggleAuthenticated} />} />
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
            {user && authenticated && (
                <ProtectedRoute
                  authenticated={authenticated}
                  user={user}
                  path="/profile"
                  component={(props) => <ProfilePage {...props} user={user} authenticated={authenticated}/>}
                />
              )
            }
            <Route path="/events" component={SearchPage} />
          </Switch>
        </main>
        <Toaster />
      </div>
      }
    </div>
  );
}

export default App;
