import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";
import moment from "moment";

const chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)",
};

const Chart = require("react-chartjs-2").Chart;

const color = Chart.helpers.color;
const data = {
  datasets: [
    {
      label: "Prices of accommodations in Amesterdam",
      backgroundColor: color(chartColors.red).alpha(0.5).rgbString(),
      borderColor: chartColors.red,
      fill: false,
      lineTension: 0,
      borderDash: [8, 4],
      data: [],
    },
  ],
};

const options = {
  elements: {
    line: {
      tension: 0.5,
    },
  },
  scales: {
    xAxes: [
      {
        type: "realtime",
        distribution: "linear",
        realtime: {
          onRefresh: async function (chart: any) {
            const response = await fetch("http://localhost:5000/find-last", {
              method: "Get",
            });
            const house = await response.json();

            chart.data.datasets[0].data.push({
              x: moment(),
              y: house?.price ?? 200,
            });
          },
          delay: 3000,
          time: {
            displayFormat: "h:mm",
          },
        },
        ticks: {
          displayFormats: 1,
          maxRotation: 0,
          minRotation: 0,
          stepSize: 2,
          maxTicksLimit: 30,
          minUnit: "second",
          source: "auto",
          autoSkip: true,
          callback: function (value: moment.MomentInput) {
            return value ? moment(value, "HH:mm:ss").format("mm:ss") : "---";
          },
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          max: 5000,
        },
      },
    ],
  },
};

export default function LinearChart() {
  return (
    <div style={{ width: "100%" }}>
      <Line data={data} options={options} />
    </div>
  );
}
