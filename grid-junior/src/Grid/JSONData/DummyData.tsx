export const dummy_data = [] as any;

let keys = [
  "Status",
  "Prenume",
  "Nume",
  "Validare",
  "Email",
  "Nr Telefon",
  "Data Nasterii",
];

let intial_values = [
  "Status",
  "John",
  "Doe",
  true,
  "jdoe@gmail.com",
  "010292991",
  "21.03.1983",
];

let selection_statuses = ["Disponibil", "Ocupat", "Offline"];

let boolean_statuses = [true, false];

var characters = "abcdefghiklmnopqrstuvwxyz";

function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

for (var i = 0; i < 100; i++) {
  const current: { [x: string]: any } = {};

  keys.forEach((type: string, k_key: number) => {
    intial_values.forEach((value: any, v_key: number) => {
      if (k_key === 0) {
        value =
          selection_statuses[
            Math.floor(Math.random() * selection_statuses.length)
          ];
      }

      if (k_key === 1 || k_key === 2 || k_key === 4) {
        value =
          characters[Math.floor(Math.random() * 20)] +
          characters[Math.floor(Math.random() * 20)] +
          value;
      }

      if (k_key === 3) {
        value = boolean_statuses[Math.floor(Math.random() * 2)];
      }

      if (k_key === 5) {
        value = Math.floor(Math.random() * 1000000000).toString();
      }

      if (k_key === 6) {
        let generatedDate = randomDate(
          new Date(1980, 0, 0),
          new Date(2000, 0, 0)
        );

        generatedDate.setHours(0, 0, 0, 0);

        value = generatedDate.toString();
      }

      if (k_key === v_key) {
        current[type] = value;
      }
    });
  });

  dummy_data.push(current);
}

dummy_data.forEach((x: any, y: number) => {
  x["Prenume"] = y.toString().concat(x["Prenume"]);
});
