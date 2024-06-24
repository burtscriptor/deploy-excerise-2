import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [users, setUsers] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    
    
     
      fetch(("/api")).then(
        response => response.json()
      ).then
      (data => { setUsers(data)
        console.log(data)

      }
    )
   
    
  }, [])

  return (
    <div className="App">
      <h1>Hey</h1>
      {users ? users.users.map((user, index) => (
          <p key={index}>{user}</p>
      ))
        
    : (
      'no users'
    )}
    </div>
  );
}

export default App;
