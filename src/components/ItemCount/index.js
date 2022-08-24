import { useState } from "react";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import "./ItemCount.css";

const minTotalItems = 0;
function ItemCount({ stock, initial = 0, onAdd }) {
  const [count, setcount] = useState(initial);

  const increaseItem = () => {
    const result = count + 1;
    setcount(result);
    // onAdd(result);
  };

  const decreaseItem = () => {
    const result = count - 1;
    setcount(result);
    // onAdd(result);
  };
  return (
    <CardActionArea>
      <CardMedia
        component="img"
        width="50"
        height="220"
        image="/pulseras.jpeg"
        alt="pulseras"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pulseras Love
        </Typography>

        <div className="item-count">
          <Button
            className="item-count__decrease-btn"
            onClick={decreaseItem}
            disabled={count <= minTotalItems}
          >
            -
          </Button>
          <p className="item-count__counter"> {count} </p>
          <Button
            className="item-count__increase-btn"
            onClick={increaseItem}
            disabled={count >= stock}
          >
            +
          </Button>
          <Button className="item-count__add-btn" variant="outlined">
            Agregar al carrito
          </Button>
        </div>
      </CardContent>
    </CardActionArea>
  );
}

export default ItemCount;
