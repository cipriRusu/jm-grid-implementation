import React from 'react';
import { IColumnContainer } from '../../Interfaces/GridBody/IColumnContainer';
import { IContainerProps } from '../../Interfaces/GridBody/IContainerProps';
import HeaderContainer from './HeaderContainer';
import './GridHeaderStyle.scss';

function GridHeader(props: IContainerProps) {
    return(
    <div className='grid-header'>
        {props.header_content.headers.map((value: IColumnContainer) => 
        {return <HeaderContainer
                    key={value.name}
                    name={value.name}
                    columns={value.columns}
                    sort={props.sort}
                    setSort={props.setSort}
                />
        })}
    </div>)
}

export default GridHeader