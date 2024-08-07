import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  function handleCategoryChange(event) {
  setSelectedCategory(event.target.value);
  }

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && search.length === 0) return true;
    else if (search.length === 0 && selectedCategory === item.category) {
      return true;
    } else if (
      search.length !== 0 &&
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory === item.category || selectedCategory === "All")
    ) {
      return true;
    }
  });

  return (
    <div className="ShoppingList">
       <ItemForm onItemFormSubmit = {onItemFormSubmit}/>
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearch}
        search={search}
      />    
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
