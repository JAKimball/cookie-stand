'use strict';

/*

Code Plan

- Implement a `totalByHour` object with *static* methods for adding and reporting by hour.
- By function create a global array for hours and populate it with strings to label each hour.
- Constructor function for a generic cookieShop
  - Function arguments
    - `locationName` - The name of the location.  Used in the report row headers.
    - `minCustPerHour` - The minimum number of customers per hour.
    - `maxCustPerHour` - The maximum number of customers per hour.
    - `avePerCust` - The average number of cookies purchased per customer.
  - Properties
    - `locationName` - The name of the location.  Used in the report row headers.
    - `minCustPerHour` - The minimum number of customers per hour.
    - `maxCustPerHour` - The maximum number of customers per hour.
    - `avePerCust` - The average number of cookies purchased per customer.
- Refactor the following as prototype methods of the cookieShop object
  - `simulateCustomersPerHour()` - Random min thru max based on properties
  - `simulateDay()` - Loop thru hours and calculate number of cookies per hour for each hour and store in array property.
    - `cookieCountsForHours: []`
  - `calculateTotal()` - Iterate through cookieCountsForHours array and return the total for the location
- Implement a global `renderReportTable()` function which does the following
  - Find the HTML element to accept the table
  - Create the `<table>` element
  - Call a global `renderReportHeader()` function with the following steps to create the table header
    - Create the `<thead>` element
    - Create the `<tr>` element
    - Create the `<th>` header cell elements and insert them into the header `<tr>`
    - Insert (appendChild) the header `<tr>` into the `<thead>`
  - Insert the `<thead>` element into the previously created `<table>` element
  - Call a global `renderReportBody()` function with the following steps to create the table body
    - Create the `<tbody>` element
    - For each location do the following
      - Call a prototype method (`renderReportRow()`) of the cookieShop object which does the following
        - Create the `<tr>` element to accept the row of results for the location
        - Create and insert into the `<tr>` a `<td>` for the location name
        - Loop thru hours and Create the `<td>` elements for each for the location of the row and append them to the `<tr>`
        - Create the `<td>` with the location total (from calculateTotal) and append to the `<tr>`
      - Insert the completed `<tr>` for the location into the `<tbody>` element
  - Insert the `<tbody>` element into the previously created `<table>` element
  - Call a global `renderReportFooter()` function with the following steps to create the table footer
    - With a nested loop, iterate thru all locations and hours to add data to the `totalByHour` object
    - Create the `<tfoot>` element
    - Create the `<tr>` element
    - Loop thru hours and Create the `<td>` elements for each hour with data reported from the `totalByHour` object and append them to the `<tr>`
    - Append the `<tr>` to the `<tfoot>` element
  - Append the `<tfoot>` element to the `<table>` element

*/

// -- Utility functions --

function formatHour(hour) {
  if (hour < 12) {
    return `${hour}am`;
  } else {
    return `${((hour - 1) % 12) + 1}pm`;
  }
}

// -- The array of hours --

var hours = [];

hours.initialize = function (minHour, maxHour) {
  // Clear first in case we call again
  while (hours.length > 0) {
    hours.pop();
  }

  for (var hour = minHour; hour <= maxHour; hour++) {
    this.push(formatHour(hour));
  }
};

// -- totalByHour --
// Object with static methods to track total by hour
//   by creating properties to store the hour totals.

var totalByHour = {};

totalByHour.addToHour = function (hourIndex, amount) {
  this[hourIndex] = this.hourTotal(hourIndex) + amount;
};

totalByHour.hourTotal = function (hourIndex) {
  if (typeof this[hourIndex] === 'undefined') {
    return 0;
  } else {
    return this[hourIndex];
  }
};

totalByHour.reset = function () {
  for (var i = 0; i < 24; i++) {
    this[i] = 0;
  }
};

// -- CookieShop --

// Our CookieShop object constructor function
function CookieShop(locationName, minCustPerHour, maxCustPerHour, avePerCust) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avePerCust = avePerCust;
  this.cookieCountsForHours = [];
  CookieShop.list.push(this);
}
CookieShop.list = [];

// Random min thru max based on properties
CookieShop.prototype.simulateCustomersPerHour = function () {
  var result = Math.floor(Math.random() * ((this.maxCustPerHour - this.minCustPerHour) + 1)) + this.minCustPerHour;
  console.log(`CustomersPerHour: ${result}`);
  return result;
};

