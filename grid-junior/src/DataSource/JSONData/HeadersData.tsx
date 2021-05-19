export interface IColumn {
  name: string;
  size: ColumnSizes;
  type?: ColumnTypes;
  options?: any[];
}

export interface IColumns {
  name: string;
  columns: IColumn[];
}

export interface IHeader {
  name: string;
  headers: IColumns[];
}

enum ColumnSizes {
  SmallColumn = "SmallColumn",
  StandardColumn = "StandardColumn",
  LargeColumn = "LargeColumn",
}

enum ColumnTypes {
  boolean = "boolean",
  number = "number",
  date = "date",
  select = "select",
}

let Select = {} as IColumn;
Select.name = "Status";
Select.size = ColumnSizes.StandardColumn;
Select.type = ColumnTypes.select;
Select.options = [
  { Disponibil: "fa fa-circle" },
  { Ocupat: "fa fa-dot-circle-o" },
  { Offline: "fa fa-circle-o" },
];

let Prenume = {} as IColumn;
Prenume.name = "Prenume";
Prenume.size = ColumnSizes.StandardColumn;

let Nume = {} as IColumn;
Nume.name = "Nume";
Nume.size = ColumnSizes.StandardColumn;

let Valid = {} as IColumn;
Valid.name = "Valid";
Valid.type = ColumnTypes.boolean;
Valid.size = ColumnSizes.SmallColumn;

let Email = {} as IColumn;
Email.name = "Email";
Email.size = ColumnSizes.StandardColumn;

let NrTelefon = {} as IColumn;
NrTelefon.name = "Nr Telefon";
NrTelefon.size = ColumnSizes.StandardColumn;
NrTelefon.type = ColumnTypes.number;

let DataNasterii = {} as IColumn;
DataNasterii.name = "Data Nasterii";
DataNasterii.size = ColumnSizes.StandardColumn;
DataNasterii.type = ColumnTypes.date;

let firstHeader = {} as IColumns;
firstHeader.name = "Utilizator";
firstHeader.columns = [Select, Prenume, Nume, Valid];

let secondHeader = {} as IColumns;
secondHeader.name = "Detalii";
secondHeader.columns = [Email, NrTelefon, DataNasterii];

let header = {} as IHeader;
header.name = "firstHeader";
header.headers = [firstHeader, secondHeader];

export const headers = [header];
