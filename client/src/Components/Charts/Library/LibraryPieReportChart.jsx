import React from "react";
import ReactApexChart from "react-apexcharts";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";

const LibraryPieReportChart = () => {
  const [genreCount, setgenreCount] = useState();
  const [genreNameArray, setgenreNameArray] = useState();
  const [genreCountArray, setgenreCountArray] = useState();

  const axiosPrivate = useAxiosPrivate();



  const [chartDataPie, setChartDataPie] = useState({
    series: [],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      title: {
        text: "Genre Distribution",
        align: "middle",
      },
      labels: [],
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
    },
  });

console.log(genreCount,'count');


  useEffect(() => {

    const labels = genreCount
    .filter((hubName) => hubName._id !== null)
    .map((hubName) => hubName._id);    
    const series = genreCount.map((count) => count.count);

    setChartDataPie((prevChartDataPie) => ({
      ...prevChartDataPie,
      series:series,
      options: {
        ...prevChartDataPie.options,
        labels: labels,
      },
    }));
  }, [genreCount]);
  
  const getGenreCount = async () => {
    try {
      console.log('send')
      const response = await axiosPrivate.get("library/reports/genrecount");
      console.log(response,'dataaaaaaaaaa');
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
  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartDataPie.options}
          series={chartDataPie.series}
          type="donut"
          width={380}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default LibraryPieReportChart;