// Loop thru hours and calculate number of cookies per hour for each hour and store in array property
CookieShop.prototype.simulateDay = function () {
  for (var i = 0; i < hours.length; i++) {
    this.cookieCountsForHours.push(Math.round(this.simulateCustomersPerHour() * this.avePerCust));
  }
};

CookieShop.prototype.calculateTotal = function () {
  var totalProduct = 0;
  for (var i = 0; i < this.cookieCountsForHours.length; i++) {
    totalProduct = totalProduct + this.cookieCountsForHours[i];
  }
  return totalProduct;
};

CookieShop.prototype.renderReportRow = function () {
  var newRow = document.createElement('tr');

  // Location Name
  var newCell = document.createElement('td');
  newCell.textContent = this.locationName;
  newRow.appendChild(newCell);

  // List the hours
  for (var i = 0; i < this.cookieCountsForHours.length; i++) {
    newCell = document.createElement('td');
    newCell.textContent = this.cookieCountsForHours[i];
    newRow.appendChild(newCell);
  }

  // Daily Location Total
  newCell = document.createElement('td');
  newCell.textContent = this.calculateTotal();
  newRow.appendChild(newCell);
  return newRow;
};

// -- Our Initialization Data for Each Shop --

var location1 = {
  locationName: '1st and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avePerCust: 6.3,
};

var location2 = {
  locationName: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avePerCust: 1.2,
};

var location3 = {
  locationName: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avePerCust: 3.7,
};

var location4 = {
  locationName: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avePerCust: 2.3,
};

var location5 = {
  locationName: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avePerCust: 4.6,
};

function createShop(shopData) {
  new CookieShop(shopData.locationName, shopData.minCustPerHour, shopData.maxCustPerHour, shopData.avePerCust);
}

function createShops() {
  createShop(location1);
  createShop(location2);
  createShop(location3);
  createShop(location4);
  createShop(location5);
}

function simulateDayForAll() {
  for (var i = 0; i < CookieShop.list.length; i++) {
    CookieShop.list[i].simulateDay();
  }
}

function generateTotalsByHour() {
  totalByHour.reset();
  for (var i = 0; i < CookieShop.list.length; i++) {
    for (var j = 0; j < CookieShop.list[i].cookieCountsForHours.length; j++) { totalByHour.addToHour(j, CookieShop.list[i].cookieCountsForHours[j]);
    }
  }
}

function calculateGrandTotal() {
  var grandTotal = 0;
  for (var i = 0; i < CookieShop.list.length; i++) {
    grandTotal += CookieShop.list[i].calculateTotal();
  }
  return grandTotal;
}

// --- Global Report Rendering Functions ---

function renderReportHeader() {
  var newHeader = document.createElement('thead');
  var newRow = document.createElement('tr');

  // Upper left is blank
  newRow.appendChild(document.createElement('th'));

  // List the hours
  for (var i = 0; i < hours.length; i++) {
    var newCell = document.createElement('th');
    newCell.textContent = hours[i];
    newRow.appendChild(newCell);
  }

  // Daily Location Total
  newCell = document.createElement('th');
  newCell.textContent = 'Daily Location Total';
  newRow.appendChild(newCell);
  newHeader.appendChild(newRow);
  return newHeader;
}

function renderReportBody() {
  var newBody = document.createElement('tbody');
  for (var i = 0; i < CookieShop.list.length; i++){
    var newRow = CookieShop.list[i].renderReportRow();
    newBody.appendChild(newRow);
  }
  return newBody;
}

function renderReportFooter() {
  var newFooter = document.createElement('tfoot');
  var newRow = document.createElement('tr');

  // Totals
  var newCell = document.createElement('td');
  newCell.textContent = 'Total';
  newRow.appendChild(newCell);

  // List the hours
  for (var i = 0; i < hours.length; i++) {
    newCell = document.createElement('td');
    newCell.textContent = totalByHour[i];
    newRow.appendChild(newCell);
  }

  // Grand Total
  newCell = document.createElement('td');
  newCell.textContent = calculateGrandTotal();
  newRow.appendChild(newCell);
  newFooter.appendChild(newRow);
  return newFooter;
}

function renderReportTable() {
  var newTable = document.createElement('table');
  newTable.appendChild(renderReportHeader());
  newTable.appendChild(renderReportBody());
  newTable.appendChild(renderReportFooter());
  return newTable;
}

// ------ Main code -------

hours.initialize(6, 20);
createShops();
simulateDayForAll();
generateTotalsByHour();

// Find the element we wish to append the table to
var main = document.getElementById('ReportContainer');
main.appendChild(renderReportTable());
