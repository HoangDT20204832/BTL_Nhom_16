import axios from "axios";
export const axiosJWT = axios.create()


export const createOrder  = async(data) =>{
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/order/create-order`,data);
    return res.data
}

