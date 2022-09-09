import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingListTable from "../Basket/basketTable";
import "../app/App.css";
import {createTheme, ThemeProvider} from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50",
    },
    secondary: {
      main: "#FFAC1C",
    }
    },
  });

const Basket = () => {
    return (
    <div className="shoppingListTable">
    <ShoppingListTable/>
    <ThemeProvider theme={theme}>
      <Button 
          
          variant="contained" 
          size="large"
            sx={{
              m:1,
              backgroundColor: "#FFAC1C",
              color: {"primary" : "secondary"}}}
          component = {Link} to ="/checkout">Checkout</Button>
    </ThemeProvider>
    </div>
  )};
  
  export default Basket;