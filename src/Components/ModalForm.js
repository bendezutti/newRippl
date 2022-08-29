import { Form } from "react-bootstrap"

// Modal Form
// @param {state} openModal is the state of the modal form
// @param {text} setEntry sets the entry text in the EntryCard component
// Author: Benjamin DeZutti
function ModalForm ({ openModal, setEntry}) {

  return (
    <div className="modalBackGround">
      <div className="modalContainer" >
        <Form onSubmit={(e) => {openModal(true); e.preventDefault(); setEntry(e.target[0].value);}}>
              <Form.Label className = "label" >What Rippls Your Lake?</Form.Label>
              <input className = "entry" entry = "entry"  /> 
        </Form>
      </div> 
    </div> 
  ) 
}



export default ModalForm
