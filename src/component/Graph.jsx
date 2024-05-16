import { Line } from "react-chartjs-2";
import { createChart } from "../services/chart";
import PropTypes from "prop-types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import filterRateHistory from "../services/filterRate";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = ({ response, colorPalette }) => {
  const [GraphData, setGraphData] = useState();
  const [baseCurrency, setBaseCurrency] = useState();
  const [targetCurrency, setTargetCurrency] = useState();

  useEffect(() => {
    if (response) {
      const histories = response.data.data.rateHistory;
      const graphData = createChart(
        histories,
        response.data.data.baseCurrency,
        response.data.data.targetCurrency
      );
      setGraphData(graphData);
      setBaseCurrency(response.data.data.baseCurrency);
      setTargetCurrency(response.data.data.targetCurrency);
    }
  }, [response]);

  const filterHistory = async (e)=>{
    const data = await filterRateHistory(e);
    if (data) {
        const histories = data.data.data.FxRate;
        const graphData = createChart(
          histories,
          baseCurrency,
          targetCurrency
        );
        setGraphData(graphData);
      }
    console.log(data)
  };

  return (
    <>
      {response ? (
        <div className="chart-container lg:w-[45vw] relative top-[-21vh] md:top-[-35vh] lg:top-[10.5vh] px-5">
          <div className="flex gap-[1rem] justify-center">
            <h1 className=" rounded-full p-2 hover:bg-blue-400 hover:cursor-pointer"
            onClick={(e)=>filterHistory(e)}
            >
              1D
            </h1>
            <h1 className=" rounded-full p-2 hover:bg-blue-400 hover:cursor-pointer"
            onClick={(e)=>filterHistory(e)}
            >
              5D
            </h1>
            <h1 className=" rounded-full p-2 hover:bg-blue-400 hover:cursor-pointer"
            onClick={(e)=>filterHistory(e)}
            >
              1M
            </h1>
            <h1 className=" rounded-full p-2 hover:bg-blue-400 hover:cursor-pointer"
            onClick={(e)=>filterHistory(e)}
            >
              1Y
            </h1>
            <h1 className=" rounded-full p-2 hover:bg-blue-400 hover:cursor-pointer"
            onClick={(e)=>filterHistory(e)}
            >
              5Y
            </h1>
            <h1 className=" rounded-full p-2 hover:bg-blue-400 hover:cursor-pointer"
            onClick={(e)=>filterHistory(e)}
            >
              Max
            </h1>
          </div>
          {GraphData ? (
            <Line options={GraphData.options} data={GraphData.data} />
          ) : null}
        </div>
      ) : (
        <div className="flex justify-center  md:items-center h-full font-bold">
          <h1 style={{ color: colorPalette.text_color_nonHeading }}>
            No chart available
          </h1>
        </div>
      )}
    </>
  );
};

Graph.propTypes = {
  response: PropTypes.object.isRequired,
  colorPalette: PropTypes.object.isRequired,
};
export default Graph;
