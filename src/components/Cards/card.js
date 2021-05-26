import React from 'react';


const Card = () => {
 const task = fetch("https://api-dolar-argentina.herokuapp.com/api/dolaroficial")
 task.then(result =>{
   console.log(result)
  })

  return (
  <> 
  </>)
}

export default Card;