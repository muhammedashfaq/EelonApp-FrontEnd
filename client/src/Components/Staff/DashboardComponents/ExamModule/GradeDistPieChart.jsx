import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const GradeDistPieChart = () => {
  useEffect(() => {
    const options = {
      series: [44, 50, 13, 43, 22, 5],
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["A2", "B1", "B2", "C1", "D", "E2"],
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
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  return <div id="chart"></div>;
};

export default GradeDistPieChart;
