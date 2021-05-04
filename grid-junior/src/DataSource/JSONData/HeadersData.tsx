export const headers = [
  {
    name: "firstHeader",
    headers: [
      {
        name: "Utilizator",
        columns: [
          {
            name: "Status",
            size: "standard",
            type: "select",
            options: [
              { Disponibil: "fa fa-circle" },
              { Ocupat: "fa fa-dot-circle-o" },
              { Offline: "fa fa-circle-o" },
            ],
          },
          { name: "Prenume", size: "standard" },
          { name: "Nume", size: "standard" },
          { name: "Validare", size: "standard", type: "boolean" },
        ],
      },
      {
        name: "Detalii",
        columns: [
          { name: "Email", size: "standard" },
          { name: "Nr Telefon", size: "standard", type: "number" },
          { name: "Data Nasterii", size: "standard", type: "date" },
        ],
      },
    ],
  },
];
