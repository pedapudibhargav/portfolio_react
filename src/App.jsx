import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import React, {useContext} from 'react';
import {ThemeContext} from './index';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import MySkills from './pages/MySkills';
import Experience from './pages/Experience';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <p>Theme:{useContext(ThemeContext)}</p>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about-me">About Me</Link>
          <Link to="/my-skills">My Skills</Link>
          <Link to="/experience">Experience</Link>
        </nav>
        <div>

        </div>
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/my-skills" element={<MySkills />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
