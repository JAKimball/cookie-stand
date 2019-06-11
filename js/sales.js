'use strict';

/*

Code Plan

- An object for each shop
- Objects should each follow the same pattern
- Properties
  - `minCustPerHour` - The minimum number of customers per hour.
  - `maxCustPerHour` - The maximum number of customers per hour.
  - `avePerCust` - The average number of cookies purchased per customer.
- Methods
  - simulateCustomersPerHour() - Random min thru max based on properties
    - simulateDay() - Loop thru hours and calculate number of cookies per hour for each hour and store in array property.
      - `hours: []`
      - `cookieCountsForHours: []`
  - calculateTotal - Iterate through cookieCountsForHours array and return the total for the location
  - renderTableAsList
    - Create header
    - Create `<ul>` element
    - Loop and create and insert `<li>` elements
    - Call calculateTotal
    - Create and sum total `<li>` element

*/

function formatHour(hour) {
  if (hour < 12) {
    return `${hour}am`;
  } else {
    return `${((hour - 1) % 12) + 1}pm`;
  }
}

var location1 = {
  locationName: '1st and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avePerCust: 6.3,
  hours: [],
  cookieCountsForHours: [],

  simulateCustomersPerHour: function () { // Random min thru max based on properties
    var result = Math.floor(Math.random() * ((this.maxCustPerHour - this.minCustPerHour) + 1)) + this.minCustPerHour;
    console.log(`CustomersPerHour: ${result}`);
    return result;
  },

  simulateDay: function () { // Loop thru hours and calculate number of cookies per hour for each hour and store in array property
    for (var hour = 6; hour <= 20; hour++) {
      this.hours.push(hour);
      this.cookieCountsForHours.push(Math.round(this.simulateCustomersPerHour() * this.avePerCust));
    }
  },

  calculateTotal: function () {
    var totalProduct = 0;
    for (var i = 0; i < this.cookieCountsForHours.length; i++) {
      totalProduct = totalProduct + this.cookieCountsForHours[i];
    }
    return totalProduct;
  },

  renderTableAsList: function () { //
    // Find the element we wish to append the list to
    var main = document.getElementById('ListContainer');

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
  },

  createListItem: function (index) {
    // Create a new element
    var newItem = document.createElement('li');

    // Add text
    newItem.textContent = `${formatHour(this.hours[index])}: ${this.cookieCountsForHours[index]} cookies`;

    return newItem;
  },
};

var location2 = {
  locationName: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avePerCust: 1.2,
  hours: [],
  cookieCountsForHours: [],

  simulateCustomersPerHour: function () { // Random min thru max based on properties
    var result = Math.floor(Math.random() * ((this.maxCustPerHour - this.minCustPerHour) + 1)) + this.minCustPerHour;
    console.log(`CustomersPerHour: ${result}`);
    return result;
  },

  simulateDay: function () { // Loop thru hours and calculate number of cookies per hour for each hour and store in array property
    for (var hour = 6; hour <= 20; hour++) {
      this.hours.push(hour);
      this.cookieCountsForHours.push(Math.round(this.simulateCustomersPerHour() * this.avePerCust));
    }
  },

  calculateTotal: function () {
    var totalProduct = 0;
    for (var i = 0; i < this.cookieCountsForHours.length; i++) {
      totalProduct = totalProduct + this.cookieCountsForHours[i];
    }
    return totalProduct;
  },

  renderTableAsList: function () { //
    // Find the element we wish to append the list to
    var main = document.getElementById('ListContainer');

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
  },

  createListItem: function (index) {
    // Create a new element
    var newItem = document.createElement('li');

    // Add text
    newItem.textContent = `${formatHour(this.hours[index])}: ${this.cookieCountsForHours[index]} cookies`;

    return newItem;
  },
};

