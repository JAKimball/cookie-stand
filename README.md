# cookie-stand

## CF 201 Week 2 Project

### Code Plan

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
