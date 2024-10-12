import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
function App() {
  const [colour, setcolour] = useState("brown")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:colour}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-slate-600 px-3 py-2 rounded-3xl'>
          <button 
          onClick={()=>setcolour("red")}
          className='outline-none px-4 rounded-xl' 
           style={{backgroundColor:"red"}}
          >Red</button>
          <button 
          onClick={()=>setcolour("blue")}
          className='outline-none px-4 rounded-xl' 
           style={{backgroundColor:"blue"}}
          >Blue</button>
          <button 
          onClick={()=>setcolour("green")}
          className='outline-none px-4 rounded-xl' 
           style={{backgroundColor:"green"}}
          >Green</button>
          <button 
          onClick={()=>setcolour("aqua")}
          className='outline-none px-4 rounded-xl' 
           style={{backgroundColor:"aqua"}}
          >Aqua</button>
          <button
          onClick={()=>setcolour("pink")}
          className='outline-none px-4 rounded-xl' 
           style={{backgroundColor:"pink"}}
          >Pink</button>
          <button
          onClick={()=>setcolour("silver")}
          className='outline-none px-4 rounded-xl' 
           style={{backgroundColor:"silver"}}
          >Silver</button>
          <button
          onClick={()=>setcolour("gray")}
          className='outline-none px-4 rounded-xl' 
           style={{backgroundColor:"gray"}}
          >Gray</button>
          <button
          onClick={()=>setcolour("fuchsia")}
          className='outline-none px-4 rounded-xl' 
           style={{backgroundColor:"fuchsia"}}
          >Fuchsia</button>
           <button
          onClick={()=>setcolour("lime")}
          className='outline-none px-4 rounded-xl' 
           style={{backgroundColor:"lime"}}
          >Lime</button>
           <button
          onClick={()=>setcolour("teal")}
          className='outline-none px-4 rounded-xl' 
           style={{backgroundColor:"teal"}}
          >Teal</button>
           <button
          onClick={()=>setcolour("gold")}
          className='outline-none px-4 rounded-xl' 
           style={{backgroundColor:"gold"}}
          >Gold</button>
        </div>
      </div>

    </div>
  )
}

export default App
