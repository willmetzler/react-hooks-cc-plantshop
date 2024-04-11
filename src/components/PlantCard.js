import React, {useState} from "react";

function PlantCard({plant, plants, setPlants}) {

  const [stock, setStock] = useState(true)

  function handleDelete() {

    const filteredPlants = plants.filter( p => p.id !== plant.id)
    setPlants(filteredPlants)

    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: 'DELETE'
    })
  }


  function handleClick() {
    setStock(!stock)
  }


  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {stock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      &nbsp;&nbsp;
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
