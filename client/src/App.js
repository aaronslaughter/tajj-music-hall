import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router'
import NavBar from './components/NavBar'
import Register from './pages/Register'
import LogIn from './pages/LogIn'
import './styles/App.css'
import ProtectedRoute from './components/ProtectedRoute'
import SearchPage from './pages/SearchPage'
import { CheckSession } from './services/Auth'

import pic1 from './components/landingPic.jpg'

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
      <img src={pic1} placeholder='Concert_picture' id="pic1"/>
      <main>
        <Switch>
          <Route exact path="/"/>
          <Route path="/login" component={(props) => <LogIn {...props} setUser={setUser}
            toggleAuthenticated={toggleAuthenticated} />} />
          <Route path="/register" component={Register} />
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
