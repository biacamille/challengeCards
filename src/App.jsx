import { useEffect } from 'react'
import './App.css'

function App() {
   
  useEffect(() =>{
   fetch('https://api-staging.vagalumewifi.com.br/api/tests/apiTeste')
   .then(response => response.json())
   .then(data => {
       console.log(data);
   })
  }, [])
  return (
  <div id="cards">
   <div className="card">
       <h1>Pessoas Totais</h1>
      <p>500</p>	
    </div>
    <div className="card">
      <h1>Pessoas Online</h1>
      <p> 30</p>	
    </div>
    <div className="card">
      <h1>Pessoas Offline</h1>
      <p>300 </p>
    </div>
      <div className="card">
        <h1>Pessoas Conectadas no período: </h1>
        <p>50</p>

      </div>
    </div>


)
}

export default App
