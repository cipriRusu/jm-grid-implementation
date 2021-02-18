import React, {Component} from 'react';
import './Grid.scss';
import './GridTools/ViewItem.scss';
import GridToolsLayout from './GridTools/GridToolsLayout'
import GridHeader from './GridBody/GridHeader/GridHeader';
import GridSecondHeader from './GridBody/GridHeader/GridSecondHeader';
import { IGridProps } from './Interfaces/GridTools/IGridProps';
import { IGridState } from './Interfaces/GridTools/IGridState';
import { ColumnSort } from './GridBody/GridHeader/ColumnSort';

class Grid extends Component<IGridProps, IGridState>{
    state: IGridState = {
        selectedViewItem: "",
        selectedSort: new ColumnSort('','')
    }

    onSelectedViewHandler = (selectedItem: string): void => {
        this.setState({selectedViewItem: selectedItem});
    }

    setSort = (selectedSort: ColumnSort): void => {
        this.setState({selectedSort: selectedSort})
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

            <GridHeader 
                sort={this.state.selectedSort} 
                setSort={this.setSort} />

            <GridSecondHeader 
                sort={this.state.selectedSort} 
                setSort={this.setSort} />
 
           <div id="view-item" >
               {this.props.items.length <= 1 ? 
                    this.props.items[0] :
                    defaultView}
            </div>
        </div>)
    }
}

export default Grid;