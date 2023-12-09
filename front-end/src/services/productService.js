import axios from "axios";
export const axiosJWT = axios.create()

export const getAllProducts  = async(search,limit) =>{
    let res = {}
    if(search?.length > 0) {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all-product?filter=name&filter=${search}&limit=${limit}`);
    }else{
       res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all-product?limit=${limit}`);
    }
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


export const deleteProductInfor  = async(id) =>{
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/product/delete-product/${id}`, 
    // {
    //     headers: {
    //         token: `Bearer ${access_token}`
    //     }
    // }
    );
    return res.data
}

export const getAllTypeProduct  = async() =>{
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all-type-product`);
    return res.data
}

export const getProductType = async(type) =>{
    if(type) {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all-product?filter=type&filter=${type}`);
        return res.data
    }
}