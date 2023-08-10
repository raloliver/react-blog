/*
 * File: App.js
 * Project: react-blog
 * Created: Tuesday, May 3rd 2022, 3:27:15 pm
 * Last Modified: Thursday, August 10th 2023, 5:03:15 am
 * Copyright © 2022 AMDE Agência
 */

import {BrowserRouter as Router} from 'react-router-dom'

import Routes from 'Routes'
import Topbar from 'components/Topbar'
import {CurrentUserProvider} from 'contexts/currentUser'
import UserChecker from 'components/UserChecker'

function App() {
  return (
    <CurrentUserProvider>
      <UserChecker>
        <Router>
          <Topbar />
          <Routes />
        </Router>
      </UserChecker>
    </CurrentUserProvider>
  )
}

export default App
