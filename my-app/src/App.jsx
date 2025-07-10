import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Intro1 from './components/Intro1'
import DisplayData from './components/Displaydata'
import UseState  from './components/UseState'
import Cart from './components/Cart'
function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <DisplayData /> 
      {/* <UseState /> */}
      {/* <Intro1 name = "Siva"/> */}
      {/* <Cart /> */}
    </div>
  );
    
}

export default App