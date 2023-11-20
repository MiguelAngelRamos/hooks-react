import React, { useEffect, useState } from 'react'
import axios from 'axios';
//* Funcional Component

const NotUseMemo = () => {

  const [count, setCount] = useState(0);
  const [characters, setCharacters] = useState([]);

  console.log('*** ME ESTOY RENDERIZANDO ***');
  const handleAdd = () => {
    setCount(count + 1);
  }

  useEffect(()=> {
    console.log('*** SOY EL UseEffect ***');
    axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
          setCharacters(response.data.results);
        })
  },[])

  //* Funcion que tiene un costo
  const filterCharacters = characters.filter(character => {
    console.log('Se ejecuta la operacion de filtrado - por no usar el UseMemo');
    return character.name.toLowerCase();
  })

  return (
    <div>
      <h1>Sumando: {count}</h1>
      <button onClick={handleAdd}>+1</button>

      <ul>
        {filterCharacters.map(character => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default NotUseMemo