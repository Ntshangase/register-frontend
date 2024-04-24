import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Information from '../Model/Information';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/Information" component={Information} />
      </Routes>
    </Router>
  );
}

export default App;
