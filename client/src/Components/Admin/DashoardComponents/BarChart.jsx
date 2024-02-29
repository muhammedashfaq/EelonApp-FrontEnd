import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
  const [chartData, setChartData] = useState({
    series: [{
      data: [400, 430, 448, 470,],
    }],
    options: {
      chart: {
        type: 'bar',
        height: 380,
      },
      plotOptions: {
        bar: {
          barHeight: '100%',
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: 'bottom',
          },
        },
      },
      colors: ['#A5978B', '#2b908f', '#f9a3a4', '#90ee7e', 
      ],
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
          colors: ['#fff'],
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
        dropShadow: {
          enabled: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      xaxis: {
        categories: ['PR', 'AP', 'OD','LE' 
        ],
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      title: {
        text: 'Daily Attandance Report' ,
        align: 'center',
        floating: true,
      },
    //   subtitle: {
    //     text: 'Category Names as DataLabels inside bars',
    //     align: 'center',
    //   },
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function () {
              return '';
            },
          },
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={380} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default BarChart;
