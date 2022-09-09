import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "../Checkout/AddressForm";
import Review from "../Checkout/Review";
import { useShoppingBasketContext } from "../Basket/shoppingbasket.context";

const steps = ["Collection address", "Review your order"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme({
  palette: {
    primary: { main: "#2e8540" },
    secondary: { main: "#808080" },
    error: { main: "#FFAC1C" },
  },
});

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { setItems, items } = useShoppingBasketContext();

  const shoppingBasketQuantity = {};
  for (const element of items) {
    if (shoppingBasketQuantity[element]) {
      shoppingBasketQuantity[element] += 1;
    } else {
      shoppingBasketQuantity[element] = 1;
    }
  }
  const shoppingBasketTidy = Object.entries(shoppingBasketQuantity);
  
  async function updateStockFromCheckout(index) {
    console.log("I updateStockFromCheckout");
    console.log(
      "This is shoppingBasketTidy[0][1]: " + shoppingBasketTidy[0][1]
    );
    await fetch("https://greenbskt.herokuapp.com/checkout", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        item_name: shoppingBasketTidy[index][0],
        quantity: shoppingBasketTidy[index][1],
      }),
    });
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1)
    if (activeStep === steps.length - 1) {
     shoppingBasketTidy.map( (element,index) => updateStockFromCheckout(index) )
     setItems([]);
    } else console.log("no submit");
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      ></AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #
                  {Math.floor(Math.random() * (1000 - 100) + 100)}. We have
                  emailed your order confirmation, we will be with you with your order soon!
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
