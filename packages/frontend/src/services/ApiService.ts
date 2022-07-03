import axios from "axios"

const ApiService = axios.create({
    //url base address, to solve the problem of url change of different data sources
    //api/xxx
   baseURL: process.env.apiBaseUrl, 
  //withCredentials: true,//If you want to send cookies when cross-domain, you need to set this option
   timeout: 5000//timeout
 });

 export default ApiService;