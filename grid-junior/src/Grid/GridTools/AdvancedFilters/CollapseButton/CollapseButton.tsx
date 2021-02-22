import React from 'react';
import './CollapseButton.scss';
import Button from 'react-bootstrap/Button';
import {ICollapseProps} from '../../../Interfaces/GridTools/ICollapseProps';

const CollapseButton: React.FC<ICollapseProps> = (props) => {
    return (
        <div id="collapse-button">
            <Button variant="secondary" block className="grid-button"
                onClick={props.showCollapseHandler}>
                <i className={props.icon}></i>
                <span>{props.title}</span>
                <i className={props.showCollapse ? "icon-caret-up": "icon-caret-down"}></i>
            </Button>
        </div>
    )
}

export default CollapseButton;