import './App.css';
import Home from './components/Home';
import RestaurantList from './components/RestaurantList';
import RestaurantUpdate from './components/RestaurantUpdate';
import RestaurantDetails from './components/RestaurantDetail';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantSearch from './components/RestaurantSearch';
import Login from './components/Login';
import Logout from './components/Logout';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Protected from './components/Protected';
// import NavBarMenu from './components/NavBarMenu';


function App() {
   return (
      <div className="App">
         <Router>
            <Route path="/logout">
               <Logout />
            </Route>
            <Route path="/login"
               render={props => (
                  <Login {...props} />
               )}
            >
            </Route>
            {/* <Route exact path="/">
               <Home />
            </Route> */}
            <Protected exact path="/details" component={RestaurantDetails} />
            <Protected exact path="/update/:id" component={RestaurantUpdate} />
            <Protected exact path="/search" component={RestaurantSearch} />
            <Protected exact path="/create" component={RestaurantCreate} />
            <Protected exact path="/list" component={RestaurantList} />
            <Protected exact path="/" component={Home} />
         </Router>


      </div>
   );
}

export default App;
