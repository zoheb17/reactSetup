import { useState } from 'react'

import './App.css'

function App() {
  const [age, setage] = useState(20)
  const fullName = "sayyed zoheb"
  const [hobbies, sethobbies] = useState(["football", "kite"])

  function increaseage() {
    setage(age + 1);
  }

  function decreaseage() {
    setage(age - 1);
  }

  return (
    <>
      <h1>My Details</h1>
      <p>FullName:{fullName}</p>
      <p>Age:{age}</p>
      {/* <p>status:{age >= 22 ? "happy birthday zoheb darling" :""}</p>  */}
      {age === 22 && <p>happy birthaday zoheb</p>}

      {
        hobbies.map((x, i) => (
          <p key={i}> My hobbies:{x}</p>
        ))
      }
      <button
        onClick={increaseage}
        className='bg-blue-500 text-white p-2 m-2 rounded-2xl'>


        increase age

      </button>

      <button
        onClick={decreaseage}
        className='bg-red-500 text-white p-2 m-2 rounded-2xl'>


        decrease age

      </button>
    </>
  )
}

export default App
