import React, { Component, createContext } from 'react';
import './Grid.scss';
import './GridTools/ViewItem.scss';
import GridToolsLayout from './GridTools/GridToolsLayout'
import GridHeader from './GridBody/GridHeader/GridHeader';
import { IGridProps } from './Interfaces/GridBody/IGridProps';
import { IHeader } from './Interfaces/GridBody/IHeader';
import { IGridState } from './Interfaces/GridTools/IGridState';
import { ISortStats } from './Interfaces/GridBody/ISortStats';
import { IGridContext } from './Interfaces/GridTools/IGridContext';
import { ISortable } from './Interfaces/GridBody/ISortable';
import { IFilter } from './Interfaces/GridTools/IFilter';
import { IColumn } from './Interfaces/GridBody/IColumn';

export const GridContext = createContext<IGridContext & ISortable>({
    items: [],
    selectedViewItemContext: "",
    selectViewHandler: (_value: string) => {},
    headersContext: [],
    sort: { sort_type: '', field_id: ''},
    setSort: (selectedSort: ISortStats) => {},
    selectedFilterContext: {name: '', size:'', value:''},
    setFilter: (_value: IColumn) => {}
});

class Grid extends Component<IGridProps, IGridState>{
    state: IGridState = {
        selectedViewItem: "",
        selectedSort: { sort_type: '', field_id: ''},
        selectedFilter: {name: '', size:'', value:''}
    }

    setSort = (selectedSort: ISortStats): void => {
        this.setState({selectedSort: selectedSort})
    }

    setFilter = (filter: IColumn) => {
        this.setState({selectedFilter: filter});
    }

    selectItemHandler = (selectedItem: string) => {  
        this.setState({selectedViewItem: selectedItem});
    }
    
    render(){
        console.log("filter from context", this.state.selectedFilter);
        const defaultView = this.state.selectedViewItem === "" ?
                this.props.items[0] :
                this.state.selectedViewItem;

        return (
        <GridContext.Provider value={{
            selectedViewItemContext: defaultView,
            selectViewHandler: this.selectItemHandler,
            items: this.props.items,
            headersContext: this.props.headers,
            sort: this.state.selectedSort,
            setSort: this.setSort,
            selectedFilterContext: this.state.selectedFilter,
            setFilter: this.setFilter
            }}>
            <div className="grid">
                <GridToolsLayout />

                {this.props.headers.map((value: IHeader) => {
                    return <GridHeader
                            key={value.name}
                            header_content={value}
                            sort={this.state.selectedSort} 
                            setSort={this.setSort} />
                })}

                <div id="view-item" >
                    {this.props.items.length <= 1 ? 
                        this.props.items[0] :
                        defaultView}
                </div>
            </div> 
            
        </GridContext.Provider>);
    }

}
export default Grid;