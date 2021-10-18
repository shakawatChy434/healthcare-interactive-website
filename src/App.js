import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import ContactUs from './pages/ContactUs/ContactUs';
import OurDoctors from './pages/Home/Doctors/OurDoctors';
import Home from './pages/Home/Home/Home';
import Services from './pages/Home/Services/Services';
import Header from './pages/Share/Header/Header';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/"><Home></Home> </Route>
          <Route path="/home"><Home></Home> </Route>
          <Route path="*"><NotFound></NotFound> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
