import { IColumn } from "./Interfaces/GridBody/IColumn";
import { ISortStats } from "./Interfaces/GridBody/ISortStats";
import { IDataType } from "./Interfaces/GridData/IDataType";
import { dummy_data } from "./JSONData/DummyData";

export class DataObject implements IDataType {
    data: any[];
    sort: ISortStats;
    filters: IColumn[];
    constructor () {
        this.data = dummy_data;
        this.sort = { sort_type: '', field_id: ''}
        this.filters = [];
    }

    _sort_function(key: string) {
        return function name(a: any, b: any) {
            let x = a[key]; 
            let y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        } 
    }

    get() {
        if(this.sort.sort_type) {
            let sorted_data = Object.create(this.data)
            sorted_data.sort(this._sort_function(this.sort.field_id))
            return this.sort.sort_type === 'asc' ? sorted_data : sorted_data.reverse();
        }
        else {
            return this.data;
        }
    }
}