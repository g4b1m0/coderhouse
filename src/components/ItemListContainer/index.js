import "./ItemListContainer.css";

function ItemListContainer({ greetings }) {
  return (
    <div className="ItemListContainer">
      <p className="ItemListContainer_description">{greetings}</p>
    </div>
  );
}

export default ItemListContainer;
