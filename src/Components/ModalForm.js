import { Form } from "react-bootstrap"
function ModalForm ({ openModal, setEntry}) {

  return (
    <div className="modalBackGround">
      <div className="modalContainer" >
        <Form onSubmit={(e) => {openModal(true); e.preventDefault(); setEntry(e.target[0].value);}}>
              <Form.Label className = "label" >What Rippls Your Pond?</Form.Label>
              <input className = "entry" entry = "entry"  /> 
        </Form>
      </div> 
    </div> 
  ) 
}



export default ModalForm
