import { useState } from 'react'
import './App.css'
import { puppyList } from './data.js'



function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => {
    return pup.id === featPupId;})
  console.log(featuredPup);
  return (
    <>
    <div>
      {
        puppies.map((puppy) => {
          return <p onClick = {() => {setFeatPupId(puppy.id)}}key={puppy.id}>{puppy.name}</p>
        })
      }
      {featPupId && (
        <div>
          <h2>Name: {featuredPup.name}</h2>
          <h3>Age: {featuredPup.age}</h3>
          <h3>Contact: {featuredPup.email}</h3>
        </div>)}

    </div>
    </>
  )
}

export default App
