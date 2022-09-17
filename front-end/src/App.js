import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
// PAGES
import Edit from "./Pages/Edit";
// import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import IndexPage from "./Pages/IndexPage";
import New from "./Pages/New";
import Show from "./Pages/Show";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
    <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/candles" element={<IndexPage />} />
            <Route path="/candles/new" element={<New />} />
            <Route exact path="/candles/:id" element={<Show />} />
            <Route path="/candles/:id/edit" element={<Edit />} />
            {/* <Route path="*" element={<FourOFour />} /> */}
          </Routes>
        </main>
      </Router>
     
    </div>
  );
}

export default App;
