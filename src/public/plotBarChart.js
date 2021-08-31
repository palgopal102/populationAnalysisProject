document.addEventListener("DOMContentLoaded", function () {
  fetch("output/indiaPopulationVsYear.json")
    .then((response) => response.json())
    .then((data) => {
      let plotdata = Object.entries(data);

      Highcharts.chart("indiapopulationforyear2015", {
        chart: {
          type: "column",
        },
        title: {
          text: "India population over years",
        },
        xAxis: {
          type: "category",
          labels: {
            rotation: -45,
            style: {
              fontSize: "13px",
              fontFamily: "Verdana, sans-serif",
            },
          },
        },
        yAxis: {
          min: 0,
          title: {
            text: "Population (millions)",
          },
        },
        legend: {
          enabled: false,
        },

        series: [
          {
            name: "Population",
            data: plotdata,
            dataLabels: {
              enabled: true,
              rotation: -90,
              color: "#FFFFF",
              align: "right",
              format: "{point.y:.1f}", // one decimal
              y: 10, // 10 pixels down from the top
              style: {
                fontSize: "13px",
                fontFamily: "Verdana, sans-serif",
              },
            },
          },
        ],
      });
    })
    .catch((error) => console.error(error));
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("output/aseanPopulationForyear2015.json")
    .then((response) => response.json())
    .then((data) => {
      let plotdata = Object.entries(data);

      Highcharts.chart("aseanPopulationForyear2015", {
        chart: {
          type: "column",
        },
        title: {
          text: "ASEAN Population For Year 2015",
        },
        xAxis: {
          type: "category",
          labels: {
            rotation: -45,
            style: {
              fontSize: "13px",
              fontFamily: "Verdana, sans-serif",
            },
          },
        },
        yAxis: {
          min: 0,
          title: {
            text: "Population (millions)",
          },
        },
        legend: {
          enabled: false,
        },
        series: [
          {
            name: "Population",
            data: plotdata,
            dataLabels: {
              enabled: true,
              rotation: -90,
              color: "#FFFFFF",
              align: "right",
              format: "{point.y:.1f}", // one decimal
              y: 10, // 10 pixels down from the top
              style: {
                fontSize: "13px",
                fontFamily: "Verdana, sans-serif",
              },
            },
          },
        ],
      });
    })
    .catch((error) => console.error(error));
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("output/totalPopulationOftheSaarc.json")
    .then((response) => response.json())
    .then((data) => {
      let plotdata = Object.entries(data);

      Highcharts.chart("totalPopulationOftheSaarc", {
        chart: {
          type: "column",
        },
        title: {
          text: "Total Population of SAARC Countries",
        },
        xAxis: {
          type: "category",
          labels: {
            rotation: -45,
            style: {
              fontSize: "13px",
              fontFamily: "Verdana, sans-serif",
            },
          },
        },
        yAxis: {
          min: 0,
          title: {
            text: "Population (millions)",
          },
        },
        legend: {
          enabled: false,
        },
        series: [
          {
            name: "Population",
            data: plotdata,
            dataLabels: {
              enabled: true,
              rotation: -90,
              color: "#FFFFFF",
              align: "right",
              format: "{point.y:.1f}", // one decimal
              y: 10, // 10 pixels down from the top
              style: {
                fontSize: "13px",
                fontFamily: "Verdana, sans-serif",
              },
            },
          },
        ],
      });
    })
    .catch((error) => console.error(error));
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("output/aseanPopulationvsallYears.json")
    .then((response) => response.json())
    .then((data) => {
      let plotdata = Object.entries(data);

      Highcharts.chart("aseanPopulationvsallYears", {
        chart: {
          type: "column",
        },
        title: {
          text: "ASEAN Population Over Years",
        },
        xAxis: {
          type: "category",
          labels: {
            rotation: -45,
            style: {
              fontSize: "13px",
              fontFamily: "Verdana, sans-serif",
            },
          },
        },
        yAxis: {
          min: 0,
          title: {
            text: "Population (millions)",
          },
        },
        legend: {
          enabled: false,
        },
        series: [
          {
            name: "Population",
            data: plotdata,
            dataLabels: {
              enabled: true,
              rotation: -90,
              color: "#FFFFFF",
              align: "right",
              format: "{point.y:.1f}", // one decimal
              y: 10, // 10 pixels down from the top
              style: {
                fontSize: "13px",
                fontFamily: "Verdana, sans-serif",
              },
            },
          },
        ],
      });
    })
    .catch((error) => console.error(error));
});