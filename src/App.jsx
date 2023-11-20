import { useState } from 'react'
import './App.css'
import NotUseMemo from './hooks/useMemo/NotUseMemo'
import WithUseMemo from './hooks/useMemo/WithUseMemo'
import ReactMemoPadre from './components/ReactMemo/ReactMemoPadre'

function App() {

  return (
    // <NotUseMemo/>
    // <WithUseMemo />
    <ReactMemoPadre/>
  )
}

export default App
