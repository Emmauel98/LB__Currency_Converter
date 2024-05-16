import { useEffect, useState } from "react";
import fetchAllCurrencyType from "../services/fetchAllCurrencyType";

const CurrencyType = () => {
 const [currency, setCurrency] = useState([]);
    useEffect(()=>{
        const getAllCurrencyType =  async ()=>{
            try {
                const currencies = await fetchAllCurrencyType();
                setCurrency(currencies.data.data.currencies);
            } catch (error) {
                console.log(`An error occurred: ${error.message}`)
            }
        };
        getAllCurrencyType();
    }, [])
  return [currency, setCurrency]
}

export default CurrencyType;