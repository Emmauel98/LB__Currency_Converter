/* eslint-disable no-unused-vars */
import axios from "axios";
import { base_url} from "./baseUrl.js";

const formatDate = (date)=> {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const  getCurrentDateFormatted = ()=>{
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const  filterRateHistory = async (event)=> {
    const currentDate = new Date();
    const text = event.target.innerText.trim(); 
    
     
    const match = text.match(/(\d+)([DMY])/);
    if (match) {
        const [_, value, unit] = match;
        let calculatedDate;

        // Calculate the date based on the unit
        switch (unit) {
            case 'D':
                calculatedDate = new Date(currentDate.getTime() - Number(value) * 24 * 60 * 60 * 1000);
                break;
            case 'M':
                calculatedDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - Number(value), currentDate.getDate());
                break;
            case 'Y':
                calculatedDate = new Date(currentDate.getFullYear() - Number(value), currentDate.getMonth(), currentDate.getDate());
                break;
            default:
                calculatedDate = currentDate;
        }

        const formattedDate = formatDate(calculatedDate);
        const dateFrom = getCurrentDateFormatted();
        console.log(formattedDate, dateFrom)
        
        const url = `${base_url}/api/v1/xchange/getFxRatesForCurrency?type=lt&dateFrom=${formattedDate}&dateTo=${dateFrom}&baseCurrency=usd&targetCurrency=eur`;

        const response = await axios.get(url);
        return response;
        
    } else {
        console.error('Invalid input format:', text);
    }
}

  

export default filterRateHistory;