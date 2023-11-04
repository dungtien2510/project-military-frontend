import styles from "./RadioInput.module.css";
import React, { useEffect, useState } from "react";
import { editActions } from "../../../../store/editRedux";
import useInput from "../../../../hooks/use-input";
import { useSelector, useDispatch } from "react-redux";
function RadioInput(props) {
  const { idInput } = props;
  // lấy state từ store redux
  const { isValid, addData, isClickSubmit, valueInput, isResetForm } =
    useSelector((state) => state.edit);
  // lấy Action
  const dispatch = useDispatch();
  // hook useInput
  const { value, hasError, valueChangeHandler, inputBlurHandler, reset } =
    useInput({
      test: (value) => value !== "",
      isClickSubmit,
      idInput,
    });

  // reset form
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
    <div>
      <div
        className={
          hasError
            ? `${styles["input-radio"]} ${styles.inValid}`
            : styles["input-radio"]
        }
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
        value={value}
      >
        <div className={styles["input-radio__onl"]}>
          <label className={styles["input-label"]}>Đang hoạt động</label>
          <input
            className={styles["input"]}
            type="radio"
            name="status"
            value="online"
          />
        </div>
        <div className={styles["input-radio__off"]}>
          <label className={styles["input-label"]}>không hoạt động</label>
          <input
            className={styles["input"]}
            type="radio"
            name="status"
            value="offline"
          />
        </div>
      </div>
      {hasError && (
        <span className={styles["input-message__error"]}>
          Không để trống ô này
        </span>
      )}
    </div>
  );
}
export default RadioInput;
