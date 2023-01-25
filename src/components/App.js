import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
