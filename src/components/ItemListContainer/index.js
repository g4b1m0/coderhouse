import "./ItemListContainer.css";
import ItemList from '../ItemList';


function ItemListContainer({ greetings }) {
  return (
    <div className="ItemListContainer">
      <p className="ItemListContainer_description">{greetings}</p>
        <ItemList />
    </div>
  );
}

export default ItemListContainer;
