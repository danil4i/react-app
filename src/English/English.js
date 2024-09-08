import React from 'react'
import HeaderEng from './HeaderEng'
import InfoEng from './InfoEng'
import Main from '../components/Main'
import Footer from '../components/Footer'
import PageSamohvalovEng from './PageSamohvalovEng'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'


export default function English() {
  return (
    <div>
        <HeaderEng />
        <InfoEng />
        <Main />
        <Footer />
        
        <Switch>
          <Route path='/aboutEng' component={PageSamohvalovEng} />
        </Switch>
    </div>
  )
}
