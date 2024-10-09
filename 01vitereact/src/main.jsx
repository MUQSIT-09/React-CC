// JSX: element must be wrapped in an enclosing tag can use <></> --> (called as fragments)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Firstfunction from './Firstfunction.jsx'
createRoot(document.getElementById('root')).render(
    <Firstfunction />
)
