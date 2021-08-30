// 1: India population over years

function indiaPopulationOverYear(population) {
  var result = {};

  for (const i of population) {
    if (i.Region == "India") {
      result[i.Year] = Number(i.Population);
    }
  }

  return result;
}

// 2: For the year 2015. population of ASEAN countries

function aseanPopulationFor2015(population, aseandata) {
  result = {};

  for (let i = 0; i < aseandata.length; i++) {
    var temp = aseandata[i].Country;

    for (let j = 0; j < population.length; j++) {
      if (population[j].Region == temp && population[j].Year == 2015) {
        result[population[j].Region] = Number(population[j].Population);
      }
    }
  }

  return result;
}

// 3: Over the years, TOTAL population of SAARC countries

function totalPopulationOfSaarc(population, saarcdata) {
    var result = {};

    for (let i = 0; i < population.length; i++) {
      for (let j = 0; j < saarcdata.length; j++) {
        if (saarcdata[j].Country == population[i].Region) {
          if (population[i].Year in result) {
            result[population[i].Year] += Number(population[i].Population);
          } else {
            result[population[i].Year] = Number(population[i].Population);
          }
        }
      }
    }

  return result;
}

// 4: ASEAN population vs. years

function aseanPopulationvsYears(population, aseandata) {
  var result = {};

  for (let i = 0; i < population.length; i++) {
    for (let j = 0; j < aseandata.length; j++) {
      if (aseandata[j].Country == population[i].Region) {
        if (population[i].Year in result) {
          result[population[i].Year] += Number(population[i].Population);
        } else {
          result[population[i].Year] = Number(population[i].Population);
        }
      }
    }
  }

  return result;
}

module.exports = {
  indiaPopulationOverYear,
  aseanPopulationFor2015,
  totalPopulationOfSaarc,
  aseanPopulationvsYears,
};
