import styles from "./Input.module.css";
import useInput from "../../../../hooks/use-input";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editActions } from "../../../../store/editRedux";
function Input(props) {
  const { type, placeholder, nameLabel, idInput, name, min, max, getValue } =
    props;
  //
  const { isValid, addData, isClickSubmit, valueInput, isResetForm } =
    useSelector((state) => state.edit);
  const dispatch = useDispatch();
  //
  const { value, hasError, valueChangeHandler, inputBlurHandler, reset } =
    useInput({
      test: (value) => value.trim() !== "",
      isClickSubmit,
      idInput,
    });
  //
  useEffect(() => {
    if (isResetForm) {
      reset();
      if (
        Object.values(valueInput).every((value) => {
          return value.trim() === "";
        })
      ) {
        dispatch(editActions.setIsResetForm(false));
      }
    }
  }, [isResetForm]);
  console.log(valueInput);
  return (
    <div className={styles.input}>
      <label className={styles["form-input__label"]}>{nameLabel}</label>
      <div className={styles["form-input__input"]}>
        <input
          className={hasError ? styles.inValid : ""}
          type={type}
          name={idInput}
          placeholder={placeholder}
          min={min}
          max={max}
          onChange={valueChangeHandler}
          onBlur={inputBlurHandler}
          value={value}
        />
        {hasError && (
          <span className={styles["input-message__error"]}>
            Không để trống ô này
          </span>
        )}
      </div>
    </div>
  );
}
export default Input;
