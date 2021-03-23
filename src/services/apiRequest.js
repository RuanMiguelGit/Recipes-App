const getApiData = async (type, endPoint) => {
  const requestPattern = {
    food: {
      endPointPattern: 'https://www.themealdb.com/api/json/v1/1/',
      recipeKey: 'meals',
    },
    drink: {
      endPointPattern: 'https://www.thecocktaildb.com/api/json/v1/1/',
      recipeKey: 'drinks',
    },
  };

  const { endPointPattern, recipeKey } = requestPattern[type];

  return fetch(`${endPointPattern}${endPoint}`)
    .then((resp) => resp.json())
    .then((data) => data[recipeKey])
    .catch(console.log);
};

export default getApiData;
