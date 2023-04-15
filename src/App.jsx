import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/NavBar/Nav";
import Home from "./Pages/Home/Home";
import SearchResult from "./Pages/Search_Result/SearchResult";
import Construction from "./Pages/Construction/Construction";
import LoginPage from "./Pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {[
            "/buying",
            "/selling",
            "/renting",
            "/aboutus",
            "/services",
            "/contact",
          ].map((path) => (
            <Route key={path} exact path={path} element={<Construction />} />
          ))}
          <Route path="/result/:location/:type" element={<SearchResult />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
