import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Info from './components/Info';
import Main from './components/Main';
import PageSamohvalov from './components/PageSamohvalov';
import Romanian from './Romanian/Romanian'
import English from '../src/English/English'
import PageSamohvalovEng from '../src/English/PageSamohvalovEng'
import PageSamohvalovRo from '../src/Romanian/PageSamohvalovRo'

function App() {
  
 
  return (
    <div className="wrapper">
      
    

      <Switch>
        <Route exact path="/" component={() => (
          <>
            <Header />
            <Info />
            <Main />
            <Footer />
          </>
        )} />
        <Route path="/about" component={PageSamohvalov} />
      </Switch>
      
      <Switch>
        <Route path="/romania" component={Romanian} />
      </Switch>

      <Switch>
        <Route path='/english' component={English}/>
      </Switch>
      
      <Switch>
        <Route path='/aboutEng' component={PageSamohvalovEng}/>
      </Switch>
      <Switch>
        <Route path='/aboutRo' component={PageSamohvalovRo}/>
      </Switch>
    </div>
  );
}

// Wrap the `App` component in `Router` for it to work with `useLocation`
function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default WrappedApp;
