import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Contacts from './components/Contacts/Contacts'
import Chat from './components/Chat/Chat'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Contacts />
      <Chat />
    </div>
  )
}

export default App
