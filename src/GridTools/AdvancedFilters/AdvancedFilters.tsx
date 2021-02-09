import React from 'react';
import './AdvancedFilters.scss';
import Button from 'react-bootstrap/Button';

interface CollapseProps {
    showCollapseHandler: () => void,
    showCollapse: boolean
};

const AdvancedFilters: React.FC<CollapseProps> = (props) => {
    let carret = "icon-caret-down";
    if (props.showCollapse){
        carret = "icon-caret-up";
    }

    return (
        <div id="advanced-filters">
            <Button variant="secondary" block
                onClick={props.showCollapseHandler}>
                <i className="icon-cog icon-large"></i>Display options...
                <i className={carret}></i>
            </Button>
        </div>
    )
}

export default AdvancedFilters;