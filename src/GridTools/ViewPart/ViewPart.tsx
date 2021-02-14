import React, { Component } from 'react';
import ViewPartList from './ViewPartList/ViewPartList';
import ViewPartItem from './ViewItem/ViewItem';

const viewPartItems = [
    'First View',
    'Second View',
    'Third View'
]
type ViewPartState = {
    selectedViewItem: string
}
class ViewPart extends Component<{}, ViewPartState>{
    state = {
        selectedViewItem: ""
    }

    onSelectedViewHandler = (selectedItem: string): void => {
        this.setState({selectedViewItem: selectedItem});
    }

    render(){
        return (
            <>
                <ViewPartList 
                    items={viewPartItems}
                    onChildClick={this.onSelectedViewHandler}
                    selectedItem={this.state.selectedViewItem}
                    /> 
                <ViewPartItem item={this.state.selectedViewItem} />
            </>
        )
    }
}

export default ViewPart;