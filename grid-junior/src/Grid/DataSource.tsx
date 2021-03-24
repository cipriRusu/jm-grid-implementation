import { IColumn } from "./Interfaces/GridBody/IColumn";
import { ISortStats } from "./Interfaces/GridBody/ISortStats";
import { IDataType } from "./Interfaces/GridData/IDataSource";
import { dummy_data } from "./JSONData/DummyData";

export class DataObject implements IDataType {
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
        let returned_data = Object.create(this.data)

        if(filters !== undefined) {
            filters.forEach(((x: IColumn) => {
                returned_data = returned_data.filter((y: any) => {  
                    return y[x.name].includes(x.value) 
                })
            }))
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