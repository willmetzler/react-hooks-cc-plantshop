import React, {useState} from "react";

function NewPlantForm({setPlants, plants}) {

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: ''
  })

  function handleSubmit(event) {
    event.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify( formData )
    })
    .then(res => res.json())
    .then(newPlantObj => {
      setPlants(plants => [...plants, newPlantObj])
      setFormData({name:'', image:'', price:''})
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input value={formData.name} onChange={(event) => setFormData({...formData, name: event.target.value} )} type="text" name="name" placeholder="Plant name" />
        <input value={formData.image} onChange={(event) => setFormData({...formData, image: event.target.value} )} type="text" name="image" placeholder="Image URL" />
        <input value={formData.price} onChange={(event) => setFormData({...formData, price: event.target.value} )} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
