import React from 'react';

function List(props) {
  const written = props.written;
  const listWrites = written.map((write, index) => <li key={index}>{write}</li>);

  return (
    <>
      <ol>{listWrites}</ol>
    </>
  );
}

export default List;
