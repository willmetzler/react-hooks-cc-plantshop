import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [originalPlants, setOriginalPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then((data) => {
      setPlants(data);
      setOriginalPlants(data);
    });
}, []);


  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants}/>
      <Search originalPlants={originalPlants} setPlants={setPlants} />
      <PlantList plants={plants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
