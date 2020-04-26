import React, { useState, useEffect, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';
function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);

  const removeIngredientHandler = ingredientId => {
    const newUserIngredients = userIngredients.filter(ing => ing.id !== ingredientId);
    setUserIngredients(newUserIngredients);
  }

  // useEffect(() => {
  //   fetch('https://react-hooks-97ab7.firebaseio.com/ingredients.json')
  //     .then(response => response.json())
  //     .then(responseData => {
  //       const loadedIngredients = []
  //       for (const key in responseData) {
  //         loadedIngredients.push({
  //           id: key,
  //           title: responseData[key].title,
  //           amount: responseData[key].amount
  //         });
  //       }
  //       setUserIngredients(loadedIngredients);
  //     })

  // }, []);

  const filterdIngredientsHandler = useCallback(filteredIngredients => {
    setUserIngredients(filteredIngredients);
  }, [setUserIngredients]);

  const addIngredientHandler = ingredient => {
    fetch('https://react-hooks-97ab7.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      return response.json();
    }).then((responseData) => {
      setUserIngredients(
        (prevIngredients) => {
          return [...prevIngredients, {
            id: responseData.name,
            ...ingredient
          }];
        }
      )
    });


  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filterdIngredientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={(ingredientId) => {
          removeIngredientHandler(ingredientId);
        }} />
      </section>
    </div>
  );
}

export default Ingredients;
