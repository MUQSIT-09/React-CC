// 1. use Callback: used for optimization it calls the function inside it when the dependencies are changed and returns a memorized function 
// 2.useeffect: runs the function inside it whenever the page renders first-time or dependencies are changed
// 3.use ref : used to give reference of selected components in our page so that functions can be performed on referenced values

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; // Using framer-motion for animations

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [isCopied, setIsCopied] = useState(false); // State for copy feedback

  // useRef hook
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*-_+=[]{}~`';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
    // Set feedback for copied password
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  // Password strength indicator based on length
  const passwordStrength = length <= 8 ? 'Weak' : length <= 16 ? 'Moderate' : 'Strong';
  // Animations for button and password strength change
  const copyButtonVariants = {
    idle: { scale: 1 },
    copied: { scale: 1.1, backgroundColor: '#34D399', color: '#fff' },
  };
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-5 my-8 bg-gray-900 text-orange-400">
      <h1 className="text-white text-2xl font-bold text-center my-5">Password Generator</h1>
      {/* Password Display with Copy Button */}
      <div className="flex shadow-lg rounded-md overflow-hidden mb-6">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 text-lg bg-gray-700 text-white focus:ring-2 focus:ring-orange-400 transition duration-300"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <motion.button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-orange-500 text-white px-4 py-2 font-medium hover:bg-orange-600 active:bg-orange-700 transition duration-300"
          animate={isCopied ? 'copied' : 'idle'}
          variants={copyButtonVariants}
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </motion.button>
      </div>
      {/* Password Strength Indicator with soft gradients */}
      <div className="text-center mb-4">
        <motion.span
          className={`text-sm font-bold px-3 py-1 rounded-full transition-colors duration-500 ${
            passwordStrength === 'Weak'
              ? 'bg-gradient-to-r from-red-500 to-red-400'
              : passwordStrength === 'Moderate'
              ? 'bg-gradient-to-r from-yellow-500 to-yellow-400'
              : 'bg-gradient-to-r from-green-500 to-green-400'
          }`}
        >
          {passwordStrength} Password
        </motion.span>
      </div>
      {/* Controls for Length and Options */}
      <div className="space-y-4 text-white">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Password Length: {length}</label>
          <input
            type="range"
            min={6}
            max={32}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-x-3">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
            className="h-4 w-4 text-orange-600 focus:ring-orange-400 rounded"
          />
          <label htmlFor="numberInput" className="text-sm">
            Include Numbers
          </label>
        </div>
        <div className="flex items-center gap-x-3">
          <input
            type="checkbox"
            checked={charAllowed}
            id="characterInput"
            onChange={() => setCharAllowed((prev) => !prev)}
            className="h-4 w-4 text-orange-600 focus:ring-orange-400 rounded"
          />
          <label htmlFor="characterInput" className="text-sm">
            Include Special Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;

// Without animation:




// import { useState, useCallback, useEffect, useRef } from 'react'



// function App() {
//   const [length, setLength] = useState(8)
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false)
//   const [password, setPassword] = useState("")

//   //useRef hook
//   const passwordRef = useRef(null)

//   const passwordGenerator = useCallback(() => {
//     let pass = ""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if (numberAllowed) str += "0123456789"
//     if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1)
//       pass += str.charAt(char)
      
//     }

//     setPassword(pass)


//   }, [length, numberAllowed, charAllowed, setPassword])

//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0, 999);
//     window.navigator.clipboard.writeText(password)
//   }, [password])

//   useEffect(() => {
//     passwordGenerator()
//   }, [length, numberAllowed, charAllowed, passwordGenerator])
//   return (
    
//     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
//       <h1 className='text-white text-center my-3'>Password generator</h1>
//     <div className="flex shadow rounded-lg overflow-hidden mb-4">
//         <input
//             type="text"
//             value={password}
//             className="outline-none w-full py-1 px-3"
//             placeholder="Password"
//             readOnly
//             ref={passwordRef}
//         />
//         <button
//         onClick={copyPasswordToClipboard}
//         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
//         >copy</button>
        
//     </div>
//     <div className='flex text-sm gap-x-2'>
//       <div className='flex items-center gap-x-1'>
//         <input 
//         type="range"
//         min={6}
//         max={100}
//         value={length}
//          className='cursor-pointer'
//          onChange={(e) => {setLength(e.target.value)}}
//           />
//           <label>Length: {length}</label>
//       </div>
//       <div className="flex items-center gap-x-1">
//       <input
//           type="checkbox"
//           defaultChecked={numberAllowed}
//           id="numberInput"
//           onChange={() => {
//               setNumberAllowed((prev) => !prev);
//           }}
//       />
//       <label htmlFor="numberInput">Numbers</label>
//       </div>
//       <div className="flex items-center gap-x-1">
//           <input
//               type="checkbox"
//               defaultChecked={charAllowed}
//               id="characterInput"
//               onChange={() => {
//                   setCharAllowed((prev) => !prev )
//               }}
//           />
//           <label htmlFor="characterInput">Characters</label>
//       </div>
//     </div>
// </div>
    
//   )
// }

// export default App