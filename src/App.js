import ModalForm from "./Components/ModalForm.js"
import EntryCard from "./Components/EntryCards.js"
import { useState } from 'react'

function App() {

  const [stateOfModal, openModal] = useState(true)
  const [stateOfCard, openCard] = useState(true)
  const [text, setEntry,] = useState('')
  
  

  return (
    <div> 
      {stateOfModal && <ModalForm openModal={openModal} setEntry={setEntry} />}
      {stateOfCard && <EntryCard openCard= {openCard} text = {text}/>}
    </div>
  );
}

export default App;
