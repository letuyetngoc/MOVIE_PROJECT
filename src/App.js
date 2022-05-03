import './App.css';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Contact from './pages/Contact/Contact'
import News from './pages/News/New'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path='/home' exact Component={Home} />
        <HomeTemplate path='/contact' exact Component={Contact} />
        <HomeTemplate path='/news' exact Component={News} />
        <Route path='/register' exact Component={Register} />
        <Route path='/login' exact Component={Login} />
        <HomeTemplate path='' exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
