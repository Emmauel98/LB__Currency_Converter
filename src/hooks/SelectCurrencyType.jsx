import { useState } from "react";

const SelectCurrencyType = () => {

    const [rateOneCurrencyType , setRateOneCurrencyType] = useState('AED');
    const [rateTwoCurrency , setRateTwoCurrency] = useState('AED');
    

  return [rateOneCurrencyType, setRateOneCurrencyType, rateTwoCurrency , setRateTwoCurrency  ]
}


export default SelectCurrencyType;



