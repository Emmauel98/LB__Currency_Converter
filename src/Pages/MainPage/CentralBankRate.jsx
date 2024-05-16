import { useState } from "react";
import Graph from "../../component/Graph";
import SearchInput from "../../component/SearchInput";
import convertCurrency from "../../services/convertCurrency";
import PropTypes from "prop-types";

const CentralBankRate = ({colorPalette}) => {
  const [dataResponse, setDataResponse] = useState();
  const [formatted_Date, setFormatted_Date] = useState();

  const convertCurrencyPostRequest = async (
    active_Input,
    baseCurrencyAmount,
    rateOne,
    rateTwo,
    targetCurrency
  ) => {
    const { response, formattedDate } = await convertCurrency(
      active_Input,
      baseCurrencyAmount,
      rateOne,
      rateTwo,
      targetCurrency
    );
    setDataResponse(response);
    setFormatted_Date(formattedDate);
    return  response;
  };

  return (
    <>
      <div className="lg:flex lg:justify-between w-screen relative overflow-hidden">
        <SearchInput
          name="rateValueOne"
          convertCurrencyPostRequest={convertCurrencyPostRequest}
          colorPalette={colorPalette}
          formattedDate={formatted_Date}
        />
        <div className="lg:w-[50vw] mb-[1rem] h-[50vh]">
          <Graph response={dataResponse}  colorPalette={colorPalette}/>
        </div>
      </div>
    </>
  );
};

CentralBankRate.propTypes = {
  colorPalette: PropTypes.object.isRequired,
}

export default CentralBankRate;
