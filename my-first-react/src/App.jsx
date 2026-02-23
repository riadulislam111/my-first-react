
import './App.css'

function App() {
  

  return (
    <>
      
      <h1>React Core Concepts</h1>
      <Student></Student>
      <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name= "Mozumder" tech= "JS"></Developer>
      <Developer name= "Rajon" tech= "python"></Developer>
      <Developer name= "Shabana" tech= "Java"></Developer>
     <Data name = 'mobile' brand= 'apple'></Data>
     <Player name= "Tamim" runs= '5000'></Player>
     <Player name="Mushi" runs= "3000"></Player>
     <Salami event= "Roja Eid" amount= '499'></Salami>
     <Salami event="Graduation"></Salami>
    </>
  )
}

function Salami({event, amount=0}) {
  return(
    <div className='student'>
      <p>Salami For: {event}</p>
      <p>Amount: {amount}</p>
    </div>
  )
}

function Developer(props) {
  console.log(props)
  return(
    <div style={{
     border: '2px solid green',
     borderRadius: '20px'
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}

function Student() {
  return (
    <div className='student'>
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  )
}


// const {name, runs} = {name: "tamim", runs: '5000'}
function Player ({name, runs}) {
  return(
    <div className='student'>
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  )
}
function Person() {
  const age = 17;
  const name = 'Jolil';

  const personStyle = {
    color: 'red',
    textAlign: 'right',
  }
  return (
    <p style={personStyle}>I am a person: {name} {age}</p>
    
  )
}

function Data(dat) {
  const dataStyle = {
    color: 'blue',
    borderRadius: '4px',
    backgroundColor: 'lightblue',
    padding: '5px'
  
  }
  return(
    <div style={dataStyle}>
      <ul>
        <li className='text'>Information: {dat.name} {dat.brand}</li>
        <li>Information: {dat.name} {dat.brand}</li>
        <li className='text'>Information: {dat.name} {dat.brand}</li>
        <li>Information: {dat.name} {dat.brand}</li>
        
      </ul>
    </div>
  )
}
export default App
