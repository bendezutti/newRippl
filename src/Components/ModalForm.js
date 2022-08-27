import { Form } from "react-bootstrap"
import {useState} from 'react'




function ModalForm () {

  const [stateOfModal, openModal] = useState(true);
  
  return (
    <div className="modalBackGround">
      <div className="modalContainer" >
        <Form>
            <Form.Label>What Rippls Your Pond?</Form.Label>
            <Form.Control type = "text" name = "submission"/> 
        <div> 
        </div>
        </Form>
      </div>
    </div>
  )
}



export default ModalForm
