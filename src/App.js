import AboutMe from "./components/aboutMe";
import MyTown from "./components/myTown";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Route exact path='/' component={AboutMe} />
        <Route path='/town' component={MyTown} />
    </Router>
  );
}

export default App;
