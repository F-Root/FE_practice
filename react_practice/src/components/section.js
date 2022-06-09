import React from 'react';
import List from './list';
import Write from './write';

const Section = () => {
  return (
    <>
      <ol>
        <List name='Root' />
      </ol>
      <Write />
    </>
  );
};

export default Section;
