import React from 'react';
import Title from './Title';
import './HeaderContainer.scss';
import { IColumn } from '../../Interfaces/GridBody/IColumn';
import { IColumnContainer } from '../../Interfaces/GridBody/IColumnContainer';
import { ISortable } from '../../Interfaces/GridBody/ISortable';
import Column from './Column';

function HeaderContainer(props: IColumnContainer & ISortable) {
    return(<div className="header-container">
                <Title title={props.name} 
                       columns={props.columns}/>
                <div className="column-headers">
                    {props.columns.map((value: IColumn) => {
                        return <Column
                                column_name={value.name} 
                                column_size={value.size}
                                sort={props.sort}
                                setSort={props.setSort}/>
                    })}
                </div>
            </div>)
}

export default HeaderContainer