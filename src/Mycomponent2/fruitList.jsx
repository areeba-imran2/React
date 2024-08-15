import React from 'react';

const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

export function FruitList() {
  return (
    <div>
      {fruits.map((fruit, index) => (
        <div key={index}>{fruit}</div>
      ))}
    </div>
  );
}

export default FruitList;
