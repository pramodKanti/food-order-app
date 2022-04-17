import React, { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealsItem from "./MealsItem";
import LoadingIndicator from "../UI/LoadingIndicator";
import ErrorModal from "../UI/ErrorModal";

const AvailableMeals = () => {
  const [meal, setMeaL] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://meals-item-ed275-default-rtdb.firebaseio.com/mealData.json",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        let mealArr;
        for (const key in data) {
          mealArr = data[key];
        }
        //  console.log(mealArr)
        setIsLoading(false);
        setMeaL(mealArr);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsLoading(false);
        setHasError(true);
      });
  }, []);
  console.log("avalable meals ");

  const mealItem = meal.map((meal) => {
    return (
      <MealsItem
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        id={meal.id}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <LoadingIndicator />}
        {!isLoading && <ul>{mealItem}</ul>}
        {!isLoading && hasError && (
          <ErrorModal heading={"Somthing Went Wrong"} message={ErrorMessage} />
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;
