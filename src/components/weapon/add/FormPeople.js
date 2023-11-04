import { Form } from "react-router-dom";

import style from "./FormPeople.module.css";
import { useState } from "react";
function FormPeople(props) {
  const { clickFilterHandler } = props;

  //state trường đối tượng
  const [valueObject, setValueObject] = useState("officer");

  // thay đổi trường đối tượng
  const changeObjectHandler = (e) => {
    setValueObject(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div style={{ marginTop: "7rem" }}>
      <Form method="POST" className={style.form} action={props.action}>
        <h2>{props.header}</h2>
        <div className={style.formInput}>
          <div className={style.item1}>
            <label htmlFor="id">ID</label>
            <input
              type="text"
              id="id"
              name="id"
              placeholder="Số chứng minh SQ, QNCN"
            />
          </div>
          <div className={style.item2}>
            <label htmlFor="name">Họ và tên</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nguyễn Văn A"
            />
          </div>

          <div className={style.item3}>
            <label htmlFor="object">Đối tượng</label>
            <select
              type="text"
              id="object"
              name="object"
              onChange={changeObjectHandler}
              value={valueObject}
            >
              <option value="officer">Sĩ quan</option>
              <option value="pro">Quân nhân chuyên nghiệp</option>
              <option value="soldier">Chiến sĩ</option>
            </select>
          </div>
          <div className={style.item19}>
            <label htmlFor="rank">Hệ</label>
            <select id="rank" name="rank">
              <option value="university">Đại học</option>
              <option value="college">Cao đẳng</option>
              <option value="secondary">Trung cấp</option>
              <option value="primary">Sơ cấp</option>
            </select>
          </div>
          <div className={style.item4}>
            <label htmlFor="epaulette">Cấp bậc</label>

            {valueObject === "officer" && (
              <select type="text" id="epaulette" name="epaulettet">
                <option value="1/">Thiếu úy</option>
                <option value="2/">Trung úy</option>
                <option value="3/">Thượng úy</option>
                <option value="4/">Đại úy</option>
                <option value="1//">Thiếu tá</option>
                <option value="2//">Trung tá</option>
                <option value="3//">Thượng tá</option>
                <option value="4//">Đại tá</option>
              </select>
            )}
            {valueObject === "pro" && (
              <select type="text" id="epaulette" name="epaulettet">
                <option value="1/">Thiếu úy bậc 1</option>
                <option value="1/">Thiếu úy bậc 2</option>
                <option value="2/">Trung úy</option>
                <option value="3/">Thượng úy</option>
                <option value="4/">Đại úy</option>
                <option value="1//">Thiếu tá</option>
                <option value="2//">Trung tá</option>
                <option value="3//">Thượng tá</option>
                <option value="4//">Đại tá</option>
              </select>
            )}
            {valueObject === "soldier" && (
              <select type="text" id="epaulette" name="epaulettet">
                <option value="b1">Binh nhì</option>
                <option value="b2">Binh nhất</option>
                <option value="h1">Hạ sĩ</option>
                <option value="h2">Trung sĩ</option>
                <option value="h3">Thượng sĩ</option>
              </select>
            )}
          </div>
          <div className={style.item5}>
            <label htmlFor="dateArmy">Tháng năm nhận</label>
            <input type="month" id="monthUp" name="monthUp" />
          </div>
          <div className={style.item6}>
            <label htmlFor="position">Chức vụ</label>
            <input
              type="text"
              id="position"
              name="position"
              placeholder="trung đội trưởng"
            />
          </div>

          <div className={style.item7}>
            <label htmlFor="location">Đơn vị</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Trung đội 1"
            />
          </div>
          <div className={style.item8}>
            <label htmlFor="birthday">Ngày tháng năm sinh</label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              placeholder="01/01/1998"
            />
          </div>
          <div className={style.item9}>
            <label htmlFor="dateArmy">Nhập ngũ</label>
            <input
              type="month"
              id="dateArmy"
              name="dateArmy"
              placeholder="9/2016"
            />
          </div>
          <div className={style.item10}>
            <label>Giới tính:</label>
            <div className={style.radio}>
              <div>
                <label htmlFor="male">Nam</label>
                <input type="radio" id="male" name="gender" value="male" />
              </div>
              <div>
                <label htmlFor="female">Nữ</label>
                <input type="radio" id="female" name="gender" value="female" />
              </div>
            </div>
          </div>
          <div className={style.item11}>
            <label>Đã vào:</label>
            <div className={style.radio}>
              <div>
                <label htmlFor="communism">Đảng</label>
                <input
                  type="radio"
                  id="communism"
                  name="communism"
                  value="communism"
                />
              </div>
              <div>
                <label htmlFor="group">Đoàn</label>
                <input type="radio" id="group" name="communism" value="group" />
              </div>
            </div>
          </div>
          <div className={style.item12}>
            <label htmlFor="dateCommunism">Ngày vào Đảng, Đoàn</label>
            <input
              type="date"
              id="dateCommunism"
              name="dateCommunism"
              placeholder="22/12/2020"
            />
          </div>

          <div className={style.item13}>
            <label htmlFor="home">Quê quán</label>
            <input
              type="text"
              id="home"
              name="home"
              placeholder="xã-huyện-tỉnh"
            />
          </div>
          <div className={style.item14}>
            <label htmlFor="address">Nơi ở hiện nay</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="nhập cụ thể địa chỉ"
            />
          </div>
          <div className={style.item15}>
            <label htmlFor="level">Trình độ</label>
            <input type="text" id="level" name="level" placeholder="Đại học" />
          </div>
          <div className={style.item16}>
            <label htmlFor="school">Đã đào tạo qua</label>
            <input
              type="text"
              id="school"
              name="school"
              placeholder="Trường Sĩ quan thông tin"
            />
          </div>
          <div className={style.item17}>
            <label htmlFor="infor">Thông tin liên hệ</label>
            <input
              type="text"
              id="infor"
              name="infor"
              placeholder="Tên người lên hệ, Số điện thoại:"
            />
          </div>
          {!props.formFilter && (
            <div className={style.item18}>
              <label htmlFor="note">Ghi chú</label>
              <textarea
                type="text"
                id="note"
                name="note"
                placeholder="Ghi chú"
              ></textarea>
            </div>
          )}
        </div>
        <div className={style.button}>
          {props.formFilter && (
            <button
              type="button"
              className={style.btnBack}
              onClick={clickFilterHandler}
            >
              Back
            </button>
          )}
          <button type="button" className={style.btnReset}>
            Reset
          </button>
          <button type="submit" className={style.btnSubmit}>
            {props.button}
          </button>
        </div>
      </Form>
    </div>
  );
}
export default FormPeople;
