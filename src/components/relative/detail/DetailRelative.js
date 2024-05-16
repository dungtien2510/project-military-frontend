import { useParams } from "react-router";
import useHttp from "../../../hooks/use-http";
import { getToken } from "../../../util/token";
import { useEffect, useState } from "react";
import style from "./DetailRelative.module.css";
import { NavLink } from "react-router-dom";
function DetailRelative() {
  const { error, loading, requestAPI: getRelative } = useHttp();
  const [data, setData] = useState("");
  const params = useParams();
  const token = getToken();
  console.log(params);
  const request = {
    http: "http://localhost:5000/client/relative/detail/" + params.id,
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const appLyData = (data) => {
    setData(data);
  };
  useEffect(() => {
    getRelative(appLyData, request);
  }, []);
  const changeDate = (value) => {
    const date = new Date(value);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };
  const getStatus = (status) => {
    switch (status) {
      case "x":
        return "Có mặt";
      case "p":
        return "Nghĩ Phép";
      case "bx":
        return "Bệnh xá";
      case "v":
        return "Bệnh viện";
      case "ct":
        return "Công tác";
      case "k":
        return "Khác";
      case "n":
        return "Vắng";
    }
  };
  console.log(data);

  // get role
  const getRole = (role) => {
    switch (role) {
      case "father":
        return "Bố";
      case "mother":
        return "Mẹ";
      case "wife":
        return "Vợ";
      case "children":
        return "Con";
      case "father_wife":
        return "Bố vợ";
      case "mother_wife":
        return "Mẹ vợ";
    }
  };
  return (
    <>
      {data && loading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden text-center">Loading...</span>
        </div>
      )}
      {data && !loading && (
        <>
          <div className={style.header}>
            <div>
              <h2>{data.name}</h2>
              <p>{`${data.id_military.map((v) =>
                getRole(v.role)
              )} của đ/c: ${data.id_military.map((v) => v.id.name)}`}</p>
            </div>
            <div className={style.button}>
              <button className="btn btn-success">Sửa</button>
              <button className="btn btn-danger mx-2">Xóa</button>
            </div>
          </div>
          <div className={style.content}>
            <div className={style.content_info}>
              <h5>Thông tin cá nhân</h5>
              <div className={style.content_ul}>
                <ul className="border-end border-primary">
                  <li>Họ và tên: {data.name}</li>
                  <li>Nghề Nghiệp: {data.job}</li>
                </ul>
                <ul>
                  <li>Ngày sinh: {changeDate(data.birthday)}</li>
                  <li>Giới tính: {data.gender === "male" ? "Nam" : "Nữ"}</li>
                </ul>
              </div>
            </div>

            <div className={style.content_info}>
              <h5>Thông tin liên hệ</h5>
              <div className={style.content_ul}>
                <ul className="border-end border-primary">
                  <li>Quê Quán: {data.hometown}</li>
                  <li>Địa chỉ: {data.address}</li>
                </ul>
                <ul>
                  <li>Số điện thoại: {data.phone}</li>
                  <li>Ghi chú: {data.info}</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default DetailRelative;
