"use client";

import 'flowbite';
import { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';

const LineGraph = ({xAxisData = [], yAxisData = [], yAxisLabel = '', title = '', description = '', point = ''}: {
    xAxisData: string[];
    yAxisData: number[] | string[];
    yAxisLabel?: string;
    title?: string;
    description?: string;
    point?: string;
}) => {
    useEffect(() => {
      const options = {
        chart: {
          height: "100%",
          width: "100%",
          maxWidth: "100%",
          type: "area",
          fontFamily: "inherit",
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 6,
        },
        grid: {
          show: false,
          strokeDashArray: 4,
          padding: {
            left: 2,
            right: 2,
            top: 0
          },
        },
        series: [
          {
            name: yAxisLabel,
            data: yAxisData,
            color: "pink",
          },
        ],
        xaxis: {
          categories: xAxisData,
          labels: {
            show: true,
            style: {
                colors: "#fff",
                fontSize: "14px",
            },
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
      }

      let chart = new ApexCharts(document.getElementById("area-chart"), options);
      options.xaxis.categories.length && chart.render();

    }, [xAxisData, yAxisData]);

    return (
        <div>
            <div className="flex justify-between">
                <div>
                <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">{title}</h5>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
                </div>
                <div
                className="flex items-center px-2.5 py-0.5 text-base font-semibold #F17EB8 text-center">
                {point}
                </div>
            </div>
            <div id="area-chart"></div>
        </div>
    )
}

export default LineGraph