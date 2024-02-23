import React from "react";
import ReactApexChart from "react-apexcharts";
import { useState, useEffect } from "react";

const ClassAvgComparisonChart = ({ classAvgData, studentMarklist }) => {
  const [subs, setsubs] = useState([]);
  const [totalMarks, settotalMarks] = useState([]);
  const [totalStuds, settotalStuds] = useState([]);
  const [stdMarksArray, setstdMarksArray] = useState();

  const processClassAvgData = () => {
    if (!studentMarklist || !classAvgData) return;
    const sortedData = classAvgData.sort((a, b) => a._id.localeCompare(b._id));
    const stdSorted = studentMarklist.sort((a, b) =>
      a._id.localeCompare(b._id)
    );
    setstdMarksArray(stdSorted.map((item) => item?.total));

    setsubs(sortedData.map((item) => item._id));
    const Stds = sortedData.map((item) => item.totalStudents);
    settotalMarks(
      sortedData.map((item, i) => Math.round(item.totalMarks / Stds[i]))
    );
  };
  useEffect(() => {
    processClassAvgData();
  }, [classAvgData, studentMarklist]);

  // useEffect(() => {
  //   console.log(subs, "subs");
  //   console.log(totalStuds, "totalStuds");
  //   console.log(totalMarks, "totalMarks");
  // }, [totalMarks]);

  const series = [
    {
      name: "Your marks",
      data: stdMarksArray,
    },
    {
      name: "Class average",
      data: totalMarks,
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
      categories: subs,
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
          return `${val}`;
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
