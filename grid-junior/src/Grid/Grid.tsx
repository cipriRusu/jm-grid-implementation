import React, { Component, createContext } from 'react';
import './Grid.scss';
import Header from './GridBody/GridHeader/Header';
import RowContainer from './GridBody/GridRows/RowContainer';
import { IColumn } from './Interfaces/GridBody/IColumn';
import { IHeader } from './Interfaces/GridBody/IHeader';
import { IGridProps } from './Interfaces/GridBody/IGridProps';
import { IGridState } from './Interfaces/GridTools/IGridState';
import { ISortStats } from './Interfaces/GridBody/ISortStats';
import { IGridContext } from './Interfaces/GridTools/IGridContext';
import { ISortable } from './Interfaces/GridBody/ISortable';
import { IColumnContainer } from './Interfaces/GridBody/IColumnContainer';
import { IRow } from './Interfaces/GridBody/IRow';

export const GridContext = createContext<IGridContext & ISortable>({
    all_headers: [],
    all_columns: [],
    data: { get: (sort: ISortStats, filters: IColumn[]) => []},
    headersContext: [],
    items: [],
    page: 0,
    setItems: (updatedItems: IRow[]) => {},
    setPage: (newPage: number) => {},
    selectedViewItem: "",
    selectViewHandler: (_value: string) => {},
    sort: { sort_type: '', field_id: ''},
    setSort: (selectedSort: ISortStats) => {},
    filters: [],
    setFilter: (_values: IColumn[]) => {},
    toggledColumn: {name: "", size: ""},
    setToggledColumn: (value: IColumn) => {},
    toggledHeader : [],
    setToggledHeader: (value: IColumn[]) => {},
    visibleHeader: ""
});

class Grid extends Component<IGridProps, IGridState>{
    state: IGridState = {
        selectedViewItem: "",
        selectedSort: { sort_type: '', field_id: ''},
        visibleHeader: 'firstHeader',
        selectedFilter: [],
        data: this.props.data,
        toggledColumn: {name: "", size: ""},
        toggledHeader: [],
        page: 0,
        items:[]
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

    setItems = (updatedItems: IRow[]) =>  {
        this.setState({items: updatedItems});
    }

    setPage = (newPage: number) : void => {
        this.setState({page: newPage});
    }

    setSort = (selectedSort: ISortStats): void => {
        this.setState({selectedSort: selectedSort})
    };

    setFilter = (filters: IColumn[]) => {
        this.setState({selectedFilter:  [...filters]});
    }

    setToggledColumn = (toggled: IColumn) => {
        this.setState({toggledColumn: toggled})
    }

    setToggledHeader = (toggled: IColumn[]) => {
        this.setState({toggledHeader: toggled})
    }

    selectItemHandler = (selectedItem: string) => {  
        this.setState({selectedViewItem: selectedItem});
    };

    render(){                                    
        return (
        <GridContext.Provider value={{
            all_headers: this.props.headers,
            all_columns: this.flatHeader(),
            data: this.props.data,
            items: this.state.items,
            setItems: this.setItems,
            page: this.state.page,
            setPage: this.setPage,
            selectedViewItem: '',
            visibleHeader: this.state.visibleHeader,
            selectViewHandler: this.selectItemHandler,
            headersContext: this.props.headers,
            sort: this.state.selectedSort,
            setSort: this.setSort,
            filters: this.state.selectedFilter,
            setFilter: this.setFilter,
            toggledColumn: this.state.toggledColumn,
            setToggledColumn: this.setToggledColumn,
            toggledHeader: this.state.toggledHeader,
            setToggledHeader: this.setToggledHeader
            }}>
            
            <Header />
            <RowContainer content={this.state.data} 
                          pageSize={this.props.pageSize} 
                          pageCache={this.props.cacheSize}/>
                          
        </GridContext.Provider>);
    }

}
export default Grid;