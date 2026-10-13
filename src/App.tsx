import { useState } from 'react'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Willkommen</h1>
      <div className='cardcontainer'>
        <div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div>

        </div>

      </div >
    </>
  )
}

export default App
