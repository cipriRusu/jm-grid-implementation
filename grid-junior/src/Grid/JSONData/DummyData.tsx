export const dummy_data = [] as any;

let keys = ["Prenume", "Nume", "Email", "Nr Telefon"];

let res = ["John", "Doe", "jdoe@gmail.com", "010292991"];

var characters = "abcdefghiklmnopqrstuvwxyz";

for (var i = 0; i < 100; i++) {
  const current: { [x: string]: any } = {};

  keys.forEach((type: string, k_key: number) => {
    res.forEach((value: string, v_key: number) => {
      if (k_key === 0 || k_key === 1 || k_key === 2) {
        value =
          characters[Math.floor(Math.random() * 20)] +
          characters[Math.floor(Math.random() * 20)] +
          value;
      }

      if (k_key === 3) {
        value = Math.floor(Math.random() * 1000000000).toString();
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
