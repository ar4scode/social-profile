import './App.css'
import Profile from './components/Profile'
import About from './components/About';
import Socials from './components/Socials';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  

  return (
    <div className='m-4 rounded-2xl shadow-md shadow-[#CFCFEA]'>
      <Profile />
      <About />
      <Socials />
      <Skills />
      <Projects />
    </div>
  )
}

export default App;
