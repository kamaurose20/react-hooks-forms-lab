import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newItem,setNewItem] = useState({name:"",category:"Produce"})
  function handleNewItemsChange(event){
    const {name,value} = event.target
    setNewItem(newItem => ({...newItem,[name]:value}))
  }
  function handleSubmit(event){
    event.preventDefault()
    onItemFormSubmit({...newItem,id:uuid()})
  }


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newItem.name} onChange=
        {handleNewItemsChange} />
      </label>

      <label>
        Category:
        <select name="category" 
        value={newItem.category} onChange=
        {handleNewItemsChange}>
          
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
