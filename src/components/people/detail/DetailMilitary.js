import { useParams } from "react-router";
import useHttp from "../../../hooks/use-http";
import { getToken } from "../../../util/token";
import { useEffect, useState } from "react";
import style from "./DetailMilitary.module.css";
import { NavLink } from "react-router-dom";
function DetailMilitary() {
  const { error, loading, requestAPI: getMilitary } = useHttp();
  const [data, setData] = useState("");
  const params = useParams();
  const token = getToken();
  console.log(params);
  const request = {
    http: "http://localhost:5000/client/military/detail/" + params.id,
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const appLyData = (data) => {
    setData(data);
  };
  useEffect(() => {
    getMilitary(appLyData, request);
    console.log(data);
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
              <p>{data.position.name}</p>
            </div>
            <div className={style.button}>
              <button className="btn btn-success">Sửa</button>
              <button className="btn btn-danger mx-2">Xóa</button>
            </div>
          </div>
          <div className={style.content}>
            <div className={style.info}>
              <h5>Thông tin cá nhân</h5>
              <ul>
                <li>Họ và tên: {data.name}</li>
                <li>Số CMQĐ: {data.id_number}</li>
                <li>Ngày sinh: {changeDate(data.birthday)}</li>
                <li>Giới tính: {data.gender === "male" ? "Nam" : "Nữ"}</li>
                <li>Cấp bậc: {data.rank}</li>
              </ul>
            </div>
            <div className={style.info_job}>
              <h5>Thông tin công việc</h5>
              <ul>
                <li>Chức vụ: {data.position.name}</li>
                <li>Đơn vị: {data.location.name}</li>
                <li>Đối tượng: {data.object}</li>
                <li>Nhập ngũ: {changeDate(data.join_army)}</li>
                {data.party && <li>Vào Đảng: {changeDate(data.party)}</li>}
                {data.union_member && (
                  <li>Vào Đoàn: {changeDate(data.union_member)}</li>
                )}
              </ul>
            </div>
            <div className={style.status}>
              <h5>Tình trạng, Học vấn</h5>
              <ul>
                <li>Trạng thái: {getStatus(data.status)}</li>
                <li>Lý do:{data.reason}</li>
                {data.marital_status === "Married" && (
                  <li>Tình Trạng hôn nhân: Đã kết hôn</li>
                )}
                {data.marital_status === "single" && (
                  <li>Tình Trạng hôn nhân: Độc thân</li>
                )}
                {data.marital_status === "unmarried" && (
                  <li>Tình trạng hôn nhân: Đơn thân</li>
                )}
                <li>Trình độ: {data.academic_level}</li>
                <li>Trình độ chuyên môn: {data.pro_expertise}</li>
              </ul>
            </div>

            <div className={style.reward}>
              <h5>Khen thưởng, kỹ luật</h5>
              <ul>
                <p>Khen thưởng</p>
                <li>Chiến sĩ thi đua (2024)</li>
              </ul>
              <ul>
                <p>Kỹ Luật</p>
                <li></li>
              </ul>
            </div>

            <div className={style.info_family}>
              <h5>Thông tin gia đình</h5>
              <ul>
                <li>
                  <NavLink>Bố: Phan Chiến</NavLink>
                </li>
                <li>
                  <NavLink>Mẹ: Đặng Thị Quý</NavLink>
                </li>
                <li>
                  <NavLink>Vợ: Lê Vũ Hằng Phương</NavLink>
                </li>
                <li>
                  <NavLink></NavLink>Con: <li>Phan Lê Gia Hân</li>
                </li>
              </ul>
            </div>
            <div className={style.info_family}>
              <h5>Thông tin liên hệ</h5>
              <ul>
                <li>Quê Quán: {data.hometown}</li>
                <li>Địa chỉ: {data.address}</li>
                <li>Số điện thoại: {data.phone}</li>
                <li>Ghi chú: {data.info}</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default DetailMilitary;
