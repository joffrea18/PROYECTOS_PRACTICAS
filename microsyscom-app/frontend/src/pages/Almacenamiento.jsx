import React from 'react';

function Almacenamiento() {
  return (
    <div className='almacenamiento'>
    <form action='post'
    className='form'>
    <h1>Almacenamiento</h1>
    <label
    for="tipo">
    Tipo
    </label>
    <input
      type="text"
      id='tipo'
      name="tipo"
      // onChange={handleInput}
      // value={inputValue.fabricante}
      placeholder='Tipo'/>
    </form>
    </div>
  );
}

export default Almacenamiento;
