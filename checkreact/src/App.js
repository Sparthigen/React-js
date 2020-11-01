
import './App.css';
import { Form, Col, Button } from 'react-bootstrap';
function App() {
  return (

    <div class="mt-5 pt-3 pb-3 pl-5 pr-5 container">
      <Form>
        <Form.Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label></Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Form.Row>
        
        

        <Form.Group controlId="formGridAddress1">
          <Form.Label></Form.Label>
          <Form.Control placeholder="Adress 1" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label></Form.Label>
          <Form.Control placeholder="Adress 2" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label></Form.Label>
            <Form.Control placeholder="Tunisia (only country available for now)"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label></Form.Label>
            <Form.Control as="select" defaultValue="">
              <option>City</option>
              <option>Bizerta</option>
              <option>Tabarka</option>
              <option>Tunis</option>
              <option>Ariana</option>
              <option>Manouba</option>
              <option>Ben Arous</option>
              <option>Nabeul</option>
              <option>Beja</option>
              <option>Seliana</option>
              <option>Kef</option>
              <option>Jendouba</option>
              <option>Kairouan</option>
              <option>Zaghouan</option>
              <option>Sousse</option>
              <option>Monastir</option>
              <option>Mehdia</option>
              <option>Sfax</option>
              <option>Sidi Bouzid</option>
              <option>Kasserine</option>
              <option>Gafsa</option>
              <option>Touzer</option>
              <option>Kebili</option>
              <option>Tataouin</option>
              <option>Mednine</option>
              <option>Mehdia</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip" >
            <Form.Label></Form.Label>
            <Form.Control placeholder="Zip Code"/>
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label></Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Write your message..." />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div >
  );
}

export default App;
