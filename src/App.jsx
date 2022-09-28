import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import MySkills from './pages/MySkills';
import Experience from './pages/Experience';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore non numquam unde nesciunt quasi tempora adipisci minima blanditiis natus optio?</h2>
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
