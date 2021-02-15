import React from 'react';
import './ViewItem.scss';
import {IViewItemProps} from '../../Interfaces/IViewItemProps';

const ViewItem : React.FC<IViewItemProps>= (props) => {
    return (<div id={props.item !== '' ? "view-item" : ""}>{props.item}</div>);
}

export default ViewItem;