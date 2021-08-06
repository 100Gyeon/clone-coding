import React from 'react';

function Food({ fav }) {
  return <h1>I like {fav}.</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="hamburger" />
    </div>
  );
}

export default App;
