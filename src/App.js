import React, { useEffect, useState } from "react";
import "./App.css";
import { Line } from "react-chartjs-2";
import { getDbRealTime } from "./database";

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          min: 0,
          max: 100
        }
      }
    ]
  }
};

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    getDbRealTime(data => {
      setData(data);
    });
  }, []);

  const getData = () => {
    const labels = Object.keys(data);
    const value = Object.values(data);
    return {
      labels,
      datasets: [
        {
          label: "#Tradewar",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: value
        }
      ]
    };
  };

  return (
    <div className="App">
      <h2>#tradewar overtime</h2>
      <Line data={getData()} options={options} />
    </div>
  );
}

export default App;
