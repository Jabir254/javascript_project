import "./App.css";
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from "./pages/Home";

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