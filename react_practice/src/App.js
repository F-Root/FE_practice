import { useState, useEffect, useContext, useReducer, useInsertionEffect } from 'react';

const App = () => {
  console.log(useState('Foori'));
  const [name, setName] = useState('Foori');
  const nameHandler = () => {
    setName((c) => 'HI' + Math.random() * 1000);
  };
  return (
    <div>
      <p>안녕하세요, 저는</p>
      <Name checked='true' name={name} />
      <input type='button' onClick={nameHandler}></input>
      <p>입니다</p>
    </div>
  );
};

//Name Component
const Name = (props) => {
  console.log(props);
  return (
    <div>
      <p>Foori</p>
    </div>
  );
};

export default App;
