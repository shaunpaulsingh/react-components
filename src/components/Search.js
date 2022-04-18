// src/components/Search.js

import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        person
        .email
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredPersons={filteredPersons} />
      </Scroll>
    );
  }

  return (
    <div className='third left'>
        <h1>Search Component</h1>
        <section>
        <div className="navy georgia ma0 grow card">
            <h2 className="f2">Search here</h2>
        
        <div className="pa2">
            <input 
            className="input_form"
            type = "search" 
            placeholder = "Search here" 
            onChange = {handleChange}
            />
        </div>
        {searchList()}
        <div className='clearall'></div>
        </div>
        </section>
    </div>
    
  );
}

export default Search;