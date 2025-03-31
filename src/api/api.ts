import axios, { AxiosInstance, AxiosResponse, CancelTokenSource } from "axios";
import { enqueueSnackbar } from "notistack";
import { userLogout } from "../store/auth/authSlice";
import { store } from "../store/store";
interface ApiAuthProps {
  method: string;
  url: string;
  data?: object | Array<object>;
  headers?: object;
  params?: object;
}

export const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

let cancelTokenSource: CancelTokenSource = axios.CancelToken.source();

export const apiAuth: (props: ApiAuthProps) => Promise<AxiosResponse> = ({
  method,
  url,
  data,
  headers,
  params
}) => {
  return api({
    method,
    url,
    data,
    headers: {
      ...headers,
      "x-access-token": localStorage.getItem("x-access-token") || "",
    },
    params,
    cancelToken: cancelTokenSource.token,
  });
};

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: any) => {
    if (error?.response?.data?.message === "Permiso Denegado") {
      cancelTokenSource.cancel(
        "Operación cancelada por denegación de permiso."
      );
      cancelTokenSource = axios.CancelToken.source();

      localStorage.clear();
      store.dispatch(userLogout());
      enqueueSnackbar(error.response.data.message, {
        variant: "error",
        anchorOrigin: { horizontal: "center", vertical: "bottom" },
      });
    }
    return Promise.reject(error);
  }
);
