import { Form } from "react-bootstrap"
function ModalForm ({ openModal, setEntry}) {

  return (
    <div className="modalBackGround">
      <div className="modalContainer" >
        <Form onSubmit={(e) => {openModal(false); e.preventDefault(); setEntry(e.target[0].value);}}>
              <Form.Label>What Rippls Your Pond?</Form.Label>
              <input entry = "entry"  /> 
        </Form>
      </div> 
    </div> 
  ) 
}



export default ModalForm
