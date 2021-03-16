import React, { Component, createContext } from 'react';
import './Grid.scss';
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
        selectedFilter: [],
        local_items: this.props.items
    }

    setSort = (selectedSort: ISortStats): void => {
        this.setState({selectedSort: selectedSort})
        
        //Sort normally handled by API (?)
        let sort = this.props.items.slice();

        if(selectedSort.sort_type !== '') {
            switch(selectedSort.field_id) {
                case 'Prenume' :
                    sort.sort((x, y) => { return x.prenume.localeCompare(y.prenume) })
                break;
                case 'Nume' :
                    sort.sort((x, y) => { return x.nume.localeCompare(y.nume) })
                break;
                case 'Email' :
                    sort.sort((x, y) => { return x.email.localeCompare(y.email) })
                break;
                case 'Nr Telefon' :
                    sort.sort((x, y) => { return x.telefon.localeCompare(y.telefon) })
                break;
            }

            if(selectedSort.sort_type === 'desc')  { sort.reverse() }

            this.setState({ local_items: sort})
        }
        else {
            this.setState({ local_items: this.props.items })
        }
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
                <div className="main-grid-layout">
                    <GridRow rowdata={this.state.local_items}/>
                </div>
            
        </GridContext.Provider>);
    }

}
export default Grid;