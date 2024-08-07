import React, { useState } from 'react';
import './SearchFilter.css'; // Import CSS file for styling

const SearchFilter = () => {
  // Step 1: Declare React state for search input value
  const [searchTerm, setSearchTerm] = useState('');
  const items = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango'];

  // Step 2: Create HTML input text for entering search term and update state in onChange function
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Step 3: Add array.filter() on list of items with search term value
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className="list">
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
