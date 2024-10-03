import './App.css'
import { Menu} from './components/nav'
import { Intro } from './components/intro'
import { AboutMe } from './components/about'
import {Tech} from './components/tech'

function App() {
  return (
    <>
      <Menu></Menu>
      <Intro></Intro>
      <AboutMe></AboutMe>
      <Tech></Tech>
    </>
  )
}

export default App
