import React from 'react';

import Card from 'react-bootstrap/Card';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Collapse.scss';

const Collapse: React.FC = () => {
    return (

        <Form id='collapsable'>
            <Form.Group controlId="formHorizontalEmail" id="first-form-group">
                <div id="select-collpase">
                    <Form.Label  >
                        Sort By
                    </Form.Label>
    
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </div>
      
                <Form.Check
                inline 
                type="radio"
                label="Ascending"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
                />
                <Form.Check
                inline 
                type="radio"
                label="Descending"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                />
         
            </Form.Group>
            <Form.Group id="second-form-group">
                <Form.Label>
                    Filters:
                </Form.Label>

                    <Form.Control as="select">
                        <option>All</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
  
            </Form.Group>
            </Form>

       
    )
}

export default Collapse;