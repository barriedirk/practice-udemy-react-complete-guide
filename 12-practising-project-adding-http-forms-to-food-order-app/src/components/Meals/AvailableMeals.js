import { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

// we added to firebase
// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    // first Loaded
    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch(
                "https://react-http-9332d-default-rtdb.firebaseio.com/meals.json"
            );

            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const responseData = await response.json();
            const loadedMeals = [];

            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }

            setMeals(loadedMeals);
            setIsLoading(false);
        };

        // fetchMeals();

        // this not working
        // try {
        //     // need to add the await to manage the error
        //     // because fetchMeals is like a promise
        //     fetchMeals()
        // } catch (error) {
        //     setIsLoading(false);
        //     setHttpError(error.message);
        // }

        fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    const mealsList = meals.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    if (httpError) {
        return (
            <section className={classes["meals-error"]}>
                <p>{httpError}</p>
            </section>
        );
    }

    if (isLoading) {
        return (
            <section className={classes["meals-loading"]}>
                <p>Loading ...</p>
            </section>
        );
    }

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
