import React, {useState} from "react";

function PlantCard( {plant} ) {
  const {id, name, image, price} = plant
  const [isInStock, setIsInStock] = useState(true)

  function handleInStock() {
    //console.log('clicked')
    setIsInStock((isInStock) => !isInStock)
  }

  return (
    <li className="card" id={id} >
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick={handleInStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleInStock} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
