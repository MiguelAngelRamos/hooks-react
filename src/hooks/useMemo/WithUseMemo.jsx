import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios';
//* Funcional Component

const WithUseMemo = () => {

  const [count, setCount] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  console.log('*** ME ESTOY RENDERIZANDO ***');
  console.log(characters);
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
  const filterCharacters = useMemo(() => {
    console.log('Ejecutandose el use Memo');
    return characters.filter(character => 
      character.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [characters, searchTerm]);
  
  return (
    <div>

      <input 
        type="text"
        placeholder="Buscar Personaje"
        value={searchTerm}
        onChange={ e => setSearchTerm(e.target.value)}
      />

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

export default WithUseMemo