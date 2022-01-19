import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router'
import NavBar from './components/NavBar'
import Register from './pages/Register'
import LogIn from './pages/LogIn'
import HomePage from './pages/HomePage'
import './styles/App.css'
import ProtectedRoute from './components/ProtectedRoute'
import SearchPage from './pages/SearchPage'
import EventPage from './pages/EventPage'
import { CheckSession } from './services/Auth'
import Update from './components/Update'
import LandingSplash from './LandingSplash'



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
          <Route exact path="/" component={LandingSplash} />
          <Route exact path="/homepage" component={HomePage} />
          <Route path="/login" component={(props) => <LogIn {...props} setUser={setUser}
            toggleAuthenticated={toggleAuthenticated} />} />
          <Route path="/register" component={Register} />
          <Route path="/update" component={(props) => <Update {...props} user={user} handleLogOut={handleLogOut} />} />
          <Route path="/events/:artistName/:eventCode" component={(props) =>
            <EventPage
              {...props}
              user={user}
              authenticated={authenticated}
            />
          } />
          <Route path="/events" component={SearchPage} />
          {
            user && authenticated && (
              <ProtectedRoute
                authenticated={authenticated}
                user={user}
                path="/events"
                component={SearchPage}
              />
            )
          }

        </Switch>
      </main>

    </div>
  )
}

export default App
