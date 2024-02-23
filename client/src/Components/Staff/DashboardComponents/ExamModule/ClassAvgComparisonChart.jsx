import React from "react";
import ReactApexChart from "react-apexcharts";

const ClassAvgComparisonChart = () => {
  const series = [
    {
      name: "Your marks",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Class average",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Tamil I",
        "Tamil II",
        "English I",
        "English II",
        "Maths",
        "Science",
        "Social science",
        "Computer science",
      ],
    },
    yaxis: {
      title: {
        text: "Grade point",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "Grade point";
        },
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
          width={700}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ClassAvgComparisonChart;
