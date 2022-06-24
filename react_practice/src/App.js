import { useState, useEffect, useContext, useReducer, useInsertionEffect } from 'react';

const App = () => {
  console.log(useState('Foori'));
  const [name, setName] = useState('Foori');
  return (
    <div>
      <p>안녕하세요, 저는</p>
      <Name checked='true' name={name} />
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
