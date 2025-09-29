import './App.css'
import Profile from './components/Profile'
import About from './components/About';
import Socials from './components/Socials';
import Skills from './components/Skills';

function App() {
  

  return (
    <div className='m-4 rounded-2xl shadow-md shadow-[#CFCFEA]'>
      <Profile />
      <About />
      <Socials />
      <Skills />
    </div>
  )
}

export default App;