var location3 = {
  locationName: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avePerCust: 3.7,
  hours: [],
  cookieCountsForHours: [],

  simulateCustomersPerHour: function () { // Random min thru max based on properties
    var result = Math.floor(Math.random() * ((this.maxCustPerHour - this.minCustPerHour) + 1)) + this.minCustPerHour;
    console.log(`CustomersPerHour: ${result}`);
    return result;
  },

  simulateDay: function () { // Loop thru hours and calculate number of cookies per hour for each hour and store in array property
    for (var hour = 6; hour <= 20; hour++) {
      this.hours.push(hour);
      this.cookieCountsForHours.push(Math.round(this.simulateCustomersPerHour() * this.avePerCust));
    }
  },

  calculateTotal: function () {
    var totalProduct = 0;
    for (var i = 0; i < this.cookieCountsForHours.length; i++) {
      totalProduct = totalProduct + this.cookieCountsForHours[i];
    }
    return totalProduct;
  },

  renderTableAsList: function () { //
    // Find the element we wish to append the list to
    var main = document.getElementById('ListContainer');

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
  },

  createListItem: function (index) {
    // Create a new element
    var newItem = document.createElement('li');

    // Add text
    newItem.textContent = `${formatHour(this.hours[index])}: ${this.cookieCountsForHours[index]} cookies`;

    return newItem;
  },
};

var location4 = {
  locationName: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avePerCust: 2.3,
  hours: [],
  cookieCountsForHours: [],

  simulateCustomersPerHour: function () { // Random min thru max based on properties
    var result = Math.floor(Math.random() * ((this.maxCustPerHour - this.minCustPerHour) + 1)) + this.minCustPerHour;
    console.log(`CustomersPerHour: ${result}`);
    return result;
  },

  simulateDay: function () { // Loop thru hours and calculate number of cookies per hour for each hour and store in array property
    for (var hour = 6; hour <= 20; hour++) {
      this.hours.push(hour);
      this.cookieCountsForHours.push(Math.round(this.simulateCustomersPerHour() * this.avePerCust));
    }
  },

  calculateTotal: function () {
    var totalProduct = 0;
    for (var i = 0; i < this.cookieCountsForHours.length; i++) {
      totalProduct = totalProduct + this.cookieCountsForHours[i];
    }
    return totalProduct;
  },

  renderTableAsList: function () { //
    // Find the element we wish to append the list to
    var main = document.getElementById('ListContainer');

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
  },

  createListItem: function (index) {
    // Create a new element
    var newItem = document.createElement('li');

    // Add text
    newItem.textContent = `${formatHour(this.hours[index])}: ${this.cookieCountsForHours[index]} cookies`;

    return newItem;
  },
};

var location5 = {
  locationName: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avePerCust: 4.6,
  hours: [],
  cookieCountsForHours: [],

  simulateCustomersPerHour: function () { // Random min thru max based on properties
    var result = Math.floor(Math.random() * ((this.maxCustPerHour - this.minCustPerHour) + 1)) + this.minCustPerHour;
    console.log(`CustomersPerHour: ${result}`);
    return result;
  },

  simulateDay: function () { // Loop thru hours and calculate number of cookies per hour for each hour and store in array property
    for (var hour = 6; hour <= 20; hour++) {
      this.hours.push(hour);
      this.cookieCountsForHours.push(Math.round(this.simulateCustomersPerHour() * this.avePerCust));
    }
  },

  calculateTotal: function () {
    var totalProduct = 0;
    for (var i = 0; i < this.cookieCountsForHours.length; i++) {
      totalProduct = totalProduct + this.cookieCountsForHours[i];
    }
    return totalProduct;
  },

  renderTableAsList: function () { //
    // Find the element we wish to append the list to
    var main = document.getElementById('ListContainer');

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
  },

  createListItem: function (index) {
    // Create a new element
    var newItem = document.createElement('li');

    // Add text
    newItem.textContent = `${formatHour(this.hours[index])}: ${this.cookieCountsForHours[index]} cookies`;

    return newItem;
  },
};

function processAll() {
  location1.simulateDay();
  location1.renderTableAsList();

  location2.simulateDay();
  location2.renderTableAsList();

  location3.simulateDay();
  location3.renderTableAsList();

  location4.simulateDay();
  location4.renderTableAsList();

  location5.simulateDay();
  location5.renderTableAsList();
}

processAll();


