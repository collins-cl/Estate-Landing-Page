import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/NavBar/Nav";
import Home from "./Pages/Home/Home";
import SearchResult from "./Pages/Search_Result/SearchResult";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result/:location/:type" element={<SearchResult />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
