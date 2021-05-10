export const headers = [
  {
    name: "firstHeader",
    headers: [
      {
        name: "Utilizator",
        columns: [
          {
            name: "Status",
            size: "StandardColumn",
            type: "select",
            options: [
              { Disponibil: "fa fa-circle" },
              { Ocupat: "fa fa-dot-circle-o" },
              { Offline: "fa fa-circle-o" },
            ],
          },
          { name: "Prenume", size: "StandardColumn" },
          { name: "Nume", size: "StandardColumn" },
          { name: "Valid", size: "SmallColumn", type: "boolean" },
        ],
      },
      {
        name: "Detalii",
        columns: [
          { name: "Email", size: "StandardColumn" },
          { name: "Nr Telefon", size: "StandardColumn", type: "number" },
          { name: "Data Nasterii", size: "StandardColumn", type: "date" },
        ],
      },
    ],
  },
];

export const headerSize = {
  SmallColumn: "1fr",
  StandardColumn: "2fr",
  LargeColumn: "3fr",
};
