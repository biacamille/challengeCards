import { useEffect , useState } from 'react'
import './App.css'

function App() {
  const[clientDate, setClientDate] = useState([]);
  const[totalClient, setTotalClient] = useState([]);
  const[isShowingResult, setIsShowingResult] = useState(false);

  useEffect(() =>{

  fetch('https://api-staging.vagalumewifi.com.br/api/tests/infoTeste')
  .then(response => response.json())
  .then(data => {
    setTotalClient(data)
  })
    
   fetch('https://api-staging.vagalumewifi.com.br/api/tests/apiTeste')
   .then(response => response.json())
   .then(data => {

      const conectionInTheDate = data.connected.filter(item => {

        let date = item.last_connection.split("/");

        const startDate = new Date('07/31/2022').getTime();
        const finishedDate = new Date('08/09/2022').getTime();
        const connectionDate = new Date([ date[1], date[0], date[2] ].join('/')).getTime();
      
      if(finishedDate > connectionDate && connectionDate > startDate){
        return item
       }})
       
       let user_id = [];
       const clientInTheDate = conectionInTheDate.filter(item =>{
         if(item.client_id === 'vagalume' && !user_id.includes(item.user_id)){
           user_id.push(item.user_id)
           return item
          }
        })
        setClientDate(clientInTheDate)
      })
       

  },[])
 
function handleShowingTheCards(){
  setIsShowingResult(!isShowingResult);
}
  return (

  <div id="cards">
     {isShowingResult && (
      <>
      <div className="card">
        <h1>Pessoas Totais</h1>
        <p>{totalClient.total}</p>	
    </div>

    <div className="card">
      <h1>Pessoas Online</h1>
      <p>{totalClient.online}</p>	
    </div>

    <div className="card">
      <h1>Pessoas Offline</h1>
      <p>{totalClient.total - totalClient.online}</p>
    </div>

      <div className="card">
        <h1>Pessoas Conectadas no período</h1>
        <p>{clientDate.length}</p>
      </div>
      </>
    )}
      <div>
        <button className="button" onClick={handleShowingTheCards}>
          {isShowingResult ? 'Fechar Cards' : 'Abrir Cards'}
          </button>
      </div>
    
      </div>

)
}

export default App
