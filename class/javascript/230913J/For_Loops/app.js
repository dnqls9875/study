const seatingChart = [
  ["Kristen", "Erik", "Namita"],
  ["Geiffery", "Juanita", "Antoino", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Erika"],
];

for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  console.log(`Row #${i + 1}`);
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}

const str = "LOL";

for (let i = 0; i <= 4; i++) {
  console.log(`Outer : ${i}`);
  for (let j = 0; j < str.length; j++) {
    console.log(`  Inner : ${str[j]} `);
  }
}

let num = 0;
while (num <= 4) {
  console.log(num);
  num++;
}
