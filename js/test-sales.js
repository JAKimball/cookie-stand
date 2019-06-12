
function testTotalByHour() {
  totalByHour.addToHour(1, 25);
  totalByHour.addToHour(1, 30);
  totalByHour.addToHour(3, 40);
  console.log(`${totalByHour.hourTotal(1)} ${typeof(totalByHour.hourTotal(1))}`);
  console.log(`${totalByHour.hourTotal(3)} ${typeof(totalByHour.hourTotal(3))}`);
}

testTotalByHour();
