import './App.css'
import Header from './header'
import Home from './home'
import About from './about'
import Skills from './skills'
import Skillset from './it-skillset'
import Projects from './projects'
import Contact from './contact'
import ScrollButton from './ScrollButton'
function App() {
    return (
    <>
    <div className='container'>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Skillset></Skillset>
      <Projects></Projects>
      <Contact></Contact>
      <ScrollButton></ScrollButton>
    </div> 
    </>
  )
}
export default App
