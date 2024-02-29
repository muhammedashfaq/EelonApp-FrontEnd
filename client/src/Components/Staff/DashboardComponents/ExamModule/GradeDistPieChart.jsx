import React, { useEffect, useState } from "react";
import ApexCharts from "apexcharts";

const GradeDistPieChart = (studentMarklist) => {
  const [series, setseries] = useState();
  const [labels, setlabels] = useState();
  const [totalMarks, settotalMarks] = useState();

  useEffect(() => {
    if (!totalMarks) return;
    const data = studentMarklist.studentMarklist;
    setlabels(data.map((data) => data._id));
    setseries(data.map((data) => data.total / totalMarks));
  }, [studentMarklist.studentMarklist, totalMarks]);

  useEffect(() => {
    const data = studentMarklist.studentMarklist;

    const totalMarks = data.reduce((total, mark) => {
      // If total field is undefined or NaN, consider it as 0
      const markTotal = mark.total ? mark.total : 0;
      return total + markTotal;
    }, 0);
    settotalMarks(totalMarks);

    console.log(totalMarks);
  }, [studentMarklist.studentMarklist]);

  useEffect(() => {
    if (!series || !labels) return;
    const options = {
      series: series,
      chart: {
        width: 380,
        type: "pie",
      },
      labels: labels,
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
  }, [series, labels]);

  return <div id="chart"></div>;
};

export default GradeDistPieChart;
