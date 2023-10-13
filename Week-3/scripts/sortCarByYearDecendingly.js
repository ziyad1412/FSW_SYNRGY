function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // Sort untuk mengurutkan
  // callback function untuk mewakili dua objek mobil
  // descending dengan mengurangkan tahun pembuatan mobil car2 dengan car1.
  result.sort((car1, car2) => car2.year - car1.year);

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
