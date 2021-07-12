import { IColumn, IColumnOptions, IGrouping, IHeader}  from "custom-grid-jm";
import * as faker from 'faker';
const TOTAL_ENTRIES = 100;

export class DummyData {
  generateDummyData(headerData: IHeader[]) {
    let dummyData = [] as any;

    let allKeys = headerData
      .map((x: IHeader) => {
        return x.headers.map((y: IGrouping) => {
          return y.columns.map((z: IColumn) => {
            return z;
          });
        });
      })
      .flat(3);

    let count = new Array(TOTAL_ENTRIES).fill(0).map((_, i) => {
      return i + 1;
    });

    count.map((_x: any, valueCount: number) => {
      let current: { [x: string]: any } = {};

      allKeys.forEach((x: IColumn) => {
        switch (x.type) {
          case undefined:
          case "text":
            switch (x.name) {
              case "Email":
                current[x.name] = faker.internet.email();
                break;
              case "Prenume":
              case "Nume":
                current[x.name] = faker.name.firstName();
                break;
              default:
                current[x.name] = faker.lorem.word();
            }
            break;
          case "boolean":
            current[x.name] = faker.datatype.boolean();
            break;
          case "number":
            switch (x.name) {
              case "Nr":
                current[x.name] = valueCount;
                break;
              case "Nr Telefon":
                current[x.name] = faker.phone.phoneNumber("###-#####-##")
                break;
              default:
                current[x.name] = faker.datatype.number(10000000);
            }
            break;
          case "date":
            current[x.name] = faker.datatype.datetime();
            break;
          case "select":
            let options = this.extractSelectionOptions(x, headerData);
            current[x.name] =
              options[Math.floor(Math.random() * options.length)];
            break;
        }
      });

      return dummyData.push(current);
    });

    return dummyData;
  }

  extractSelectionOptions(requiredColumn: IColumn, header: IHeader[]) {
    let options = header
      .map((header: IHeader) => {
        return header.headers.map((columnGrouping: IGrouping) => {
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
