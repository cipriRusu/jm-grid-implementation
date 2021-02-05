import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Layout.scss';
import AdvancedFilters from '../GridTools/AdvancedFilters/AdvancedFilters';
import AppliedFilters from '../GridTools/AppliedFilters/AppliedFilters';
import SavedFilters from '../GridTools/SavedFilters/SavedFilters';
import ViewPart from '../GridTools/ViewPart/ViewPart';

const Layout: React.FC = () => {
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col md={6} lg={6} className='filters'><AdvancedFilters /></Col>     
                <Col md={2} lg="auto" className='filters'><AppliedFilters /></Col> 
                <Col md={2} lg="auto" className='filters'><SavedFilters/></Col>
                <Col md={2} lg="auto" className='filters'><ViewPart /></Col>
            </Row>

        </Container>

    )
}

export default Layout;