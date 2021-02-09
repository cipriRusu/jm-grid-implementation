import React, { Component } from 'react';
import './Layout.scss';
import AdvancedFilters from '../AdvancedFilters/AdvancedFilters';
import AppliedFilters from '../AppliedFilters/AppliedFilters';
import SavedFilters from '../SavedFilters/SavedFilters';
import ViewPart from '../ViewPart/ViewPart';
import Collapse from '../AdvancedFilters/Collapse/Collapse';


type AdvanceFilterState = {
    showCollapse: boolean
}

class Layout extends Component<{}, AdvanceFilterState>{
    state: AdvanceFilterState = {
        showCollapse: false
    };

    showCollapseHandler = () => {
        this.setState({showCollapse: !this.state.showCollapse});
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