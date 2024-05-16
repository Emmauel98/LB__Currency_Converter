import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const RateDetails = ({
  response,
  rateOnecurrencyType,
  rateTwocurrencyType,
  colorPalette,
  formattedDate
}) => {
  const [rateDetails, setRateDetails] = useState();
  const [amount, setAmount] = useState(0);
  const [conversionAmount, setConversionAmout] = useState(0);
  const [formatted_Date, setFormatted_Date] = useState('');

  useEffect(() => {
    const getRateDetails = async () => {
      const data = await response;
      setRateDetails(data);
      setAmount(data.data.data.amount);
      setConversionAmout(data.data.data.conversionAmount); 
      setFormatted_Date(formattedDate);
    };

    getRateDetails();

  }, [response, rateDetails, amount, formattedDate]);

  return (
    <>
      <div>
        <h5
          className="text-[1.5rem]"
          style={{ color: colorPalette.text_color_minitext }}
        >
          {amount} <b>{rateOnecurrencyType}</b> equals to
        </h5>
        <h1
          className="md:text-[2rem] text-[1.5rem] font-bold"
          style={{ color: colorPalette.text_color_nonHeading }}
        >
          <span className="text-[2rem] font-google-sans roboto">
            {conversionAmount}&nbsp;
          </span>
          {rateTwocurrencyType}
        </h1>
        <h6
          className="py-5"
          style={{ color: colorPalette.text_color_minitext }}
        >
          {formatted_Date} · Date
        </h6>
      </div>
    </>
  );
};

RateDetails.propTypes = {
  response: PropTypes.object.isRequired,
  colorPalette: PropTypes.object.isRequired,
  rateOnecurrencyType: PropTypes.string.isRequired,
  rateTwocurrencyType: PropTypes.string.isRequired,
  formattedDate: PropTypes.string.isRequired,
};
export default RateDetails;
