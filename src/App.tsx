import './App.css'
import { Menu} from './components/nav'
import { Intro } from './components/intro'
import { AboutMe } from './components/about'
import {Tech} from './components/tech'
import {Proyectos} from './components/proyects'

function App() {
  return (
    <>
      <Menu></Menu>
      <Intro></Intro>
      <AboutMe></AboutMe>
      <Tech></Tech>
      <Proyectos></Proyectos>
    </>
  )
}

export default App
