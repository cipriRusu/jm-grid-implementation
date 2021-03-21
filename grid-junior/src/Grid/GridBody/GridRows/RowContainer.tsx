import React, { useContext } from 'react';
import { GridContext } from '../../Grid';
import { IRow } from '../../Interfaces/GridBody/IRow';
import './RowContainer.scss';
import './Row.scss';
import './Cell.scss';

const RowContainer = (props: { content: IRow[] }) => {
    const gridContext = useContext(GridContext);

    return (<div className="row-container">
        {props.content.map((x: IRow) => {
            return<div className='row'>
                {gridContext.all_columns.map((y: string) => {
                    return<div className="cell">
                        {x[y]}
                    </div>
                })}
            </div>
        })}
    </div>)
}

export default RowContainer;