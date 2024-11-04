import AuthRouter from "./AuthRouter";
import MainRouter from "./MainRouter";
import { useDispatch, useSelector } from "react-redux";
import {
  addAuth,
  authSelector,
  AuthState,
} from "../reduxs/reducers/authReducer";
import { useEffect, useState } from "react";
import { localDataNames } from "../constants/appInfos";
import { Spin } from "antd";

const Routers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const auth: AuthState = useSelector(authSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = localStorage.getItem(localDataNames.authData);
    res && dispatch(addAuth(JSON.parse(res)));
  };

  const handleChecktoken= async ()=>{
    
  }
  return isLoading ? <Spin /> : !auth.token ? <AuthRouter /> : <MainRouter />;
};

export default Routers;
