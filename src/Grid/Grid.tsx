import React, {Component} from 'react';
import './Grid.scss';
import './GridTools/ViewItem.scss';
import GridToolsLayout from './GridTools/GridToolsLayout'
import GridHeader from './GridBody/GridHeader/GridHeader';
import { IGridProps } from './Interfaces/GridTools/IGridProps';
import {IGridState} from './Interfaces/GridTools/IGridState';

class Grid extends Component<IGridProps, IGridState>{
    state: IGridState = {
        selectedViewItem: ""
    }

    onSelectedViewHandler = (selectedItem: string): void => {
        this.setState({selectedViewItem: selectedItem});
    }

    render(){
        const defaultView = this.state.selectedViewItem === "" ?
                    this.props.items[0] :
                    this.state.selectedViewItem;
        return (
        <div className="grid">
            <GridToolsLayout 
                items={this.props.items}
                onChildClick={this.onSelectedViewHandler}
                selectedItem={defaultView}/>
            <GridHeader />
 
           <div id="view-item" >
               {this.props.items.length <= 1 ? 
                    this.props.items[0] :
                    defaultView}
            </div>
        </div>)
    }
}

export default Grid;