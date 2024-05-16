import axios from "axios";

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


const convertCurrency = async (
  active_Input,
  baseCurrencyAmount,
  rateOneCurrency,
  rateTwoCurrency,
  targetCurrencyAmount
) => {
  try {
    const url = "https://xchangeapp.onrender.com/api/v1/xchange/converter";
    const payload = {
      baseCurrency:
        active_Input === "rateValueOne"
          ? rateOneCurrency.toLocaleLowerCase()
          : rateTwoCurrency.toLocaleLowerCase(),
      amount: baseCurrencyAmount,
      targetCurrency:
        active_Input === "rateValueOne"
          ? rateTwoCurrency.toLocaleLowerCase()
          : rateOneCurrency.toLocaleLowerCase(),
      rateType: "LT",
    };
    const response = await axios.post(url, payload);
    targetCurrencyAmount(response.data.data.conversionAmount);
    const date = new Date(response.data.data.rate.Dt);
    const day = date.getUTCDate();
    const monthIndex = date.getUTCMonth();
    const year = date.getUTCFullYear();
    const formattedDate = `${day} ${monthNames[monthIndex]}, ${year}` || 0;
    return { response, formattedDate  };
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
    return { response: null, formattedDate: null };
  }
};

export default convertCurrency;
