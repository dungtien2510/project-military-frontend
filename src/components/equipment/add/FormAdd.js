import styles from "./Form.module.css";
import Input from "./input/Input";
import SelectorInput from "./input/SelectorInput";
import Button from "./Button";
import React, { useState, useEffect } from "react";
import RadioInput from "./input/RadioInput";
import { useSelector, useDispatch } from "react-redux";
import { editActions } from "../../../store/editRedux";
function FormAdd(props) {
  const options = [
    { value: 0, nameOption: "Máy hữu tuyến" },
    { value: 1, nameOption: "Máy phát điện" },
    { value: 2, nameOption: "Máy vô tuyến" },
    { value: 3, nameOption: "Khác" },
  ];

  const { isClickSubmit, addData, isValid, valueInput, isResetForm } =
    useSelector((state) => state.edit);

  const dispatch = useDispatch();

  // submit form
  const submitHandler = (e) => {
    e.preventDefault();
    // setIsClickSubmit(true);
    dispatch(editActions.clicksubmitHandler(true));
    if (
      Object.values(valueInput).every((value) => {
        return value.trim() !== "";
      })
    ) {
      dispatch(editActions.addDataHandler(valueInput));
      dispatch(editActions.setIsResetForm(true));
    }
  };
  // set data vào localStorage
  useEffect(() => {
    localStorage.setItem("addData", JSON.stringify(addData));
  }, [addData]);

  console.log(
    addData,
    Object.values(valueInput).every((value) => {
      return value.trim() !== "";
    })
  );

  return (
    <form
      className={styles.form}
      onSubmit={submitHandler}
      style={{ marginTop: "7rem" }}
    >
      <h2 className={styles.header}>{props.nameForm}</h2>
      <Input type="text" placeholder="nhập ID" nameLabel="ID" idInput="id" />
      <Input
        type="text"
        placeholder="nhập tên máy"
        nameLabel="Tên máy"
        idInput="nameInput"
      />

      <div className={styles["form-group"]}>
        <Input
          type="number"
          placeholder="nhập năm sản xuât"
          nameLabel="Năm sản xuất"
          idInput="yearMake"
          min="1900"
          max={new Date().getFullYear()}
        />
        <Input
          type="number"
          placeholder="nhập năm sử dụng"
          nameLabel="Năm Sử dụng"
          idInput="yearUse"
          min="1"
          max="100"
        />
      </div>
      <div className={styles["form-group"]}>
        <Input
          type="number"
          min="1"
          max="5"
          placeholder="nhập cấp"
          nameLabel="Cấp Khí tài"
          idInput="level"
        />
        {/* input- radio */}
        <RadioInput idInput="status" />
      </div>
      <div className={styles["form-group"]}>
        <SelectorInput
          idSelector="type"
          options={options}
          placeholder="chọn loại khí tài"
          nameLabel="Loại khí tài"
          idInput="type"
        />
        <SelectorInput
          idSelector="typeMachine"
          options={options}
          placeholder="Chọn loại máy"
          nameLabel="Loại máy"
          idInput="typeMachine"
        />
      </div>
      <SelectorInput
        idSelector="location"
        options={options}
        placeholder="chọn loại khí tài"
        nameLabel="Vị trí"
        idInput="location"
      />
      <Input
        type="text"
        placeholder="Ghi chú"
        nameLabel="Ghi chú"
        idInput="note"
      />
      <div className={styles.button}>
        <Button nameButton="Reset" type="button" />
        <Button nameButton={props.nameButton} type="submit" />
      </div>
    </form>
  );
}
export default FormAdd;
