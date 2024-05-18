import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const LineGraph = ({xAxisData = [], yAxisData = [], yAxisLabel = '', title = '', description = '', point = ''}: {
    xAxisData: string[];
    yAxisData: number[] | string[];
    yAxisLabel?: string;
    title?: string;
    description?: string;
    point?: string;
}) => {
    const graphRef = useRef(null);
    const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
    const [options , setOptions] = useState<any>({});
    const [series , setSeries] = useState<any[]>([]);

    useEffect(() => {
      const options = {
        chart: {
          height: "100%",
          width: "100%",
          maxWidth: "100%",
          type: "line",
          fontFamily: "inherit",
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: true,
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: [ '#fff'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          },
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "18px",
          }
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
        xaxis: {
          categories: xAxisData,
          labels: {
            show: true,
            style: {
                colors: "#fff",
                fontSize: "17px",
            },
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: true,
          },
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
            style: {
                fontSize: "5px",
            },
          },
        }
      }

      setOptions(options);
      setSeries([
        {
          name: yAxisLabel,
          data: yAxisData,
        }
      ],);

    }, [xAxisData, yAxisData]);

    return (
        <div>
            <div className="flex justify-between">
                <div>
                <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">{title}</h5>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
                </div>
                <div className="text-xl flex items-center px-2.5 py-0.5 text-base font-semibold #F17EB8 text-center">
                {point}
                </div>
            </div>
            <div ref={graphRef} />
            <ApexCharts type="line" options={options} series={series} width="100%" height="100%"></ApexCharts>
        </div>
    )
}

export default LineGraph