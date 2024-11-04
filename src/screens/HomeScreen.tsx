import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  authSelector,
  refreshtoken,
  removeAuth,
} from "../reduxs/reducers/authReducer";
import handleAPI from "../apis/hendleAPI";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);

  const logout = () => {
    dispatch(removeAuth({}));
  };

  const getProducts = async () => {
    const api = `/storage/products`;
    try {
      const res = await handleAPI(api);
      console.log(res);
    } catch (error: any) {
      console.log(error);
      if (error.error === "jwt expired") {
        console.log("sdfdsf");
        handleRefreshToken();
      }
    }
  };

  const handleRefreshToken = async () => {
    const api = `auth/refresh-token?id=${auth._id}`;
    try {
      const res = await handleAPI(api);
      dispatch(refreshtoken(res.data.token));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Button onClick={getProducts}>Logout</Button>
    </div>
  );
};

export default HomeScreen;
