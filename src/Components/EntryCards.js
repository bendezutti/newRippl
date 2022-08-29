import Card from "react-bootstrap/Card"

// Card Entry component
// Author: Bejamin DeZutti
const EntryCards = ({text}) => {
  return (

    <div className="entryCards">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title> 
               Entry
            </Card.Title>
            <Card.Text>
                {text}
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  
  )
}

export default EntryCards