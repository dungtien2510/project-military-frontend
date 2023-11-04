import "./List.css";
import Item from "./Item";

function List() {
  const data = [
    {
      id: 1234,
      name: "Phan Tiến Dũng",
      level: "2/",
      position: "Trung đội trưởng",
      location: "cTT,PTM,F372",
      birthday: "25/10/1997",
      dateArmy: "9/2016",
      home: "TT Huế",
      address: "Đà Nẵng",
    },
    {
      id: 1235,
      name: "Trần Văn Đồng Nghĩa",
      level: "1//",
      position: "Đại đội trưởng",
      location: "cTT,PTM,F372",
      birthday: "25/3/1975",
      dateArmy: "9/2007",
      home: "Bắc Ninh",
      address: "Đà Nẵng",
    },
    {
      id: 1236,
      name: "Nguyễn Đắc Hoàng Thành",
      level: "3/",
      position: "Trung đội trưởng",
      location: "cTT,PTM,F372",
      birthday: "25/08/1995",
      dateArmy: "9/2014",
      home: "TT Huế",
      address: "Đà Nẵng",
    },
    {
      id: 1237,
      name: "Nguyễn Hoàng Huân",
      level: "3/",
      position: "Phó đại đội trưởng",
      location: "cTT,PTM,F372",
      birthday: "25/03/1996",
      dateArmy: "9/2015",
      home: "Thanh Hóa",
      address: "Hòa thuận Tây, Hải Châu, Đà Nẵng",
    },
    {
      id: 1238,
      name: "Trần Văn Sinh",
      level: "1//",
      position: "trung đội trưởng",
      location: "cTT,PTM,F372",
      birthday: "10/10/1975",
      dateArmy: "9/2006",
      home: "Quảng Nam",
      address: "Đà Nẵng",
    },
  ];
  return (
    <table className="table" style={{ marginTop: "6rem" }}>
      <thead className="table-header">
        <tr className="table-header__row">
          <th>ID</th>
          <th>Họ tên</th>
          <th>Cấp bậc</th>
          <th>chức vụ</th>
          <th>Đơn vị</th>
          <th>Sinh ngày</th>
          <th>Nhập ngũ</th>
          <th>Quê quán</th>
          <th>nơi ở hiện nay</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return <Item key={item.id} data={item} />;
        })}
      </tbody>
    </table>
  );
}
export default List;
