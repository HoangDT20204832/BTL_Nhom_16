import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id : "",
  name: '',
  email: '',
  access_token: '',
  avatar: '',
  phone: '',
  address: '',
  sex: "",
  isAdmin: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) =>{
        const {_id="", name = "", email ="",sex="", access_token = "", avatar="", phone="", address="",isAdmin} = action.payload;
        console.log("action", action)
        state.id = _id;
        state.name = name ||email;
        state.email = email ;
        state.access_token = access_token
        state.avatar = avatar
        state.phone = phone
        state.sex = sex
        state.address = address
        state.isAdmin = isAdmin
    },
    resetUser: (state) =>{
      state.id = "";
      state.name = "";
      state.email = "" ;
      state.access_token = "";
      state.avatar = "";
      state.phone = ""
      state.address = ""
      state.sex = ""
      state.isAdmin = false

  }
  },
})

// Action creators are generated for each case reducer function
export const { updateUser, resetUser} = userSlice.actions

export default userSlice.reducer 