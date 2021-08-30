# Population Project

This project work on raw data of Population to calculate the following Statements:\

        1: India population over years - Bar Chart
        2: For the year 2015. Bar Chart of population of ASEAN countries
        3: Over the years, TOTAL population of SAARC countries
        4: Grouped Bar Chart - ASEAN population vs. years

### Running Locally

Make sure you have [Node.js](https://nodejs.org/en/) installed

```
$ git clone git@gitlab.com:gopal-pal/population-project.git
$ cd population-project
$ npm install
$ npm start
```

The data is dumped into the output folder as separate JSON files.

See the JSON files in the output folder for the result.

- indiaPopulationVsYear.json
- aseanPopulationForyear2015.json
- totalPopulationOftheSaarc.json
- aseanPopulationvsallYears.json

plotBarChart.js file conains the visualisation logic for plotting the results from json files.