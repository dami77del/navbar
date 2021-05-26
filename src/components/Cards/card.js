import React from 'react';


const Card = () => {
  const task = fetch("https://pokeapi.co/api/v2/");
task
.then((response) => {
  if (response.json !== 200) throw new Error("El fetch no esta funcionando")
    return response.json();
  })
  .then((data =>{
    console.log(data);
  })
  .catch((err => {
    console.log(err);
  });

  return (
    <>
    </>)
}

export default Card;