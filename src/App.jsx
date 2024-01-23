import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(0); 

  useEffect(() => {
    const url = 'https://randomuser.me/api/';
    axios.get(url)
      .then(res => setUser(res.data.results[0]))
      .catch(err => {
        console.error('Error al obtener datos del API:', err);
        setUser(null);
      });
  }, []);

  return (
    <div>
      <h1>Consumiendo API's </h1>
      {user ? (
        <div>
          <h2>{user.name.first} {user.name.last}</h2>
          <p>Email: {user.email}</p>
          <p>Telefono: {user.phone}</p>
        </div>
      ) : (
        <p>Cargando datos del usuario...</p>
      )}
    </div>
  );
}

export default App;
