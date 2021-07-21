import React, { useState } from 'react';

function GifSearch( {search} ) {

  const [searchText, setSearchText] = useState('');

  function handleChange(e){
    setSearchText(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    search(searchText);
    setSearchText('');
  }

  return (
    <form onSubmit={handleSubmit} >
      <input type='text'
             name='text' 
             onChange={handleChange} 
             value={searchText}
             placeholder='Search GIF in Here...' 
      ></input>
      <button type="submit">Search</button>
    </form>
  );
}

export default GifSearch;