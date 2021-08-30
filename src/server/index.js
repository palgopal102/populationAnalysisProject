const csv = require("csv-parser");
const fs = require("fs");
const population = [];
const saarcdata = [];
const aseandata = [];

const {
  indiaPopulationOverYear,
  aseanPopulationFor2015,
  totalPopulationOfSaarc,
  aseanPopulationvsYears,
} = require("./population");

fs.createReadStream(
  "/home/gopalpal/Gopal/MountBlue/Population_Project_BarChart/src/data/population-estimates_csv.csv"
)
  .pipe(csv({})) //pipe it with csv-parser to parse the data as object
  .on("data", (data) => population.push(data))
  .on("end", () => {
    fs.createReadStream(
      "/home/gopalpal/Gopal/MountBlue/Population_Project_BarChart/src/data/Asean.csv"
    )
      .pipe(csv({}))
      .on("data", (data) => aseandata.push(data))
      .on("end", () => {
        fs.createReadStream(
          "/home/gopalpal/Gopal/MountBlue/Population_Project_BarChart/src/data/saarc.csv"
        )
          .pipe(csv({}))
          .on("data", (data) => saarcdata.push(data))
          .on("end", () => {
            const indiaPopulationVsYear = indiaPopulationOverYear(population);
            const aseanPopulationForyear2015 = aseanPopulationFor2015(
              population,
              aseandata
            );
            const totalPopulationOftheSaarc = totalPopulationOfSaarc(
              population,
              saarcdata
            );
            const aseanPopulationvsallYears =
              aseanPopulationvsYears(population, aseandata);

            function dumpData(data, file) {
              const finished = (error) => {
                if (error) {
                  console.log(error);
                  return;
                }
              };

              const jsonData = JSON.stringify(data, null, 2);
              fs.writeFile(file, jsonData, finished);
            }

            dumpData(
              indiaPopulationVsYear,
              "/home/gopalpal/Gopal/MountBlue/Population_Project_BarChart/src/public/output/indiaPopulationVsYear.json"
            );
            dumpData(
              aseanPopulationForyear2015,
              "/home/gopalpal/Gopal/MountBlue/Population_Project_BarChart/src/public/output/aseanPopulationForyear2015.json"
            );
            dumpData(
              totalPopulationOftheSaarc,
              "/home/gopalpal/Gopal/MountBlue/Population_Project_BarChart/src/public/output/totalPopulationOftheSaarc.json"
            );
            dumpData(
              aseanPopulationvsallYears,
              "/home/gopalpal/Gopal/MountBlue/Population_Project_BarChart/src/public/output/aseanPopulationvsallYears.json"
            );
          });
      });
  });
