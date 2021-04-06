import { IColumn } from "./Interfaces/GridBody/IColumn";
import { ISortStats } from "./Interfaces/GridBody/ISortStats";
import { IDataSource } from "./Interfaces/GridData/IDataSource";
import { dummy_data } from "./JSONData/DummyData";
import { NumberFilter } from "./NumberFilter";
import { StringFilter } from "./StringFilter";

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

    get(sort: ISortStats, filters: IColumn[], page: number, pageCount: number) {
        
        let returned_data = Object.create(this.data)

        let string_filters = Array<IColumn>();

        let number_filters = Array<IColumn>();


        if(filters !== undefined) {
            filters.forEach((x:IColumn) => {
                switch(x.type) {
                    case undefined:
                        string_filters.push(x);
                    break;
                    case 'number':
                        number_filters.push(x);
                    break;
                }
            })
        }

        if(string_filters.length > 0) {
            returned_data = new StringFilter(returned_data).applyFilters(string_filters).slice(0, page * pageCount);
        }

        if(number_filters.length > 0) {
            returned_data = new NumberFilter(returned_data).applyFilters(number_filters).slice(0, page * pageCount);
        }

        if(sort !== undefined) {
            if(sort.field_id) {
                switch(sort.sort_type) {
                    case "asc":
                        returned_data.sort(this._sort_function(sort.field_id)).slice(0, page * pageCount);
                        break;
                    case "desc":
                        returned_data.sort(this._sort_function(sort.field_id)).reverse().slice(0, page * pageCount);
                        break;
                    default:
                        return returned_data.slice(0, page *pageCount)
                }
            }
        }

        return returned_data.slice(0, page * pageCount)
    }
}