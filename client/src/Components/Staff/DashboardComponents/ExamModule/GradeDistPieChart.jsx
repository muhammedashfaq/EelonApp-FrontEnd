import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const GradeDistPieChart = (studentMarklist) => {


  const data = studentMarklist.studentMarklist

  const labels = data.map(data => data._id);
  const series = data.map(data => data.total);
  console.log(series);
  useEffect(() => {
    const options = {
      series: series,
      chart: {
        width: 380,
        type: "pie",
      },
      labels:labels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Cleanup
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="chart"></div>;
};

export default GradeDistPieChart;
