import React, { useContext } from 'react';
import { Context } from '../context';

const RandomFood = () => {
  const { loading, randomFood } = useContext(Context);

  return (
    <div>
      {loading ? 'Loading'
        : randomFood.map((item) => item)}

    </div>
  );
};

export default RandomFood;
