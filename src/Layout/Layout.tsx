import React, { Component } from 'react';
import './Layout.scss';
import AdvancedFilters from '../GridTools/AdvancedFilters/AdvancedFilters';
import AppliedFilters from '../GridTools/AppliedFilters/AppliedFilters';
import SavedFilters from '../GridTools/SavedFilters/SavedFilters';
import ViewPart from '../GridTools/ViewPart/ViewPart';
import Collapse from '../GridTools/AdvancedFilters/Collapse/Collapse';


type AdvanceFilterState = {
    showCollapse: boolean
}

class Layout extends Component<{}, AdvanceFilterState>{
    state: AdvanceFilterState = {
        showCollapse: false
    };

    showCollapseHandler = () => {
        this.setState({showCollapse: !this.state.showCollapse});
        console.log("bbbbbb", this.state.showCollapse);
    }

    render(){
        return (
            <div id="grid-container">      
                <AdvancedFilters 
                    showCollapse={this.state.showCollapse}
                    showCollapseHandler={this.showCollapseHandler}
                    />
                <AppliedFilters /> 
                <SavedFilters/>
                <ViewPart />
                <Collapse showCollapse={this.state.showCollapse}  />
            </div>
    
        )
    }
}

export default Layout;