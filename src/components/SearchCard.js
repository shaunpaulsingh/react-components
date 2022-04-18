

import React from 'react';

function SearchCard({person}) {
  return(
    <div className="card">
      <img className="card_img" alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
      <div>
        <h2>{person.name}</h2>
        <p>{person.email}</p>
      </div>
    </div>
  );
}

export default SearchCard;