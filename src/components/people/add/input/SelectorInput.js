import styles from "./Input.module.css";
import { editActions } from "../../../../store/editRedux";
import { useEffect } from "react";
import useInput from "../../../../hooks/use-input";
import { useSelector, useDispatch } from "react-redux";
function SelectorInput(props) {
  const { idSelector, options, nameLabel, placeholder, idInput } = props;
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
        <select
          id="input-type"
          placeholder={placeholder}
          onChange={valueChangeHandler}
          onBlur={inputBlurHandler}
          value={value}
          className={hasError ? styles.inValid : ""}
        >
          <option></option>
          {options.map((opt) => (
            <option key={opt.value}>{opt.nameOption}</option>
          ))}
        </select>
        {hasError && (
          <span className={styles["input-message__error"]}>
            Không để trống ô này
          </span>
        )}
      </div>
    </div>
  );
}
export default SelectorInput;
