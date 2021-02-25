import React, { useContext } from 'react';
import Column from './Column';
import Title from './Title';
import { IColumnContainer } from '../../Interfaces/GridBody/IColumnContainer';
import { IColumn } from '../../Interfaces/GridBody/IColumn';
import './HeaderContainer.scss';
import './GridHeaderStyle.scss';
import { GridContext } from '../../Grid';

function GridHeader() {
    const gridContext = useContext(GridContext);

    return (
    <div className='grid-header'>
        { gridContext.all_headers.find(element => element.name === gridContext.visibleHeader)!.headers.map((value: IColumnContainer, key: number) => {
            return <div className="header-container">
                <Title key={key} title={value.name} columns={value.columns}/>
                    <div className='column-headers'> {value.columns.map((value: IColumn, key: number) => {
                        return <Column
                                key={key}
                                column_name={value.name} 
                                column_size={value.size} /> })}
                    </div>
                </div>
    })}
    </div>)
}

export default GridHeader