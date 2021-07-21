import React, { useEffect, useState } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(info => setData(info.data));
  }, [search]);
  
  const style={
    listStyle:"none"
  }
  return (
    <div>
      <GifSearch search={setSearch} />
      <ul style={style}> {data.slice(0, 3).map(gif => <GifList data={gif} />)} </ul>
    </div>
  );
}

export default GifListContainer;