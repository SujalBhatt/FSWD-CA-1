import React from 'react';
import './App.css';
import TeamMemberCard from "./components/TeamMemberCard";

const data = [
  { name: "Sujal", title: "Engineer" },
  { name: "Kailash", title: "Finance" }
];

function App() {
  return (
    <div className="app">
      <TeamMemberCard data={data} />
    </div>
  );
}

export default App;
