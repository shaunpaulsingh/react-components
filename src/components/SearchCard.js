

import React from 'react';

function SearchCard({person}) {
  return(
    <div className="card">
      <img className="search_img" alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
      <div className='search_box'>
        <p className='search_title'>{person.name}</p>
        <p className='search_desc'>{person.email}</p>
      </div>
    </div>
  );
}

export default SearchCard;