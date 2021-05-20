import { IColumnOptions } from "../Interfaces/IColumnOptions";
import { ColumnSizes } from "../CustomTypes/ColumnSizes";
import { ColumnVisibility } from "../CustomTypes/ColumnVisibility";
import { ColumnCollapsable } from "../CustomTypes/ColumnCollapsable";
import { ColumnTypes } from "../CustomTypes/ColumnTypes";
import { IHeader } from "../Interfaces/IHeader";
import { IColumns } from "../Interfaces/IColumns";
import { IColumn } from "../Interfaces/IColumn";

let FirstOption = {} as IColumnOptions;
FirstOption.name = "Disponibil";
FirstOption.icon = "fa fa-circle";

let SecondOption = {} as IColumnOptions;
SecondOption.name = "Ocupat";
SecondOption.icon = "fa fa-dot-circle-o";

let ThirdOption = {} as IColumnOptions;
ThirdOption.name = "Offline";
ThirdOption.icon = "fa fa-circle-o";

let Select = {} as IColumn;
Select.name = "Status";
Select.size = ColumnSizes.StandardColumn;
Select.type = ColumnTypes.select;
Select.options = [FirstOption, SecondOption, ThirdOption];
Select.collapsable = ColumnCollapsable.fixed;
Select.visibility = [
  ColumnVisibility.MaxVisible,
  ColumnVisibility.LargeVisible,
  ColumnVisibility.SmallVisible,
];

let Prenume = {} as IColumn;
Prenume.name = "Prenume";
Prenume.size = ColumnSizes.StandardColumn;
Prenume.collapsable = ColumnCollapsable.fixed;
Prenume.visibility = [
  ColumnVisibility.MaxVisible,
  ColumnVisibility.LargeVisible,
  ColumnVisibility.MediumVisible,
  ColumnVisibility.SmallVisible,
];

let Nume = {} as IColumn;
Nume.name = "Nume";
Nume.size = ColumnSizes.StandardColumn;
Nume.collapsable = ColumnCollapsable.fixed;
Nume.visibility = [
  ColumnVisibility.MaxVisible,
  ColumnVisibility.LargeVisible,
  ColumnVisibility.MediumVisible,
  ColumnVisibility.SmallVisible,
];

let Valid = {} as IColumn;
Valid.name = "Valid";
Valid.type = ColumnTypes.boolean;
Valid.size = ColumnSizes.SmallColumn;
Valid.collapsable = ColumnCollapsable.collapsable;
Valid.visibility = [ColumnVisibility.MaxVisible];

let Email = {} as IColumn;
Email.name = "Email";
Email.size = ColumnSizes.StandardColumn;
Email.collapsable = ColumnCollapsable.collapsable;
Email.visibility = [
  ColumnVisibility.MaxVisible,
  ColumnVisibility.LargeVisible,
  ColumnVisibility.MediumVisible,
  ColumnVisibility.SmallVisible,
];

let NrTelefon = {} as IColumn;
NrTelefon.name = "Nr Telefon";
NrTelefon.size = ColumnSizes.StandardColumn;
NrTelefon.type = ColumnTypes.number;
NrTelefon.collapsable = ColumnCollapsable.collapsable;
NrTelefon.visibility = [
  ColumnVisibility.MaxVisible,
  ColumnVisibility.LargeVisible,
  ColumnVisibility.MediumVisible,
  ColumnVisibility.SmallVisible,
];

let DataNasterii = {} as IColumn;
DataNasterii.name = "Data Nasterii";
DataNasterii.size = ColumnSizes.StandardColumn;
DataNasterii.type = ColumnTypes.date;
DataNasterii.collapsable = ColumnCollapsable.collapsable;
DataNasterii.visibility = [
  ColumnVisibility.MaxVisible,
  ColumnVisibility.LargeVisible,
];

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
