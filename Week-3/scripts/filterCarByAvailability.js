function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // buat perulangan untuk mengecek availablity mobil
  for (let i = 0; i < cars.length; i++) {
    // jika availablity mobil true maka push ke result
    if (cars[i].available === true) {
      result.push(cars[i]);
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
