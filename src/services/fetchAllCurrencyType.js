import axios from "axios";

const fetchAllCurrencyType = async ()=>{
    const response = await axios.get("https://xchangeapp.onrender.com/api/v1/currency");
    return response
};

export default fetchAllCurrencyType; 