import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactForm from './ContactForm';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={ContactForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;



