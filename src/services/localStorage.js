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
  console.log(favoriteRecipes);
  const result = favoriteRecipes
    ? favoriteRecipes
      .filter((mixedRecipe) => mixedRecipe.type === type)
      .find((recipe) => recipe.id.toString() === id)
    : '';
  return result;
};
