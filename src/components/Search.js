import React from "react";

function Search({originalPlants, setPlants}) {

  function handleChange(event) {
    const searchValue = event.target.value.toLowerCase();
    if (searchValue === "") {
      setPlants(originalPlants);
    } else {
      const filteredPlants = originalPlants.filter((plant) =>
        plant.name.toLowerCase().includes(searchValue)
      );
      setPlants(filteredPlants);
    }
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
