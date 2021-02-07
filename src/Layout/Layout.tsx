import React from 'react';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import './Layout.scss';
import AdvancedFilters from '../GridTools/AdvancedFilters/AdvancedFilters';
import AppliedFilters from '../GridTools/AppliedFilters/AppliedFilters';
import SavedFilters from '../GridTools/SavedFilters/SavedFilters';
import ViewPart from '../GridTools/ViewPart/ViewPart';
import Collapse from '../GridTools/AdvancedFilters/Collapse/Collapse';
const Layout: React.FC = () => {
    return (
        <div id="grid-container">      
            <AdvancedFilters />
            <AppliedFilters /> 
            <SavedFilters/>
            <ViewPart />
            <Collapse />
        </div>

    )
}

export default Layout;