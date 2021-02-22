import React, { Component, createContext } from 'react';
import './Grid.scss';
import './GridTools/ViewItem.scss';
import GridToolsLayout from './GridTools/GridToolsLayout'
import GridHeader from './GridBody/GridHeader/GridHeader';
import GridSecondHeader from './GridBody/GridHeader/GridSecondHeader';
import { IGridProps } from './Interfaces/GridTools/IGridProps';
import { IGridState } from './Interfaces/GridTools/IGridState';
import { ColumnSort } from './GridBody/GridHeader/ColumnSort';
import GridHeaderProvider from './GridContext/GridHeaderContext';
import { IGridContext } from './Interfaces/GridTools/IGridContext';

export const GridContext = createContext<IGridContext>({
    items: [] as string[],
    selectedViewItemContext: "",
    selectViewHandler: (_value: string) => {},
});

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

    selectItemHandler = (selectedItem: string) => {  
        this.setState({selectedViewItem: selectedItem});
    };

    render(){
        const defaultView = this.state.selectedViewItem === "" ?
                this.props.items[0] :
                this.state.selectedViewItem;

        return (
        <GridContext.Provider value={{
            selectedViewItemContext: defaultView,
            selectViewHandler: this.selectItemHandler,
            items: this.props.items}}>
            <GridHeaderProvider>
                <div className="grid">
                    <GridToolsLayout />

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
            </div> 
            </GridHeaderProvider>
            
        </GridContext.Provider>);
    }

}
export default Grid;