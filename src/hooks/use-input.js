import { useState, useEffect } from "react";
import { editActions } from "../store/editRedux";
import { useDispatch } from "react-redux";
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const dispatch = useDispatch();
  const valueIsValid = validateValue.test(enteredValue);
  useEffect(() => {
    if (validateValue.isClickSubmit) {
      setIsTouched(true);
    }
  }, [validateValue.isClickSubmit]);
  const hasError = !valueIsValid && isTouched;
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const inputBlurHandler = (event) => {
    setIsTouched(true);
    dispatch(
      editActions.setValueInput({
        name: validateValue.idInput,
        value: enteredValue,
      })
    );
  };
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
    dispatch(
      editActions.setValueInput({
        name: validateValue.idInput,
        value: "",
      })
    );
    dispatch(editActions.clicksubmitHandler(false));
  };
  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;
