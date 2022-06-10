import React, { FC, useState } from 'react';

const Playground: FC = () => {
  const [name, setName] = useState('');

  console.count();

  function handleNameChange(evt: any) {
    setName(evt.target.value);
  }

  return (
    <div>
      <div>{name}</div>
      <input type='text' onInput={handleNameChange} />
    </div>
  );
};

export { Playground };
