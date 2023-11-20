import { useState } from 'react';
import SinReactMemo from './SinReactMemo';
import ReactMemo from './ReactMemo';

const ReactMemoPadre = () => {

  const [count, setCount] = useState(0);
  const [data] = useState('Algunos datos con mucha información');

  return (
    <>
    <p>REACT MEMO PADRE</p>
    <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment Count</button>
    <p>{count}</p>
    {/* <SinReactMemo data={data}/> */}

    <ReactMemo data={data}/>
 
    </>
  )
}

export default ReactMemoPadre