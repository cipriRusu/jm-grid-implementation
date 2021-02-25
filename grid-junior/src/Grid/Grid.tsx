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

export const GridContext = createContext<IGridContext & ISortable>({
    all_headers: [],
    items: [],
    selectedViewItemContext: "",
    visibleHeader: "",
    selectViewHandler: (_value: string) => {},
    headersContext: [],
    sort: { sort_type: '', field_id: ''},
    setSort: (selectedSort: ISortStats) => {}
});

class Grid extends Component<IGridProps, IGridState>{
    state: IGridState = {
        all_headers: this.props.headers,
        selectedViewItem: "",
        selectedSort: { sort_type: '', field_id: ''},
        visibleHeader: 'firstHeader'
    };

    setSort = (selectedSort: ISortStats): void => {
        this.setState({selectedSort: selectedSort})
    };

    selectItemHandler = (selectedItem: string) => {  
        this.setState({selectedViewItem: selectedItem});
    };

    fllatenHeadersContext = (headersContext: IHeader[], name: string) => {
        let newArray:any= [];
        headersContext.map(headers => 
           {
                if(headers.name === name){
                    return headers.headers.map(header => newArray.push(header.columns))
                }  
           } 
        );
        return newArray.flat();
    };
    
    render(){
        let headers = this.fllatenHeadersContext(this.state.all_headers, 'firstHeader');

        const defaultView = this.state.selectedViewItem === "" ?
                this.props.items[0] :
                this.state.selectedViewItem;

        return (
        <GridContext.Provider value={{
            all_headers: this.state.all_headers,
            selectedViewItemContext: defaultView,
            visibleHeader: this.state.visibleHeader, 
            selectViewHandler: this.selectItemHandler,
            items: this.props.items,
            headersContext: headers,
            sort: this.state.selectedSort,
            setSort: this.setSort
            }}>
            
            <div className="grid">
                <GridToolsLayout />
                <GridHeader />

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