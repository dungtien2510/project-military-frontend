import "./List.css";
import Item from "./Item";
import Table from "react-bootstrap/Table";
import useHttp from "../../../hooks/use-http";
import { useState, useEffect } from "react";
import { getToken } from "../../../util/token";
import style from "./ListPage.module.css";
function List() {
  const token = getToken();
  const { error, loading, requestAPI: getListMilitary } = useHttp();
  const [data, setData] = useState("");
  const applyData = (data) => {
    setData(data);
  };
  const http = "http://localhost:5000/client/military/list";
  const request = {
    http: http,
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  useEffect(() => {
    getListMilitary(applyData, request);
  }, []);
  console.log(data);
  const getfullDate = (date) => {
    const dateNew = new Date(date);
    return `${dateNew.getDate()}/${dateNew.getMonth()}/${dateNew.getFullYear()}`;
  };
  return (
    // <table className="table" style={{ marginTop: "6rem" }}>
    //   <thead className="table-header">
    //     <tr className="table-header__row">
    //       <th>ID</th>
    //       <th>Họ tên</th>
    //       <th>Cấp bậc</th>
    //       <th>chức vụ</th>
    //       <th>Đơn vị</th>
    //       <th>Sinh ngày</th>
    //       <th>Nhập ngũ</th>
    //       <th>Quê quán</th>
    //       <th>nơi ở hiện nay</th>
    //       <th>Action</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {data.map((item) => {
    //       return <Item key={item.id} data={item} />;
    //     })}
    //   </tbody>
    // </table><Table striped bordered hover variant="dark">
    <Table striped bordered hover variant="light" className={style.table}>
      <thead>
        <tr>
          <th>STT</th>
          <th>Họ và tên</th>
          <th>Cấp bậc</th>
          <th>Chức vụ</th>
          <th>Đơn vị</th>
          <th>Ngày sinh</th>
          <th>Nhập ngũ</th>
          <th>Quê quán</th>
          <th>Nơi thường trú</th>
        </tr>
      </thead>
      <tbody>
        {loading && (
          <tr>
            <td>
              <div className="spinner-border" role="status">
                <span className="visually-hidden text-center">Loading...</span>
              </div>
            </td>
          </tr>
        )}
        {!loading &&
          data.military &&
          data.military.map((v, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{v.name}</td>
              <td>{v.rank}</td>
              <td>{v.position}</td>
              <td>{v.location.name}</td>
              <td>{getfullDate(v.birthday)}</td>
              <td>{getfullDate(v.join_army)}</td>
              <td>{v.hometown}</td>
              <td>{v.address}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
export default List;
