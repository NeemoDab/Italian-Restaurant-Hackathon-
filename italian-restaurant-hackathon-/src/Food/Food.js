import { CardActionArea } from "@mui/material";
import { useState, useEffect } from "react";

const Food = () => {
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
          <CardActionArea>
            <img src={food.image} alt="food" />
            {food.title}
          </CardActionArea>
        ))}
    </div>
  );
};
export default Food;
