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
