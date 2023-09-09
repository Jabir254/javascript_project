import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Menu } from "./pages/Menu";

function App() {
  return <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Menu />} />
        <Route path="/" element={<Contact />} />
      </Routes>
    </Router>

  </div>
}

export default App;