import React from 'react';
import './AdvancedFilters.scss';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AdvancedFilters: React.FC = () => {
    return (
        <Accordion defaultActiveKey="0" id="advanced-filters">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <i className="icon-cog icon-large"></i>Display options...
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2} className="mr-0">
                            Sort By
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Col>
                        <Col sm={6} className="my-2">
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
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2} className="mr-0">
                            Filters:
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control as="select">
                                <option>All</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    </Form>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
      
    )
}

export default AdvancedFilters;