import React from "react";
import ReactApexChart from "react-apexcharts";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import useAuth from "../../../Hooks/useAuth";

const LibraryPieReportChart = () => {
  const {auth} = useAuth();
  const schoolId = auth?.userData?.schoolId;
  const [genreCount, setgenreCount] = useState();
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

  useEffect(() => {
    const labels = genreCount
      ? genreCount
          .filter((hubName) => hubName._id !== null)
          .map((hubName) => hubName._id)
      : [];
    const series = genreCount ? genreCount.map((count) => count.count) : [];

    setChartDataPie((prevChartDataPie) => ({
      ...prevChartDataPie,
      series: series,
      options: {
        ...prevChartDataPie.options,
        labels: labels,
      },
    }));
  }, [genreCount]);
  const getGenreCount = async () => {
    try {
      if(!schoolId) return;

      const response = await axiosPrivate.put("library/reports/genrecount/filter",{schoolId});
      setgenreCount(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGenreCount();
  }, []);
  useEffect(() => {
    getGenreCount();
  }, [schoolId]);
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
