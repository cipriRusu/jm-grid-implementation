import React, { Component } from 'react';
import CollapseButton from './CollapseButton/CollapseButton';
import Collapse from './Collapse/Collapse';
import {IAdvanceFilterState} from '../../Interfaces/GridTools/IAdvancedFilterState';
 
class AdvancedFilters extends Component<{}, IAdvanceFilterState>{
    state: IAdvanceFilterState = {
        showCollapse: false
    };
    showCollapseHandler = () => {
        this.setState({showCollapse: !this.state.showCollapse});
    }
    render(){
        return (
            <>
                <CollapseButton 
                    showCollapse={this.state.showCollapse}
                    showCollapseHandler={this.showCollapseHandler}/>
                <Collapse
                    showCollapse={this.state.showCollapse}   />
            </>
        )
    }
}

export default AdvancedFilters;