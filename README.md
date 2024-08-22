# Solving Gold Bars balancing game

## Solution

The most efficient way to solve this problem is to break the 9 gold bars into 3 separate groups. 
1. Weigh 2 of the groups against each other
   - If they weight the same, then the last group which was not tested contains the fake bar
   - If the first group weighs less, then it is this group that contains the fake bar. Otherwise, it would be the other group
2. From the group that was determined to have the fake bar, weigh one of the bars against another
   - If they weigh the same, then the last bar which was not tested is the fake one
   - If the first weighs less, tehn it is this bar that is fake. Otherwise, the other bar is fake

## Set Up
1. Install [Node.js](https://nodejs.org/en)

2. Clone the repository:
   ```
   git clone https://github.com/vincent-dao/goldBars.git
   ```
3. Navigate to the directory of the repositry:
   ```
   cd goldBars
   ```

4. Install the project dependencies in the root of the project:
   ```
   npm install
   ```
   
5. I used Cypress to complete this project. In order to run the tests, install Cypress in the root of the project:
   ```
   npm install cypress --save-dev
   ```
   or
   ```
   yarn add cypress --dev
   ```

## Running the Tests

The tests can either be run via the browser (Chrome), or in the terminal
1. To run the test visually on Chrome:
   ```
   npx cypress open
   ```
   This will bring up the Cypress application. Select "E2E Testing" -> "Chrome (Start E2E Testing in Chrome)". There should only be 1 file to run, `goldBars.cy.js`. Clicking on it will run the test on an automated Chrome window, where you can see the actions being done.

   
2. To run the test in the terminal:
   ```
   npx cypress run
   ```
