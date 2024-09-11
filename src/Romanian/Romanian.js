import React from 'react'
import HeaderRom from './HeaderRom'
import InfoRom from './InfoRom'
import Footer from '../components/Footer'
import Main from '../components/Main'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import English from '../English/English'
import VideoPlayer from '../Video'

export default function Romanian() {
  return (
    <romanian>
        <div>
        <HeaderRom />
            <InfoRom />
            <VideoPlayer />
            <Main />
            <Footer />

          <Switch>
            <Route path='/english' component={English}/>
          </Switch>
        </div>
    </romanian>
  )
}
