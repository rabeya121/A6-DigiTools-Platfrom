import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2 className='text-red-600 bg-black py-8 text-center font-bold text-3xl'>Hello Java</h2>
    <div className='p-10'>
      <button className='btn btn-primarynim'>Daisy Button</button>
    </div>
      
    </>
  )
}

export default App
