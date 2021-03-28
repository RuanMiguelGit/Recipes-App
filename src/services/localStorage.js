export const initializeLocalStorageTokens = () => {
  // Here is already created and commented the logic to check if those localStorage keys already exist
  // const storageMealsToken = localStorage.getItem('mealsToken');
  // const storageCocktailsToken = localStorage.getItem('cocktailsToken');
  // if (!storageMealsToken && !storageCocktailsToken) {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
  // }
};

export const saveUserEmailInLocalStorage = (email) => {
  const localStorageUser = JSON.stringify({ email });
  localStorage.setItem('user', localStorageUser);
};

export const getUserEmail = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.email) return user.email;
  return '';
};

export const getDoneRecipes = () => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (!doneRecipes) return [];
  return doneRecipes;
};

export const checkProgressRecipes = (type, id) => {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  let result = '';
  if (inProgressRecipes) {
    switch (type) {
    case 'food':
      result = Object.keys(inProgressRecipes.meals)
        .find((key) => key.toString() === id);
      break;
    case 'drink':
      result = Object.keys(inProgressRecipes.cocktails)
        .find((key) => key.toString() === id);
      break;
    default:
      result = '';
    }
  }
  return result;
};

export const checkDoneRecipes = (type, id) => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const result = doneRecipes
    ? doneRecipes
      .filter((mixedRecipe) => mixedRecipe.type === type)
      .find((recipe) => recipe.id.toString() === id)
    : '';
  return result;
};

export const checkFavoriteRecipes = (type, id) => {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const result = favoriteRecipes
    ? favoriteRecipes
      .filter((mixedRecipe) => mixedRecipe.type === type)
      .find((recipe) => recipe.id.toString() === id)
    : '';
  return result;
};

export const saveFavoriteRecipe = (recipe) => {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const newFavorite = recipe.idMeal
    ? {
      id: recipe.idMeal,
      type: 'comida',
      area: recipe.strArea,
      category: recipe.strCategory,
      alcoholicOrNot: '',
      name: recipe.strMeal,
      image: recipe.strMealThumb,
    }
    : {
      id: recipe.idDrink,
      type: 'bebida',
      area: '',
      category: recipe.strCategory,
      alcoholicOrNot: recipe.strAlcoholic,
      name: recipe.strDrink,
      image: recipe.strDrinkThumb,
    };
  if (favoriteRecipes) {
    favoriteRecipes.push(newFavorite);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  } else localStorage.setItem('favoriteRecipes', JSON.stringify([newFavorite]));
};

export const getFavoriteRecipes = () => {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (!favoriteRecipes) return [];
  return favoriteRecipes;
};

export const removeFavoritedRecipe = (id) => {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const result = favoriteRecipes.filter((recipe) => recipe.id !== id);
  localStorage.setItem('favoriteRecipes', JSON.stringify(result));
};
