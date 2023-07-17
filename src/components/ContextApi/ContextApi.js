import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticate } from "../../features/AuthenticateSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config";
import { responseHandler } from "../../services/responseHandler";
import { setIsLoading } from "../../features/ProcessSlice";
import { ACCESS_TOKEN } from "../../constant";

const ContextApi = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticate = useSelector(
    (state) => state.authenticateReducer.isAuthenticate
  );
  const isLoading = useSelector((state) => state.processReducer.isLoading);
  const loadUser = async () => {
    try {
      const response = await axios.get(`${config.API}/api/auth/loadUser`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
        },
      });
      const rsData = responseHandler(response);
      dispatch(setIsAuthenticate(rsData.success));
      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(setIsAuthenticate(false));
      dispatch(setIsLoading(false));
    }
  };
  useEffect(() => {
    loadUser();
  }, []);
  return props.children;
};

export default ContextApi;
