import style from "./SearchPage.module.css";

import { useState } from "react";
import { Form } from "react-router-dom";
import FormEquip from "../add/FormEquip";
function SearchPage() {
  // return <FormAdd nameForm="Tìm kiếm" nameButton="Tìm kiếm" />
  const [isFilter, setIsFilter] = useState(false);
  const clickFilterHandler = () => {
    setIsFilter(!isFilter);
  };
  return (
    <>
      {!isFilter && (
        <Form method="POST" className={style.form}>
          {/* <h2>Tìm Kiếm</h2> */}
          <div className={style.formInput}>
            <label htmlFor="name">Tên</label>
            <input type="text" id="name" placeholder="VRU812" name="name" />
          </div>
          <div className={style.button}>
            <button
              type="button"
              className={style.btnFilter}
              onClick={clickFilterHandler}
            >
              Lọc
            </button>
            <button type="submit" className={style.btnSubmit}>
              Tìm Kiếm
            </button>
          </div>
        </Form>
      )}
      {isFilter && (
        <div className={style.fomrSearch}>
          <FormEquip
            header="Tìm kiếm nâng cao"
            button="Tìm kiếm"
            formFilter={true}
            clickFilterHandler={clickFilterHandler}
          />
        </div>
      )}
    </>
  );
}
export default SearchPage;
