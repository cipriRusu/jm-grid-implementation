import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './GridFilterFormStyle.scss';

function GridFilterForm(props: any) {
    return(
        <Form style={{ display: props.componentVisible }}>
            <Form.Group>
                <br></br>
                <Form.Row>
                    <Form.Check />
                    <Form.Label className="formLabel">Indentic cu: </Form.Label>
                    <Form.Control></Form.Control>
                </Form.Row>
                <Form.Row>
                    <Form.Check />
                    <Form.Label className="formLabel">Aproximativ identic: </Form.Label>
                    <Form.Control></Form.Control>
                </Form.Row>
                <Form.Row>
                    <Form.Check />
                    <Form.Label className="formLabel">Contine: </Form.Label>
                    <Form.Control></Form.Control>
                </Form.Row>
                <br/>
                <Form.Row>
                    <Button variant="secondary">Filter Results</Button>{' '}
                </Form.Row>
        </Form.Group>
    </Form>)
}

export default GridFilterForm