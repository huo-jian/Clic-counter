import React from 'react';


function Home({
  onIncrement,
  onDecrement,
  counter,
}) {
  return (
    <div>
      <button onClick={onIncrement}>
        Incrémenter
      </button>
      <button onClick={onDecrement}>
        Décrémenter
      </button>
      <div>
        Vous avez cliqué {counter} fois
      </div>
    </div>
  );
};

export default Home;
