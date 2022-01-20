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
import LogInOut from './components/LoginOut'


function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [pop, setPop] = useState (false)


    console.log(user)
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
        pop={pop} 
        setPop={setPop}
      />
      {pop && ( <LogInOut pop={pop} setPop={setPop} setUser={setUser} user={user} toggleAuthenticated={toggleAuthenticated} />
)}
      <main>
        <Switch>
          <Route exact path="/" component={(props)=><HomePage {...props } setPop={setPop} pop={pop} user={user} toggleAuthenticated={toggleAuthenticated}  />} />
          <Route path="/login" component={(props) => <LogIn {...props} setPop={setPop} pop={pop} setUser={setUser} 
            toggleAuthenticated={toggleAuthenticated} />} />
          <Route path="/register" component={Register} />
          <Route path="/events/:artistName/:eventCode" component={(props) => 
            <EventPage 
              {...props} 
              user={user} 
              authenticated={authenticated}
            />
          }/>
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
