//import { CardActionArea } from "@mui/material";
import CardSummary from "../Cards/CardSummary";
import { useState, useEffect } from "react";

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFoods();
  }, []);

  async function getFoods() {
    let responseFood = await fetch(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=1b8bef2a8ec94ca89660c4e18e2c4346&cuisine=italian"
    );
    let dataFoods = await responseFood.json();
    console.log(dataFoods.results);
    setFoods(dataFoods);
    setIsLoading(false);
  }

  return (
    <div>
      {!isLoading &&
        foods.results.map((food) => (
          <CardSummary
            image={food.image}
            price={6.44}
            inBasket={false}
            title={food.title}
          />
        ))}
    </div>
  );
};
export default FoodList;
