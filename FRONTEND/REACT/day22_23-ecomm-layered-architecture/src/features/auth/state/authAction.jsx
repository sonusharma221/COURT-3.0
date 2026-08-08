import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/Api";
import { toast } from "react-toastify";

export const loginUserAction = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    console.log("thunkaction trigered");

    try {
      let res = await api.post("/auth/login", credentials);
      console.log("response from login api", res);
      toast.success("user loggedin ");
      localStorage.setItem("accessToken", res.data.accessToken);
      return res.data;
    } catch (error) {
        toast.error("user failed")
      return thunkApi.rejectWithValue("login failed");
    }
  },
);

export const  hydrateUserAction = createAsyncThunk("/auth/hydrate",async (_,thunkApi)=>{
      let token = localStorage.getItem("accessToken");
  try {
    let res = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
      },
    });
    console.log("response from hydration api", res);

    return res.data;
  } catch (error) {
    toast.error("UnAuthraised User")
    return thunkApi.rejectWithValue("UnAuthraised User")
  }
}) 
