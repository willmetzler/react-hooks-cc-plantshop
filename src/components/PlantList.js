import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants}) {

  const mappedPlants = plants.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} plants={plants} setPlants={setPlants}/>
  })

  return (
    <ul className="cards">
      {mappedPlants}
    </ul>
  );
}

export default PlantList;
