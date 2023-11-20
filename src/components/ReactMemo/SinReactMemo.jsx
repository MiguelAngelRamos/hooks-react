const SinReactMemo = ({data}) => {
  console.log('Expensive Component Renderizado - Sin React Memo');
  return (
    <>
      <div>{data}</div>
    </>
  )
}

export default SinReactMemo