import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useShoppingBasketContext } from "./shoppingbasket.context";
import { Button } from "@mui/material";

export default function ShoppingListTable() {
  const { items, setItems } = useShoppingBasketContext();

  const shoppingBasketQuantity = {};
  for (const element of items) {
    if (shoppingBasketQuantity[element]) {
      shoppingBasketQuantity[element] += 1;
    } else {
      shoppingBasketQuantity[element] = 1;
    }
  }

  const shoppingBasketTidy = Object.entries(shoppingBasketQuantity);

  function testDeleteButton(index) {
    const itemName = shoppingBasketTidy[index][0];
    const newItems = items;
    newItems.splice(items.indexOf(itemName), 1);
    setItems([...newItems]);
    console.log(items)
    shoppingBasketTidy[index][1] = shoppingBasketTidy[index][1] - 1;
  }

  console.log(shoppingBasketTidy);

  return (
    <>
      <TableContainer 
          component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Item</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shoppingBasketTidy.map((item, index) => (
              <TableRow
                key={item}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {item[0]}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {item[1]}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  <Button onClick={() => testDeleteButton(index)}>
                    X
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
