import { useSnackbar } from "notistack";
import { ChangeEvent, FormEvent, useState } from "react";

export interface UseFormProps<T> {
  initialState: T;
}

export const useForm = <T>({ initialState }: UseFormProps<T>) => {
  const [formState, setFormState] = useState(initialState);

  const { enqueueSnackbar } = useSnackbar();

  const handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit: (
    event: FormEvent<HTMLElement>,
    submitFunction: (state: T) => Promise<void>
  ) => void = async (event, submitFunction) => {
    try {
      event.preventDefault();
      await submitFunction(formState);
      enqueueSnackbar(`${JSON.stringify(formState)}`, {
        variant: "success",
        anchorOrigin: { horizontal: "center", vertical: "bottom" },
      });
    } catch (error: any) {
      enqueueSnackbar(error.response.data.message, {
        variant: "error",
        anchorOrigin: { horizontal: "center", vertical: "bottom" },
      });
    }
  };
  
  return {
    ...formState,
    formState,
    handleChange,
    handleSubmit,
    setFormState,
  };
};
