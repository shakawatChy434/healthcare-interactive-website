import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home/Home';
import Header from './pages/Share/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login/Login';
import ServiceConfirm from './pages/ServiceConfirm/ServiceConfirm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/"><Home></Home> </Route>
          <Route path="/home"><Home></Home> </Route>
          <Route path="/contact"><ContactUs></ContactUs></Route>
          <Route path="/serviceConfirm/:confirmID"><ServiceConfirm></ServiceConfirm> </Route>
          <Route path="/login"><Login></Login> </Route>
          <Route path="*"><NotFound></NotFound> </Route>
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
