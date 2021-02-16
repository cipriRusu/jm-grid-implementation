import React, {Component} from 'react';
import './Grid.scss';
import './GridTools/ViewItem.scss';
import GridToolsLayout from './GridTools/GridToolsLayout'
import GridHeader from './GridBody/GridHeader/GridHeader';

const viewPartItems = [
    'First View',
    'Second View',
    'Third View'
]

type GridState = {
    selectedViewItem: string
}

class Grid extends Component<{}, GridState>{
    state = {
        selectedViewItem: ""
    }

    onSelectedViewHandler = (selectedItem: string): void => {
        this.setState({selectedViewItem: selectedItem});
    }

    render(){
        const defaultView = this.state.selectedViewItem === "" ?
                    viewPartItems[0] :
                    this.state.selectedViewItem;
        return (
        <div className="grid">
            <GridToolsLayout 
                items={viewPartItems}
                onChildClick={this.onSelectedViewHandler}
                selectedItem={defaultView}/>
            <GridHeader />
 
           <div id="view-item" >
               {viewPartItems.length <= 1 ? 
                    viewPartItems[0] :
                    defaultView}
            </div>
        </div>)
    }
   
}

export default Grid;