import Home from './component/pages/Home';
import Navbar from './component/navbar/Navbar';
import HomeProducts from './component/pages/HomeProducts';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ShowProducts from './component/showProduct/ShowProducts';
import AllPanier from './component/allPanier/AllPanier';
import Panier from './component/Panier/Panier';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Panier/>
        <Switch>        
          <Route exact path="/" component={Home}/>
          <Route exact path="/products" component={HomeProducts}/>
          <Route exact path="/products/:id" component={ShowProducts}/>
          <Route exact path="/panier" component={AllPanier}/>

          <Route/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
