import React from "react";
import ReactApexChart from "react-apexcharts";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";

const LibraryPieReportChart = () => {
  const [genreCount, setgenreCount] = useState();
  const [genreNameArray, setgenreNameArray] = useState();
  const [genreCountArray, setgenreCountArray] = useState();

  const axiosPrivate = useAxiosPrivate();

  const getGenreCount = async () => {
    try {
      const response = await axiosPrivate.get("library/reports/genrecount");
      setgenreCount(response.data);
      console.log(response.data);
      setgenreNameArray(Object.keys(response.data));
      setgenreCountArray(Object.values(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGenreCount();
  }, []);

  const options = {
    chart: {
      width: 380,
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
    legend: {
      formatter: (val, opts) =>
        val + " - " + opts.w.globals.series[opts.seriesIndex],
    },
    title: {
      text: "Gradient Donut with custom Start-angle",
    },
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

  const series = [44, 55, 41, 17, 15];

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width={380}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default LibraryPieReportChart;
