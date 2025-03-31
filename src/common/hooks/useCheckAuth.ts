import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useSnackbar } from "notistack";
import { useAuth } from "./useAuth";

export const useCheckAuth = () => {
    const dispatch = useAppDispatch();
    const [applicationLoading, setApplicationLoading] = useState(false);
    const { status, name, userId, userTypeId } = useAppSelector((state) => state.auth);

    const { enqueueSnackbar } = useSnackbar();
    const { logOut } = useAuth();

    const checkUserAuthentication = async () => {
    };

    return {
        status,
        name,
        userId,
        userTypeId,
        applicationLoading,
        checkUserAuthentication,
    };

}