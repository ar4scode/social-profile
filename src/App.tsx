import './App.css'
import Profile from './components/Profile'
import About from './components/About';
import Socials from './components/Socials';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import ScrollButton from './components/ScrollButton';

function App() {
  
  return (
    <>
      <div>
        <Navbar />
        <ScrollButton />
      </div>
      <div className="md:mx-auto m-4 md:max-w-2/4 rounded-2xl shadow-md bg-[#26282c]/60 backdrop-blur-md">
        <Profile />
        <About />
        <Socials />
        <Skills />
        <Projects />
      </div>
    </>

  )
}

export default App;
