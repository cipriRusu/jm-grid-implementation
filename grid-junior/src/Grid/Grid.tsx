import React, { Component, createContext } from 'react';
import './Grid.scss';
import './GridTools/ViewItem.scss';
import GridToolsLayout from './GridTools/GridToolsLayout';
import Header from './GridBody/GridHeader/Header';
import GridRow from './GridBody/GridRows/GridRow';
import { IGridProps } from './Interfaces/GridBody/IGridProps';
import { IGridState } from './Interfaces/GridTools/IGridState';
import { ISortStats } from './Interfaces/GridBody/ISortStats';
import { IGridContext } from './Interfaces/GridTools/IGridContext';
import { ISortable } from './Interfaces/GridBody/ISortable';
import { IColumn } from './Interfaces/GridBody/IColumn';

export const GridContext = createContext<IGridContext & ISortable>({
    all_headers: [],
    items: [],
    selectedViewItemContext: "",
    visibleHeader: "",
    selectViewHandler: (_value: string) => {},
    headersContext: [],
    sort: { sort_type: '', field_id: ''},
    setSort: (selectedSort: ISortStats) => {},
    selectedFilterContext: [],
    setFilter: (_values: IColumn[]) => {}
});

class Grid extends Component<IGridProps, IGridState>{
    state: IGridState = {
        selectedViewItem: "",
        selectedSort: { sort_type: '', field_id: ''},
        visibleHeader: 'firstHeader',
        selectedFilter: []
    }

    setSort = (selectedSort: ISortStats): void => {
        this.setState({selectedSort: selectedSort})
    };

    setFilter = (filters: IColumn[]) => {
        this.setState({ selectedFilter:  [...filters]});
    }

    selectItemHandler = (selectedItem: string) => {  
        this.setState({selectedViewItem: selectedItem});
    };

    render(){
        const defaultView = this.state.selectedViewItem === "" ?
                this.props.items[0] :
                this.state.selectedViewItem;

        return (
        <GridContext.Provider value={{
            all_headers: this.props.headers,
            items: this.props.items,
            selectedViewItemContext: defaultView,
            visibleHeader: this.state.visibleHeader, 
            selectViewHandler: this.selectItemHandler,
            headersContext: this.props.headers,
            sort: this.state.selectedSort,
            setSort: this.setSort,
            selectedFilterContext: this.state.selectedFilter,
            setFilter: this.setFilter
            }}>
            
            <div className="grid">
                <Header />
                <div id="view-item" className="grid-rows">
                    { this.props.items.map((x: any, y: number) => 
                        {return <GridRow key={y} rowdata={x}/>}) 
                    }
                </div>
            </div>
            
        </GridContext.Provider>);
    }

}
export default Grid;