import React, { Component } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import './App.scss';
import About from './About/About';
import Cars from './Cars/Cars';
import Contacts from './Contacts/Contacts';
import CarDetail from './Cars/CarDetail/CarDetail';

class App extends Component {
  render() {
    return (
      <div>
        <nav className='nav'>
          <ul>
            <li>
              <NavLink to='/' exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: '/about',
                  search: '?sd',
                  hash: '#d',
                }}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/cars'>Cars</NavLink>
            </li>
            <li>
              <NavLink to='/contacts'>Contacts</NavLink>
            </li>
          </ul>
        </nav>

        <hr />

        <Switch>
          <Route
            path='/'
            exact
            render={() => <h1 style={{ textAlign: 'center' }}>Home</h1>}
          />
          <Route path='/cars' component={Cars} />
          <Route path='/cars/:name' exact component={CarDetail} />
          <Route path='/about' render={About} />
          <Route path='/contacts'>
            <Contacts />
          </Route>
          {/* <Route render={() => <h1>404 Not Found </h1>} /> */}
          <Redirect to={'/'} />
        </Switch>
      </div>
    );
  }
}

export default App;
