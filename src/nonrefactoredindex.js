import React from 'react';
import ReactDOM from 'react-dom';
// Step 1. Import react-router functions
import { BrowserRouter as Router, Route, Navlink } from 'react-router-dom';
// BrowserRouter is commonly renamed as Router; create an alias with the syntax BrowserRouter as Router

/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

/* add the navbar component */
const Navbar = () =>
  <div>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Login</NavLink>
  </div>;

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};
// step 3 add components for about/ login
const About = () => {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
// Step 2. Changed to have router coordinate what is displayed
// ReactDOM.render(
//   <Home />,
//   document.getElementById('root')
// );
ReactDOM.render((
  // remeber Router is alias for BrowserRouter
  <Router>
    {/* step 5 place all of the Route components into a <div> tag
    because A <Router> may have only one child element */}
    <div>
      {/* <Route path="/" component={Home} /> displays header no matter which route was hit */}
      {/* adding exact prevents it from alway rendering with every route */}
      <Route exact path="/" component={Home} />
      {/* The Route component is in charge of saying: "when the URL matches this specified path, render this specified component */}
      {/* step 4 aad about.login routes */}
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);
