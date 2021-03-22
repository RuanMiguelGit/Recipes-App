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
