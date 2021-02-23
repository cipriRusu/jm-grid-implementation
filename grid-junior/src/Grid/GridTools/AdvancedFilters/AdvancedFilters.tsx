import React, { Component } from 'react';
import CollapseButton from './CollapseButton/CollapseButton';
import Collapse from './Collapse/Collapse';
import {ICollapse} from '../../Interfaces/GridTools/ICollapse';
 
class AdvancedFilters extends Component<{}, ICollapse>{
    state: ICollapse = {
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
                    showCollapseHandler={this.showCollapseHandler}
                    icon="icon-cog icon-large"
                    title="Display options..."/>
                <Collapse
                    showCollapse={this.state.showCollapse}   />
            </>
        )
    }
}

export default AdvancedFilters;