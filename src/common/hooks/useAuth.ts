import { FormEvent, useState } from "react";
import { api } from "../../api/api";
import { useAppDispatch } from "../../store/hooks";
import { useSnackbar } from "notistack";
import { userLogin } from "../../store/auth/authSlice";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const logIn: (event: FormEvent<HTMLElement>, formState: any) => Promise<void> = async (event, formState) => {
    try {
      event.preventDefault();
      setLoading(true);

      const { data }: { data: { access_token: string } } = await api.post(
        "/auth/login",
        formState
      );
      localStorage.setItem("x-access-token", data.access_token);
      dispatch(userLogin({ ...data }));
      enqueueSnackbar("Inicio de sesión correcto.", {
        variant: "success",
        anchorOrigin: { horizontal: "center", vertical: "bottom" },
      });
    } catch (error) {
      console.log(error);
      
      enqueueSnackbar(
        "error",
        {
          variant: "error",
          anchorOrigin: { horizontal: "center", vertical: "bottom" },
        }
      );
    } finally {
      setLoading(false);
    }
  };

  const logOut: () => void = () => {
  };

  return {
    loading,
    logIn,
    logOut,
  };
};
