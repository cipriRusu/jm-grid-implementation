import React, { Component } from 'react';
import CollapseButton from './CollapseButton/CollapseButton';
import Collapse from './Collapse/Collapse';

type AdvanceFilterState = {
    showCollapse: boolean
}
class AdvancedFilters extends Component<{}, AdvanceFilterState>{
    state: AdvanceFilterState = {
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