import React from 'react';
import List from './list';
import Write from './write';

//Write로 작성 후 List에 띄워주는 방식으로 구현하려 함
//List는 Todo 목록
//Write는 input box와 button
const Section = () => {
  return (
    <>
      <h1>My Todo List</h1>
      <List />
      <Write />
    </>
  );
};

export default Section;
