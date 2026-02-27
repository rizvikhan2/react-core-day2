import Counter from './counter'
import Batsman from './Batsman'
import './App.css'

function App() {
  

  function clickHandle(){
    alert('click 1')
  }

  const clickHandle2 = () =>{
    alert('Click 2')
  }
  

  const addNumHandle =(num)=>{
    const num2 = num + 66
    alert(num2)
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      <Counter></Counter>
      <Batsman></Batsman>
      <button onClick={clickHandle}> Click</button>
      <button onClick={clickHandle2}> Click2</button>
      <button onClick={()=>addNumHandle(5)}> Click3</button>
      
    </>
  )
}

export default App
