export const headers = [
  {
    name: "firstHeader",
    headers: [
      {
        name: "Utilizator",
        columns: [
          { name: "Status", size: "standard", type: "select" },
          { name: "Prenume", size: "standard" },
          { name: "Nume", size: "standard" },
        ],
      },
      {
        name: "Detalii",
        columns: [
          { name: "Email", size: "standard" },
          { name: "Nr Telefon", size: "standard", type: "number" },
        ],
      },
    ],
  },
  {
    name: "secondHeader",
    headers: [
      {
        name: "Examinare",
        columns: [
          { name: "Status", size: "standard" },
          { name: "Data", size: "standard", type: "date" },
          { name: "Urgenta", size: "standard" },
          { name: "Termen Limita", size: "standard", type: "date" },
        ],
      },
      {
        name: "Detalii Examinare",
        columns: [
          { name: "Tip", size: "standard" },
          { name: "Centru Imagistica", size: "standard" },
          { name: "Rezultate", size: "thin" },
          { name: "Imagini", size: "thin" },
        ],
      },
    ],
  },
];
