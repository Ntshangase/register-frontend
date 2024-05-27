import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Information from '../Model/Information';
import Home from './Home';
import Record from "./Record";
import Manage from "./Manage";
import Students from "./Students";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Information" element={<Information/>} />
        <Route path="/Record" element={<Record/>} />
        <Route path="/Manage" element={<Manage/>} />
        <Route path="/Students" element={<Students/>} />
      </Routes>
    </Router>
  );
}

export default App;
