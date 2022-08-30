import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import './Item.css';


function Item({ product}) {
    return (
      <CardActionArea component="section" className="cardItems">
      <CardMedia
        component="img"
        width="50"
        height="220"
        image={product.imageUrl}
        alt="pulseras"
      />
      <CardContent>
        <Typography gutterBottom variant="p" component="p">
        {product.title}
        </Typography>
        <Typography gutterBottom variant="p" component="p">
        {product.price}
        </Typography>
        <Button className="item-count__add-btn" variant="outlined">
            Ver detalle del producto
          </Button>
      </CardContent>
    </CardActionArea>
    );
  }
  
  export default Item;