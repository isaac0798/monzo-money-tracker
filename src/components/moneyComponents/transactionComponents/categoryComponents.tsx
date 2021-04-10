import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import filter from "lodash/filter"

const chartConfig = {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "Transactions per category",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: '#9ad2cb'
        }
      ]
    },
  };

type graphProps = {graphData: any, year: string};
const CategoryComponents = ({graphData, year}: graphProps) => {
    const categoryContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
    const [chartData, setChartData] = useState(chartConfig);

    console.log(graphData[year]);
    const months = Object.keys(graphData[year]);
    const dayTransactionDescriptions = months.map(month => {
        const dayObj = graphData[year][month]
        const dayKeys = Object.keys(dayObj)
        return dayKeys.map(day => {
            const dailyTransactions = graphData[year][month][day];
            const completedDayTransactions = filter(dailyTransactions, 'settled');
            return completedDayTransactions.map(transaction => {
                const descriptionArr: String[] = transaction.description.split(" ");

                return descriptionArr.length > 1 ? `${descriptionArr[0]} ${descriptionArr[1]}` : `${descriptionArr[0]}`;
            });
        })
    }).flat(2);

    const descriptionCount = dayTransactionDescriptions.reduce((obj, desc) => {
        if (obj.hasOwnProperty(desc)) {
            obj[desc] += 1
    
            return obj
        }
        obj[desc] = 1;
        return obj;
    }, {});

    chartConfig.data.labels = Object.keys(descriptionCount);
    chartConfig.data.datasets[0].data = Object.values(descriptionCount);


    useEffect(() => {
        if (categoryContainer && categoryContainer.current) {
          const newChartInstance = new Chartjs(categoryContainer.current, chartConfig);
          setChartInstance(newChartInstance);
        }
      }, [categoryContainer, year]);

    return (
        <div id="componentContainer">
            <canvas ref={categoryContainer} />
        </div>
    );
}

export default CategoryComponents;