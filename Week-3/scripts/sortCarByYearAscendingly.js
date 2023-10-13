function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // Sort untuk mengurutkan
  // callback function untuk mewakili dua objek mobil
  // descending dengan mengurangkan tahun pembuatan mobil car1 dengan car2.
  result.sort((car1, car2) => car1.year - car2.year);

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
