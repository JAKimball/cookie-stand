'use strict';

/*

Code Plan

- Implement a `totalByHour` object with *static* methods for adding and reporting by hour.
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
  - simulateCustomersPerHour() - Random min thru max based on properties
  - simulateDay() - Loop thru hours and calculate number of cookies per hour for each hour and store in array property.
    - `hours: []`
    - `cookieCountsForHours: []`
  - `calculateTotal()` - Iterate through cookieCountsForHours array and return the total for the location
- Implement a global `renderReportTable()` function which does the following
  - Find the HTML element to accept the table
  - Create the `<table>` element
  - Call a prototype method (`createReportHeader`) with the following steps to create the table header
    - Create the `<thead>` element
    - Create the `<tr>` element
    - Create the `<th>` header cell elements and insert them into the header `<tr>`
    - Insert (appendChild) the header `<tr>` into the `<thead>`
  - Insert the `<thead>` element into the previously created `<table>` element
  - Call a prototype method (`createReportBody`) with the following steps to create the table body
    - Create the `<tbody>` element
    - For each location do the following
      - Create the `<tr>` element to accept the row of results for the location
      - Create and insert into the `<tr>` a `<td>` for the location name
      - Loop thru hours and Create the `<td>` elements for each for the location of the row and append them to the `<tr>`
      - Create the `<td>` with the location total (from calculateTotal) and append to the `<tr>`
      - Insert the completed `<tr>` for the location into the `<tbody>` element
  - Insert the `<tbody>` element into the previously created `<table>` element
  - Call a prototype method (`createReportFooter`) with the following steps to create the table footer
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

// -- totalByHour --

var totalByHour = {};

totalByHour.addToHour = function (hourNum, amount) {
  if (typeof this[hourNum] === 'undefined') {
    this[hourNum] = amount;
  } else {
    this[hourNum] = this[hourNum] + amount;
  }
};

totalByHour.hourTotal = function (hourNum) {
  return this[hourNum];
};

// -- CookieShop --

// Our CookieShop object constructor function
function CookieShop(locationName, minCustPerHour, maxCustPerHour, avePerCust) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avePerCust = avePerCust;
  this.hours = [];
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
  for (var hour = 6; hour <= 20; hour++) {
    this.hours.push(hour);
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

CookieShop.prototype.renderTableAsList = function () {
  // Find the element we wish to append the list to
  var main = document.getElementById('ReportContainer');

  // Create and append the list header
  var newHeader = document.createElement('h2');
  newHeader.textContent = this.locationName;
  newHeader.className = 'cookie-list-header';
  main.appendChild(newHeader);

  // Create and append the list element
  var newList = document.createElement('ul');
  newList.className = 'cookie-list';
  main.appendChild(newList);

  // Iterate through the list appending each to the ul
  for (var i = 0; i < this.hours.length; i++) {
    newList.appendChild(this.createListItem(i));
  }

  // Append the total to the end of the list
  var newItem = document.createElement('li');
  newItem.textContent = `Total: ${this.calculateTotal()} cookies`;
  newList.appendChild(newItem);
};

CookieShop.prototype.createListItem = function (index) {
  // Create a new element
  var newItem = document.createElement('li');

  // Add text
  newItem.textContent = `${formatHour(this.hours[index])}: ${this.cookieCountsForHours[index]} cookies`;

  return newItem;
};

// -- Our Data --

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

function processAll() {
  for (var i = 0; i < CookieShop.list.length; i++) {
    CookieShop.list[i].simulateDay();
  }

  for (i = 0; i < CookieShop.list.length; i++) {
    CookieShop.list[i].renderTableAsList();
  }
}

createShops();
processAll();


