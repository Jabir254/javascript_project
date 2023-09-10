import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Menu } from "./pages/Menu";
import { Navbar } from "./Navbar";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';

export const Appcontext = createContext();

function App() {
  const client = new QueryClient();

  const [username, setUsername] = useState("JabirTech");

  return <div className="App">
    <QueryClientProvider client={client}>
      <Appcontext.Provider value={{username, setUsername}}>
      <Router>
        < Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 page not found</h1>} />
        </Routes>
      </Router>
    </Appcontext.Provider>
    </QueryClientProvider>
    

  </div>
}

export default App;