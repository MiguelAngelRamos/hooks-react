import React from "react";

const ReactMemo = React.memo(({data}) => {
  console.log('Expensive Component Renderizado - Aplica REACT.MEMO');
  return (
    <>
    <div>{data}</div>
    </>
  )
});

export default ReactMemo