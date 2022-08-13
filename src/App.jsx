import { useEffect } from 'react'
import './App.css'

function App() {
   
  useEffect(() =>{
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
       
       let user_id
       const clientInTheDate = conectionInTheDate.filter(item =>{
         if(item.client_id === 'vagalume' && item.user_id !== user_id){
           user_id = item.user_id
           return item
          }
        })
        console.log(clientInTheDate)

    //      return clientInTheDate
    //    }
    //       console.log(client_id)
     
  //   });
    })
       

  },[])
  
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
