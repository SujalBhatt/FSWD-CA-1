import { useState } from 'react'

import './App.css'
import TeamMemberCard from "./components/TeamMemberCard"
const data = [{name: "Sujal", title: "Engineer"}, {name: "Kailash", title: "Finance"}]
function App() {
  return (
    <>
      <TeamMemberCard data = {data}/>
    </>
  )
}

export default App
