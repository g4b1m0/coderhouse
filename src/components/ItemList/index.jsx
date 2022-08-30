import { React, useState, useEffect } from "react";
import Item from "./../Item";
import './ItemList.css';


const productos = [
  {
    id: "PulserasLove",
    title: "Set x5 Pulseras Love",
    price: "$35.000",
    imageUrl: "/pulseras.jpeg",
  },
  {
    id: "PulserasLetras",
    title: "Set x3 Pulseras con iniciales",
    price: "$20.000",
    imageUrl: "/set_x3_iniciales.jpeg",
  },
  {
    id: "PulserasCorazon",
    title: "Set x3 Pulseras Corazon",
    price: "$25.000",
    imageUrl: "/set_x3_corazon .jpeg",
  },
];
function getFakeRequest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
}
const ItemList = () => {
  const [productos, setProductos] = useState();

  useEffect(() => {
    getFakeRequest().then((products) => {
      setProductos(products);
    });
  }, []);

  return (
    <div className="item-list__container">
      {productos?.map((product) => (
        <Item key={product.id} product={product}  />
      ))}
    </div>
  );
};

export default ItemList;
