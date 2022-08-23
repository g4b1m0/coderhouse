import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import NavigationMenu from '../src/components/NavigationMenu';
import './App.css';


const App = () => {
  return (
    <div className="main_content">
        <NavBar/>
        <NavigationMenu />
        <ItemListContainer greetings={"Todos nuestros accesorios estan completamente elaborados a mano, con diseños y colores exclusivamente para ti"}/>
    </div>
  )
}

export default App