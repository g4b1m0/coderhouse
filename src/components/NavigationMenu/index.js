import "./NavigationMenu.css";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

function NavigationMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="NavContent">
      <nav className="NavigationMenu">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          categorias
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Pulseras</MenuItem>
          <MenuItem onClick={handleClose}>Anillos</MenuItem>
          <MenuItem onClick={handleClose}>Collares</MenuItem>
        </Menu>
        <Link variant="button" href="#" sx={{ my: 1, mx: 1.5 }}>
          Tiendas
        </Link>
        <Link variant="button" href="#" sx={{ my: 1, mx: 1.5 }}>
          Conocenos
        </Link>
        <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Acceso
        </Button>
      </nav>
    </div>
  );
}

export default NavigationMenu;
