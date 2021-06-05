import { IColumn } from "../../Grid/Interfaces/GridBody/IColumn";
import { IColumnOptions } from "../../Grid/Interfaces/GridBody/IColumnOptions";
import { IColumns } from "../../Grid/Interfaces/GridBody/IColumns";
import { IHeader } from "../../Grid/Interfaces/GridBody/IHeader";

const ALPHABET = "abcdefghiklmnopqrstuvwxyz";
const TOTAL_ENTRIES = 100;

export class DummyData {
  generateDummyData(headerData: IHeader[]) {
    let dummyData = [] as any;

    let allKeys = headerData
      .map((x: IHeader) => {
        return x.headers.map((y: IColumns) => {
          return y.columns.map((z: IColumn) => {
            return z;
          });
        });
      })
      .flat(3);

    let count = new Array(TOTAL_ENTRIES).fill(0).map((_, i) => {
      return i + 1;
    });

    count.map((x) => {
      let current: { [x: string]: any } = {};

      allKeys.forEach((x: IColumn, y: number) => {
        if (x.type === undefined || x.type === "text") {
          current[x.name] =
            x.name +
            ALPHABET[Math.floor(Math.random() * 20)] +
            ALPHABET[Math.floor(Math.random() * 20)];
        }

        if (x.type === "boolean") {
          current[x.name] = Math.random() >= 0.5;
        }

        if (x.type === "number") {
          current[x.name] = Math.floor(Math.random() * 1000000000).toString();
        }

        if (x.type === "date") {
          let generatedDate = this.generateRandomDate(
            new Date(1980, 0, 0),
            new Date(2000, 0, 0)
          );

          generatedDate.setHours(0, 0, 0, 0);

          current[x.name] = generatedDate.toString();
        }

        if (x.type === "select") {
          let options = this.extractSelectionOptions(x, headerData);
          current[x.name] = options[Math.floor(Math.random() * options.length)];
        }
      });

      return dummyData.push(current);
    });

    return dummyData;
  }

  extractSelectionOptions(requiredColumn: IColumn, header: IHeader[]) {
    let options = header
      .map((header: IHeader) => {
        return header.headers.map((columnGrouping: IColumns) => {
          return columnGrouping.columns.map((column: IColumn) => {
            return requiredColumn.name === column.name &&
              requiredColumn.options !== undefined
              ? column.options
              : undefined;
          });
        });
      })
      .flat(3)
      .filter((x: IColumnOptions) => {
        return x !== undefined;
      })
      .map((x: IColumnOptions) => {
        return x.name;
      });

    return options;
  }

  generateRandomDate(start: Date, end: Date) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }
}
