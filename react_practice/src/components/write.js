import React, { useState } from 'react';

const [write, setWrite] = useState('d');

function handleClick(e) {
  e.preventDefault();

  setWrite(() => e.target.value);
}

function Write() {
  return (
    <>
      <input defaultValue={'hello'} placeholder='Write Todo' />
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default Write;
