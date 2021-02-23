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

export const GridContext = createContext<IGridContext>({
    items: [],
    selectedViewItemContext: "",
    selectViewHandler: (_value: string) => {},
    headersContext: []
});

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
        )
        return newArray.flat();
    }
    
    render(){
        let headers = this.fllatenHeadersContext(this.state.all_headers, 'firstHeader');

        const defaultView = this.state.selectedViewItem === "" ?
                this.props.items[0] :
                this.state.selectedViewItem;

        return (
        <GridContext.Provider value={{
            selectedViewItemContext: defaultView,
            selectViewHandler: this.selectItemHandler,
            items: this.props.items,
            headersContext: headers}}>
            <div className="grid">
                <GridToolsLayout />

                {this.state.all_headers.map((value: IHeader) => {
                    return <GridHeader
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