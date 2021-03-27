import { parse } from "node:url";
import { IColumn } from "./Interfaces/GridBody/IColumn";
import { ISortStats } from "./Interfaces/GridBody/ISortStats";
import { IDataSource } from "./Interfaces/GridData/IDataSource";
import { dummy_data } from "./JSONData/DummyData";

export class DataSource implements IDataSource{
    data: any[];
    constructor () {
        this.data = dummy_data;
    }

    _sort_function(key: string) {
        return function name(a: any, b: any) {
            let x = a[key]; 
            let y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        } 
    }

    get(sort: ISortStats, filters: IColumn[]) {
        console.log(filters)
        let returned_data = Object.create(this.data) 

        if(filters !== undefined) {
            filters.forEach((x: IColumn) => {
                returned_data = returned_data.filter((y: any) => {
                    if(x.type === 'number') {
                        let value = x.value === undefined ? 0 : parseInt(x.value);
                        if(x.operator === 0 || x.operator === undefined){
                            return parseInt(y[x.name]) === value;
                        }
                        else if(x.operator === 1) {
                            return parseInt(y[x.name]) !== value;
                        }
                        else if(x.operator === 2) {
                            return parseInt(y[x.name]) < value;
                        }
                        else if(x.operator === 3) {
                            return parseInt(y[x.name]) > value;
                        }
                    }

                    if(x.type === undefined) {                
                        if(x.operator === 0 || x.operator === undefined) {
                            return y[x.name].includes(x.value)
                        }
                        else if(x.operator === 1) {
                            return !y[x.name].includes(x.value)
                        }
                        else if(x.operator === 2) {
                            return y[x.name].startsWith(x.value)
                        }
                        else if(x.operator === 3) {
                            return y[x.name].endsWith(x.value)
                        }
                        else if(x.operator === 4) {
                            return y[x.name] === x.value;
                        }
                        else if(x.operator === 5) {
                            return y[x.name] !== x.value;
                        }
                    }
                })
            })
        }

        if(sort !== undefined) {
            if(sort.field_id) {
                switch(sort.sort_type) {
                    case "asc":
                        returned_data.sort(this._sort_function(sort.field_id));
                        break;
                    case "desc":
                        returned_data.sort(this._sort_function(sort.field_id)).reverse();
                        break;
                    default:
                        return returned_data
                }
            }
        }

        return returned_data
    }
}