import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import map from "lodash/map";
import TransactionInterface from '../../../interfaces/transactionInterface';
import getLabelsPerYear from '../../../utilities/graphComponentUtitliteis/getLabelsPerYear';
import getMonthlyTransactionCount from '../../../utilities/graphComponentUtitliteis/getMonthlyTransactionCount';
import '../../../css/graphComponent.css';
import getMonthlyAmountSpent from "../../../utilities/graphComponentUtitliteis/getMonthlyAmountSpent";
import { setSyntheticTrailingComments } from "typescript";

let labels;
let data;

const chartConfig = {
    type: "line",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "Transactions per month",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: ['#e58c8a']
        },
        {
          label: "Amount per month",
          data: [5, 12, 6, 9, 5, 16],
          backgroundColor: ['#42e2b8']
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  };

//make sorted transactions interface
type graphProps = {graphData: any, year: string};
const GraphComponent = ({graphData, year}: graphProps) => {
    const graphContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
    const [chartData, setChartData] = useState(chartConfig);

    chartConfig.data.labels = getLabelsPerYear(graphData[year]);
    chartConfig.data.datasets[0].data = getMonthlyTransactionCount(graphData[year]);
    chartConfig.data.datasets[1].data = getMonthlyAmountSpent(graphData[year]);

    useEffect(() => {
        if (graphContainer && graphContainer.current) {
          const newChartInstance = new Chartjs(graphContainer.current, chartConfig);
          setChartInstance(newChartInstance);
        }
      }, [graphContainer, year]);

    return (
        <div id="graphContainer">
          <canvas ref={graphContainer} />
        </div>
    );
}

export default GraphComponent;