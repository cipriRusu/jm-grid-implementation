import React from 'react';
import Form from 'react-bootstrap/Form';

import './Collapse.scss';

type CollapseProps = {
    showCollapse: boolean
};

const Collapse: React.FC<CollapseProps> = (props) => {
    return (
        <Form id='collapsable'
          style={{
            display: props.showCollapse ? 'block' : 'none',
            overflow: props.showCollapse ? 'visible' : 'hidden'
        }}>
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