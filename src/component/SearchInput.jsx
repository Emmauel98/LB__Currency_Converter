import CurrencyType from "../hooks/CurrencyType";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import RateDetails from "./RateDetails";
import { createChart } from "../services/chart";
import "./component.css";
import GraphData from "../hooks/GraphData";

const SearchInput = ({ name, convertCurrencyPostRequest, colorPalette, formattedDate }) => {
  const [currency] = CurrencyType();
  const [rateValueOne, setRateValueOne] = useState(0);
  const [rateValueTwo, setRateValueTwo] = useState(0);
  const rateOneCurrency = useRef();
  const rateTwoCurrency = useRef();
  const [rateOnecurrencyType, setRateOneCurrencyType] = useState(
    rateOneCurrency?.current?.value || "AED"
  );
  const [rateTwocurrencyType, setRateTwoCurrencyType] = useState(
    rateTwoCurrency?.current?.value || "AED"
  );
  const [dataResponse, setDataresponse] = useState({});
  const [setGraphData] = GraphData();



  const handleRateValueOneChange = async (e, active_Input) => {
    setRateValueOne(e.target.value);
    setRateOneCurrencyType(rateOneCurrency?.current?.value);
    setRateTwoCurrencyType(rateTwoCurrency?.current?.value);

    const rateOne = rateOneCurrency.current.value;
    const rateTwo = rateTwoCurrency.current.value;
    const baseCurrencyAmount = e.target.value;
    const response = await convertCurrencyPostRequest(
      active_Input,
      baseCurrencyAmount,
      rateOne,
      rateTwo,
      setRateValueTwo
    );
    setDataresponse(response);
    if (response) {
      const histories = response.data.data.rateHistory;
      const graphData = createChart(
        histories,
        response.data.data.baseCurrency,
        response.data.data.targetCurrency
      );
      setGraphData(graphData);
    }
  };

  const handleRateValueTwoChange = async (e, active_Input) => {
    setRateValueTwo(e.target.value);
    setRateOneCurrencyType(rateTwoCurrency?.current?.value);
    setRateTwoCurrencyType(rateOneCurrency?.current?.value);

    const rateOne = rateOneCurrency.current.value;
    const rateTwo = rateTwoCurrency.current.value;
    const baseCurrencyAmount = e.target.value;
    const response  = await convertCurrencyPostRequest(
      active_Input,
      baseCurrencyAmount,
      rateOne,
      rateTwo,
      setRateValueOne
    );
    setDataresponse(response.response);
    if (response) {
      const histories = response.response.data.data.rateHistory;
      const graphData = createChart(
        histories,
        response.data.data.baseCurrency,
        response.data.data.targetCurrency
      );
      setGraphData(graphData);
    }
  };

  return (
    <>
      <div className="lg:w-[50vw] md:px-[5rem] px-[1.5rem] py-[5rem] h-[77.2vh] rounded-bl-md">
        <RateDetails
          response={dataResponse}
          colorPalette={colorPalette}
          rateOnecurrencyType={rateOnecurrencyType}
          rateTwocurrencyType={rateTwocurrencyType}
          formattedDate={formattedDate}
        />
        <div className="mb-5 ring-1 rounded-md ring-gray-300 hover:ring-gray-800">
          <input
            type="number"
            name={"rateValueOne"}
            id=""
            value={rateValueOne}
            onChange={(e) => handleRateValueOneChange(e, "rateValueOne")}
            className="lg:w-[45%] md:w-[35vw] w-[30%] lg:font-semibold font-bold px-5
             py-3 rounded-l-md md:text-[1.2rem] outline-none opacity-70 input_style"
            style={{
              background: colorPalette.input_background,
              color: colorPalette.text_color_nonHeading,
            }}
          />
          <select
            className="lg:w-[55%] md:w-[35vw] w-[70%] lg:font-semibold font-bold px-5 py-3 
          rounded-r-md md:text-[1.2rem] outline-none lg:h-[3.3rem] mt-[-1rem]"
            style={{
              backgroundColor: colorPalette.selector_background,
              color: colorPalette.text_color_nonHeading,
            }}
            id={name}
            ref={rateOneCurrency}
            // onChange={}
          >
            {currency.length > 0 ? (
              currency.map((currency, index) => {
                return (
                  <option
                    className="font-normal text-center"
                    value={currency.isoCode}
                    key={index}
                  >
                    {currency.isoCode}
                  </option>
                );
              })
            ) : (
              <option value="empty" className="font-normal text-center">
                empty
              </option>
            )}
          </select>
        </div>
        <div className="mb-5 ring-1 rounded-md ring-gray-300 hover:ring-gray-800">
          <input
            type="number"
            name={"rateValueTwo"}
            id=""
            value={rateValueTwo}
            onChange={(e) => handleRateValueTwoChange(e, "rateValueTwo")}
            className="lg:w-[45%] md:w-[35vw] w-[30%] lg:font-semibold font-bold px-5 py-3 
            rounded-l-md md:text-[1.2rem] outline-none opacity-70"
            style={{
              background: colorPalette.input_background,
              color: colorPalette.text_color_nonHeading,
            }}
          />
          <select
            className="lg:w-[55%] md:w-[35vw] w-[70%] lg:font-semibold font-bold px-5 py-3 
          rounded-r-md md:text-[1.2rem] outline-none lg:h-[3.3rem] mt-[-1rem]"
            style={{
              background: colorPalette.selector_background,
              color: colorPalette.text_color_nonHeading,
            }}
            id={name}
            ref={rateTwoCurrency}
          >
            {currency.length > 0 ? (
              currency.map((currency, index) => {
                return (
                  <option
                    className="font-normal text-center"
                    value={currency.isoCode}
                    key={index}
                  >
                    {currency.isoCode}
                  </option>
                );
              })
            ) : (
              <option value="empty" className="font-normal text-center">
                empty
              </option>
            )}
          </select>
        </div>
      </div>
    </>
  );
};

SearchInput.propTypes = {
  name: PropTypes.string.isRequired,
  convertCurrencyPostRequest: PropTypes.func.isRequired,
  colorPalette: PropTypes.object.isRequired,
  formattedDate: PropTypes.string.isRequired,
};
export default SearchInput;
