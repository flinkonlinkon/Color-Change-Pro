import { useState } from "react"


function App() {
  
  //  const [color, setAuco] = useState("#212121")
  let mco = Math.floor(Math.random()*1000000)
   let dmco = `#${mco}`  
// console.log(dmco);
const [auco, setAuco] = useState("#212121")

   


  return (
    <div className="w-full h-screen" style={{backgroundColor: auco}}>
      
      <button className="bg-lime-200 rounded-xl px-4 py-1 relative top-[143px] left-[686px] " onClick={()=> {
        setInterval(() => {
          setAuco(dmco)
          // console.log(dmco);
          
          
        }, 3000);
      }}>Auto color</button>
      <div className="bottom-[-20px] relative">
      
      <div className="flex flex-wrap w-11/12 rounded-full  justify-evenly">
          <button onClick={() => setAuco("red")} className="bg-red-500 rounded-xl px-4 py-1">red</button>
          <button onClick={()=> setAuco("gray")} className="bg-gray-500 rounded-xl px-4 py-1">gray</button>
          <button onClick={()=> setAuco("slate")} className="bg-slate-500 rounded-xl px-4 py-1">slate</button>
          <button onClick={()=> setAuco("yellow")} className="bg-yellow-500 rounded-xl px-4 py-1">yellow</button>
          <button onClick={()=> setAuco("green")} className="bg-green-300 rounded-xl px-4 py-1">green</button>
          <button onClick={()=> setAuco("zinc")} className="bg-zinc-500 rounded-xl px-4 py-1">zinc</button>
          <button onClick={()=> setAuco("orange")} className="bg-orange-500 rounded-xl px-4 py-1">orange</button>
          <button onClick={()=> setAuco("blue")} className="bg-blue-400 rounded-xl px-4 py-1">blue</button>
      </div>
      </div>
    </div>
      
  )
}

export default App
