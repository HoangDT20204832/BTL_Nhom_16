import axios from "axios";
export const axiosJWT = axios.create()

export const getAllProducts  = async() =>{
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all-product`);
    return res.data
}

export const createProduct  = async(data) =>{
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/product/create-product`,data);
    return res.data
}

export const getDetailProduct  = async(id) =>{
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-detail-product/${id}`);
    return res.data
}

export const updateProductInfor  = async(id, data, access_token) =>{
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/product/update-product/${id}`, data,
    // {
    //     headers: {
    //         token: `Bearer ${access_token}`
    //     }
    // }
    );
    return res.data
}