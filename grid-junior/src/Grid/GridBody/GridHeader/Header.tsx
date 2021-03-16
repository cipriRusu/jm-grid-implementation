import React, { useContext } from 'react';
import Column from './Column';
import Title from './Title';
import { GridContext } from '../../Grid';
import { IColumnContainer } from '../../Interfaces/GridBody/IColumnContainer';
import { IColumn } from '../../Interfaces/GridBody/IColumn';
import './Header.scss';
import { useState } from 'react';

function Header() {
    const gridContext = useContext(GridContext);
    const [filter, setFilter] = useState<IColumn>({name:"", size: "", value: ""});

    function update_filter(updated_filter: IColumn) {
        setFilter(updated_filter)
    }

    return (
    <div className='grid-header'>
        { gridContext.all_headers
        .find(headerContainer => headerContainer.name === gridContext.visibleHeader)!.headers
        .map((value: IColumnContainer, key: number) => { 
            return <div className="header-container" key={key}>
                        <Title key={key}
                               title={value.name}
                               columns={value.columns}
                               filter={filter}
                               update_filter={update_filter}/>
                        <div className='column-container'>
                            { value.columns.map((value: IColumn, key: number) => {
                                return <Column key={key}
                                               name={value.name} 
                                               size={value.size}
                                               filter={filter}
                                               update_filter={update_filter}/>
                                })}
                        </div>
                   </div>})
        }
    </div>)
}

export default Header