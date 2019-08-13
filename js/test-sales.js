
function testTotalByHour() {
  totalByHour.addToHour(1, 25);
  totalByHour.addToHour(1, 30);
  totalByHour.addToHour(3, 40);
  for (var i = 0; i < 24; i++) {
    console.log(`${totalByHour.hourTotal(i)} ${typeof (totalByHour.hourTotal(i))}`);
  }
  totalByHour.reset();
  for (var i = 0; i < 24; i++) {
    console.log(`${totalByHour.hourTotal(i)} ${typeof (totalByHour.hourTotal(i))}`);
  }
  totalByHour.addToHour(1, 25);
  totalByHour.addToHour(1, 30);
  totalByHour.addToHour(3, 40);
  for (var i = 0; i < 24; i++) {
    console.log(`${totalByHour.hourTotal(i)} ${typeof (totalByHour.hourTotal(i))}`);
  }
  hours.initialize(6, 20);
  console.log(hours);
  console.log(hours.length);
}

// testTotalByHour();
