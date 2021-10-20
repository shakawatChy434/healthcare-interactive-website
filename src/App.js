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
import AuthProvider from './Context/AuthProvider';
import PrivetRoute from './pages/Login/PrivetRoute/PrivetRoute';
import AppoinmentConfirm from './pages/Home/AppoinmentConfirm/AppoinmentConfirm';
import Register from './pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/"><Home></Home> </Route>
            <Route path="/home"><Home></Home> </Route>
            <Route path="/contact"><ContactUs></ContactUs></Route>
            <PrivetRoute path="/service/:serviceId"><ServiceConfirm></ServiceConfirm> </PrivetRoute>
            <PrivetRoute path="/appoinmentConfirm/:appoinmentID"><AppoinmentConfirm></AppoinmentConfirm> </PrivetRoute>
            <Route path="/register"><Register></Register> </Route>
            <Route path="/login"><Login></Login> </Route>
            <Route path="*"><NotFound></NotFound> </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div >
  );
}

export default App;
