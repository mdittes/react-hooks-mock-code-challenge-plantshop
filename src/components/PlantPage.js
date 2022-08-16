import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then((allPlants) => {
      setPlants(allPlants)
    })
  }, []);

  const displayPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  }) 

  function handleAddPlant(newPlant) {
    const updatedPlants = [...plants, newPlant]
    setPlants(updatedPlants)
  }

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={displayPlants}/>
    </main>
  );
}

export default PlantPage;
