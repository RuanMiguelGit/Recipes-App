/* eslint-disable no-alert */
import { useEffect } from 'react';

const useVerifyNoOrSingleDish = (data, dishType, history) => {
  useEffect(() => {
    if (data[dishType] && data[dishType].length === 1) {
      const dishPath = dishType === 'meals' ? 'comidas' : 'bebidas';
      const id = dishType === 'meals' ? data.meals[0].idMeal
        : data.drinks[0].idDrink;

      history.push(`/${dishPath}/${id}`);
    }
    if (data[dishType] === null) {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  }, [data, history, dishType]);
};

export default useVerifyNoOrSingleDish;
