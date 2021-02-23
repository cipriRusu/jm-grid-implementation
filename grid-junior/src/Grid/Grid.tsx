import React, {Component} from 'react';
import './Grid.scss';
import './GridTools/ViewItem.scss';
import GridToolsLayout from './GridTools/GridToolsLayout'
import GridHeader from './GridBody/GridHeader/GridHeader';
import { IGridProps } from './Interfaces/GridBody/IGridProps';
import { IHeader } from './Interfaces/GridBody/IHeader';
import { IGridState } from './Interfaces/GridTools/IGridState';
import { ISortStats } from './Interfaces/GridBody/ISortStats';

class Grid extends Component<IGridProps, IGridState>{
    state: IGridState = {
        all_headers: this.props.headers,
        selectedViewItem: "",
        selectedSort: { sort_type: '', field_id: ''}
    }

    onSelectedViewHandler = (selectedItem: string): void => {
        this.setState({selectedViewItem: selectedItem});
    }

    setSort = (selectedSort: ISortStats): void => {
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

        {this.state.all_headers.map((value: IHeader) => {
            return <GridHeader
                    header_content={value}
                    sort={this.state.selectedSort} 
                    setSort={this.setSort} />
        })}

           <div id="view-item">
               {this.props.items.length <= 1 ? 
                    this.props.items[0] :
                    defaultView}
            </div>
        </div>)
    }
}

export default Grid;