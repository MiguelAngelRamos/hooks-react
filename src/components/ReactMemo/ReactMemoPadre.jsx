import React from 'react'
import SinReactMemo from './SinReactMemo';

const ReactMemoPadre = () => {

  const [count, setCount] = useState(0);
  const [data] = useState('Algunos datos con mucha información');

  return (
    <>
    <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment Count</button>
    <p>{count}</p>
    <SinReactMemo data={data}/>
    </>
  )
}

export default ReactMemoPadre