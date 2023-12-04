import axios from "axios";

export const axiosJWT = axios.create()
export const loginUser  = async(data) =>{
    // Gọi API thực hiện chức năng đăng nhập 
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-in`, data);
    // Trả về dữ liệu mới cập nhật
    return res.data
}

export const signUpUser  = async(data) =>{
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-up`, data);
    return res.data
}

export const getDetailUser  = async(id, access_token) =>{
    const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/user/get-details-user/${id}`, {
        headers: {
            token: `Bearer ${access_token}`
        }
    });
    return res.data
}

export const refreshToken  = async() =>{
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/refresh-token`,{
        withCredentials: true, //là khi có cookie thì nó sẽ tự truyền xuống cho back-end
    });
    return res.data
}

export const logoutUser  = async() =>{
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/log-out`);
    return res.data
}

export const updateUserInfor  = async(id, data, access_token) =>{
    const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/user/update-user/${id}`, data,
    // {
    //     headers: {
    //         token: `Bearer ${access_token}`
    //     }
    // }
    );
    return res.data
}
