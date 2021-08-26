import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/homePage/homePage'
import Auth from './pages/auth'

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path='/login'
              render={(props) => <Auth {...props} authRoute='login' />}
            />
            <Route
              exact
              path='/register'
              render={(props) => <Auth {...props} authRoute='register' />}
            />
            <Route path='/'>
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
