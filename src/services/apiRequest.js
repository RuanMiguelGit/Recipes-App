const getApiData = async (type, endPoint) => {
  const endPointPattern = {
    food: 'https://www.themealdb.com/api/json/v1/1/',
    drink: 'https://www.thecocktaildb.com/api/json/v1/1/',
  };

  return fetch(`${endPointPattern[type]}${endPoint}`)
    .then((resp) => resp.json())
    .catch(console.log);
};

export default getApiData;
