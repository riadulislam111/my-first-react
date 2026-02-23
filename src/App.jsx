
import './App.css'
import ToDO from './Todo';

function App() {

const time = 50;
  return (
    <>
    
      <h1>Vite + React</h1>
      <ToDO task='Learn React' isDone={true} time={time}></ToDO>
      <ToDO task='Revise JS' isDone={false}></ToDO>
      <ToDO task='Take a shower' isDone={true}></ToDO>
     {/* <Person></Person>
     <Person></Person>
     <Sports></Sports>
     <Person></Person>
     <Sports></Sports>
     <Sports></Sports>
     <Pet></Pet>
     <Sports></Sports>

     <Fruits></Fruits> */}
    </>
  )
}


function Person () {
  const age = 39;
  const name = 'Joil'
  return(
    <p>I am a Person {age} {name}</p>
  )
}

function Pet () {
  return(
   <div>
    <h3>Pet</h3>
    <ul><li>pet animal</li></ul>
    <ul><li>pet animal</li></ul>
    <ul><li>pet animal</li></ul>
    <ul><li>pet animal</li></ul>
   </div>
    
  )
}

function Sports() {
  return(
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>Batman</li>
        <li>Batman</li>
        <li>Batman</li>
        <li>Batman</li>
      </ul>
      <ul>
        <ol><li>Football</li></ol>
        <ol><li>Football</li></ol>
        <ol><li>Football</li></ol>
      </ul>
      <p>Playing and losing</p>
    </div>
  )
}


function Fruits() {
  return(
    <div>
      <h3>Fruits</h3>
      <ul>
        <li>Apple</li>
        <li>Apple</li>
        <li>Apple</li>
        <li>Apple</li>
      </ul>
    </div>
  )
}
export default App
