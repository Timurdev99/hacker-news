import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HackerContainer from './hacker/hacker_container';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HackerContainer} />
      </Switch>
    </Router>
  );
}

export default App;
