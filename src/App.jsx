import { useState } from 'react'
import Collections from './pages/Collections'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="text-3xl font-bold text-blue-500">
      ¡Hello Mousiteca!
    </div>
    <div className="text-l">
      <Collections />
    </div>
    </>
  )
}

export default App
