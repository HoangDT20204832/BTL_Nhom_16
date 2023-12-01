import axios from "axios";

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