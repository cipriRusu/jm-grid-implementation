import React, { useState } from 'react';
import './ColumnHeader.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

function ColumnHeader(props: any) { return (<div className={props.className}><p>{props.columnName}</p></div>) }

export default ColumnHeader