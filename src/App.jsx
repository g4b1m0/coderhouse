import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import NavigationMenu from '../src/components/NavigationMenu';
import ItemCount from './components/ItemCount';
import './App.css';


const App = () => {
  return (
    <main className="main_content">
        <NavBar/>
        <NavigationMenu />
        <ItemListContainer greetings={"Todos nuestros accesorios estan completamente elaborados a mano, con diseños y colores exclusivamente para ti"}/>
        <div className='count_container'>
        <ItemCount stock={5} initial={1} />
        <ItemCount stock={5} initial={1} />
        <ItemCount stock={5} initial={1} />
        </div>
    </main>
  )
}

export default App