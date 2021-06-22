import { IColumnOptions } from "../../Grid/Interfaces/GridBody/IColumnOptions";
import { MinimumVisibility } from "../../Grid/CustomTypes/ColumnVisibility";
import { ColumnSizes } from "../../Grid/CustomTypes/ColumnSizes";
import { ColumnCollapsable } from "../../Grid/CustomTypes/ColumnCollapsable";
import { ColumnTypes } from "../../Grid/CustomTypes/ColumnTypes";
import { IHeader } from "../../Grid/Interfaces/GridBody/IHeader";
import { IGrouping } from "../../Grid/Interfaces/GridBody/IGrouping";
import { IColumn } from "../../Grid/Interfaces/GridBody/IColumn";

let FirstOption = {} as IColumnOptions;
FirstOption.name = "Disponibil";
FirstOption.icon = "fa fa-circle";

let SecondOption = {} as IColumnOptions;
SecondOption.name = "Ocupat";
SecondOption.icon = "fa fa-dot-circle-o";

let ThirdOption = {} as IColumnOptions;
ThirdOption.name = "Offline";
ThirdOption.icon = "fa fa-circle-o";

let Nr = {} as IColumn;
Nr.name = "Nr";
Nr.size = ColumnSizes.SmallColumn;
Nr.type = ColumnTypes.number;
Nr.collapsable = ColumnCollapsable.fixed;
Nr.minVisibility = MinimumVisibility.LargeVisible;

let Select = {} as IColumn;
Select.name = "Status";
Select.size = ColumnSizes.StandardColumn;
Select.type = ColumnTypes.select;
Select.options = [FirstOption, SecondOption, ThirdOption];
Select.collapsable = ColumnCollapsable.fixed;
Select.minVisibility = MinimumVisibility.SmallVisible;

let Prenume = {} as IColumn;
Prenume.name = "Prenume";
Prenume.size = ColumnSizes.StandardColumn;
Prenume.collapsable = ColumnCollapsable.fixed;
Prenume.minVisibility = MinimumVisibility.SmallVisible;

let Nume = {} as IColumn;
Nume.name = "Nume";
Nume.size = ColumnSizes.StandardColumn;
Nume.collapsable = ColumnCollapsable.fixed;
Nume.minVisibility = MinimumVisibility.SmallVisible;

let Valid = {} as IColumn;
Valid.name = "Valid";
Valid.type = ColumnTypes.boolean;
Valid.size = ColumnSizes.SmallColumn;
Valid.collapsable = ColumnCollapsable.collapsable;
Valid.minVisibility = MinimumVisibility.MaxVisible;

let Email = {} as IColumn;
Email.name = "Email";
Email.size = ColumnSizes.StandardColumn;
Email.collapsable = ColumnCollapsable.collapsable;
Email.minVisibility = MinimumVisibility.SmallVisible;

let NrTelefon = {} as IColumn;
NrTelefon.name = "Nr Telefon";
NrTelefon.size = ColumnSizes.StandardColumn;
NrTelefon.type = ColumnTypes.number;
NrTelefon.collapsable = ColumnCollapsable.collapsable;
NrTelefon.minVisibility = MinimumVisibility.SmallVisible;

let DataNasterii = {} as IColumn;
DataNasterii.name = "Data Nasterii";
DataNasterii.size = ColumnSizes.StandardColumn;
DataNasterii.type = ColumnTypes.date;
DataNasterii.collapsable = ColumnCollapsable.collapsable;
DataNasterii.minVisibility = MinimumVisibility.LargeVisible;

let Detalii = {} as IColumn;
Detalii.name = "Detalii";
Detalii.size = ColumnSizes.StandardColumn;
Detalii.collapsable = ColumnCollapsable.collapsable;
Detalii.minVisibility = MinimumVisibility.Invisible;

let firstHeader = {} as IGrouping;
firstHeader.name = "Utilizator";
firstHeader.columns = [Nr, Select, Prenume, Nume, Valid];

let secondHeader = {} as IGrouping;
secondHeader.name = "Detalii";
secondHeader.columns = [Email, NrTelefon, DataNasterii, Detalii];

let header = {} as IHeader;
header.name = "firstHeader";
header.headers = [firstHeader, secondHeader];

export const initialHeaders = [header];
