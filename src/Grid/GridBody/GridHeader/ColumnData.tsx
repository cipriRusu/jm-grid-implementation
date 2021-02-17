export class ColumnData {
    column_name: string;
    column_width: string;
    constructor(columnName: string, columnWidth: string){
        this.column_name = columnName;
        this.column_width = columnWidth;
    }
}