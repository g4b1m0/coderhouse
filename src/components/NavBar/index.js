import "./Navbar.css";
import ShoppingCart from '../ShoppingCart'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


function Navbar() {
  return (
    <div className="App">
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Rose
          </Typography>
          <ShoppingCart/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
