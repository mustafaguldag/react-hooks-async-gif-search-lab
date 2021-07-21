import React from 'react';

function GifList( { data } ) {
  
  return (
    <>
      <li><img src={data.images.original.url} /></li>
    </>
  );
}

export default GifList;