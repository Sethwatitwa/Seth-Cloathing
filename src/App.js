import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Products from './data/pages/home/Products'
import Heels from './data/pages/heels/Heels'
import Dresses from './data/pages/dresses/Dresses'
import Fashion from './data/pages/fashion/Fashion'
import Shoes from './data/pages/shoes/Shoes'
import Shorts from './data/pages/shorts/Shorts'

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Products />
        </Route>
        <Route path="/heels">
          <Heels />
        </Route>
        <Route path="/dresses">
          <Dresses />
        </Route>
        <Route path="/fashion">
          <Fashion />
        </Route>
        <Route path="/shoes">
          <Shoes />
        </Route>
        <Route path="/shorts">
          <Shorts />
        </Route>
      </Switch>
    </Router>
  )
}

export default App