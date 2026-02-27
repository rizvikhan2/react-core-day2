import Counter from './counter'
import Batsman from './Batsman'
import Users from './Users'
import './App.css'
import { Suspense } from 'react'



const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

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
      {/* for fetch start & it use in users file */}
     <Suspense fallback={<h3>waiting for message...</h3>}>
       <Users fetchUsers={fetchUsers}></Users>
     </Suspense>
     {/* for fetch end */}

      <Counter></Counter>
      <Batsman></Batsman>
      <button onClick={clickHandle}> Click</button>
      <button onClick={clickHandle2}> Click2</button>
      <button onClick={()=>addNumHandle(5)}> Click3</button>
      
    </>
  )
}

export default App
