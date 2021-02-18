export class ColumnSort {
    sort_type: string;
    field_id: string;
    constructor(sort_type: string, field_id: string) {
        this.sort_type = sort_type;
        this.field_id = field_id;
    }
}