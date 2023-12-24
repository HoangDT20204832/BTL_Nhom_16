import axios from "axios";
export const axiosJWT = axios.create()

// export const getAllProducts  = async(search,limit, page) =>{
//     let res = {}
//     if(search?.length > 0) {
//         res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all-product?filter=name&filter=${search}&limit=${limit}&page=${page}`);
//     }else{
//        res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all-product?limit=${limit}&page=${page}`);
//     }
//     return res.data
// }

export const createReview  = async(data) =>{
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/review/create-review`,data);
    return res.data
}

export const getReviewsByProduct  = async(productId) =>{
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/review/get-reviews-product/${productId}`);
    return res.data
}
