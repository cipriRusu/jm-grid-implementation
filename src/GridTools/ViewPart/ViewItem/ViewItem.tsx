import React from 'react';

interface ViewItemProps {
    item: string
}
const ViewItem : React.FC<ViewItemProps>= (props) => {
    return (<div className="view-item">{props.item}</div>);
}

export default ViewItem;