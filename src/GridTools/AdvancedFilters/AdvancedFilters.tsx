import React from 'react';
import './AdvancedFilters.scss';
//import Accordion from 'react-bootstrap/Accordion';
//import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//import Collapse from './Collapse/Collapse';

interface CollapseProps {
    showCollapseHandler: () => void,
    showCollapse: boolean
};

const AdvancedFilters: React.FC<CollapseProps> = (props) => {
    
    return (
        <div id="advanced-filters">
            
            <Button variant="secondary" block
        
                onClick={props.showCollapseHandler}>
                <i className="icon-cog icon-large"></i>Display options...
            </Button>

        </div>

 
    )
}

export default AdvancedFilters;