import React, { Component } from 'react';
import ViewPartList from './ViewPartList/ViewPartList';
import ViewPartItem from './ViewItem/ViewItem';

const viewPartItems = [
    'First View',
    // 'Second View',
    //  'Third View'
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
                {viewPartItems.length > 1 && 
                 <ViewPartList 
                    items={viewPartItems}
                    onChildClick={this.onSelectedViewHandler}
                    selectedItem={this.state.selectedViewItem === "" ?
                                viewPartItems[0] :
                                this.state.selectedViewItem}
                    /> 
                }

                <ViewPartItem
                     item={viewPartItems.length <= 1 ? 
                           viewPartItems[0] :
                           this.state.selectedViewItem} /> 
                
            </>
        )
    }
}

export default ViewPart;