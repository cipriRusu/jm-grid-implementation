import React, { Component, createContext } from 'react';
import './Grid.scss';
import Header from './GridBody/GridHeader/Header';
import RowContainer from './GridBody/GridRows/RowContainer';
import { IGridProps } from './Interfaces/GridBody/IGridProps';
import { IGridState } from './Interfaces/GridTools/IGridState';
import { ISortStats } from './Interfaces/GridBody/ISortStats';
import { IGridContext } from './Interfaces/GridTools/IGridContext';
import { ISortable } from './Interfaces/GridBody/ISortable';
import { IColumn } from './Interfaces/GridBody/IColumn';
import { IHeader } from './Interfaces/GridBody/IHeader';
import { IColumnContainer } from './Interfaces/GridBody/IColumnContainer';

export const GridContext = createContext<IGridContext & ISortable>({
    all_headers: [],
    all_columns: [],
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
        selectedFilter: [],
        local_items: this.props.items
    }

    flatHeader = () => {
        let all_columns = this.props.headers
        .filter(x => x.name === this.state.visibleHeader)
        .map((header: IHeader) => {
            return header.headers.map((columns: IColumnContainer) => {
                return columns.columns.map((column: IColumn) => {
                    return column
                })
            })
        })

        return all_columns.flat().flat();
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
            all_columns: this.flatHeader(),
            items: this.state.local_items,
            selectedViewItemContext: defaultView,
            visibleHeader: this.state.visibleHeader, 
            selectViewHandler: this.selectItemHandler,
            headersContext: this.props.headers,
            sort: this.state.selectedSort,
            setSort: this.setSort,
            selectedFilterContext: this.state.selectedFilter,
            setFilter: this.setFilter
            }}>
            
            <Header />
            <RowContainer content={this.props.items}/>
        </GridContext.Provider>);
    }

}
export default Grid;