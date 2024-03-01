import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Collection from './pages/Collection';
import Home from "./pages/Home";
import Inspiration from "./pages/Inspiration";
import KLKEdit from "./pages/KLKEdit";
import KLKNewItem from "./pages/KLKNewItem";
import MyCollection from "./pages/MyCollection";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TypeOfYe from "./pages/TypeOfYe";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/collection">
            <Collection />
          </Route>
          <Route path="/inspiration">
            <Inspiration />
          </Route>
          <Route path="/klk-edit">
            <KLKEdit />
          </Route>
          <Route path="/klk-new-item">
            <KLKNewItem />
          </Route>
          <Route path="/my-collection">
            <MyCollection />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/type-of-ye">
            <TypeOfYe />
          </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
