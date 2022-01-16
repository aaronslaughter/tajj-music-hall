import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Register from './pages/Register'
import LogIn from './pages/LogIn'
import './styles/App.css'
import ProtectedRoute from './components/ProtectedRoute'
import Events from './pages/Events'
import { CheckSession } from './services/Auth'
import BITTest from './components/BITTest';

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localstorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">

      <NavBar
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
      <main>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route path="/login" component={(props) => <LogIn {...props} setUser={setUser}
            toggleAuthenticated={toggleAuthenticated} />} />
          <Route path="/register" component={Register} />
          <Route path="/events" component={Events} />
          {
            user && authenticated && (
              <ProtectedRoute
                authenticated={authenticated}
                user={user}
                path="/events"
                component={Events}
              />
            )
          }

        </Switch>
      </main>
    </div>
  )
}

export default App


// import './App.css';
// import BITTest from './components/BITTest';

// function App() {
//   return (
//     <div className="App">
//       Tajj App Placeholder
//       <BITTest/>
//     </div>
//   );
// }

// export default App;