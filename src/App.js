/*
 * File: App.js
 * Project: react-blog
 * Created: Tuesday, May 3rd 2022, 3:27:15 pm
 * Last Modified: Thursday, July 28th 2022, 2:04:42 pm
 * Copyright © 2022 AMDE Agência
 */

import {BrowserRouter as Router} from 'react-router-dom'

import Routes from 'Routes'
import Topbar from 'components/Topbar'

function App() {
  return (
    <Router>
      <Topbar />
      <Routes />
    </Router>
  )
}

export default App
