# cookie-stand

## CF 201 Week 2 Project

### Code Plan

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
