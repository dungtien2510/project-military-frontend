import "./List.css";
import Item from "./Item";

function List() {
  const data = [
    {
      id: 12235,
      name: "AK 47",
      level: 5,
      type: "vũ khí",
      yearMake: "12/2001",
      state: "Hỏng",
      yearUse: 5,
      location: "đơn vị",
      yearNumber: 1,
      note: "đã bàn giao kho",
      date: "22/12/2022",
      nameType: "súng",
    },
    {
      id: 1246,
      name: "VRS 651",
      level: 4,
      type: "trang bị khí tài",
      yearMake: "8/2012",
      state: "đang sử dụng",
      nameType: "mày VTĐ SN",
      yearUse: 5,
      location: "đơn vị",
      note: "đã cho mượn",
      date: "22/12/2022",
      yearNumber: 3,
    },
    {
      id: 1235677,
      name: "VRU 812",
      level: 3,
      type: "trang bị khi tài",
      yearMake: "5/2010",
      nameType: "máy VTĐ SCN",
      yearNumber: 1,
      state: "hỏng",
      yearUse: 5,
      location: "sở chỉ huy",
      note: "vừa bàn giao",
      date: "22/12/2022",
    },
    {
      id: 126748,
      name: "VRU 812",
      level: 1,
      type: "Trang bị khí tài",
      yearMake: "2/2022",
      state: "đang sử dụng",
      yearUse: 5,
      nameType: "máy VTĐSCN",
      yearNumber: 5,
      location: "sở chỉ huy",
      note: "đã được cấp",
      date: "22/12/2022",
    },
    {
      id: 129,
      name: "RPK",
      level: 2,
      type: "vũ khí",
      yearMake: "6/2000",
      state: "không sử dụng",
      yearUse: 2,
      yearNumber: 2,
      nameType: "súng",
      location: "sở chỉ huy",
      note: "không đang sử dụng",
      date: "22/12/2022",
    },
  ];
  return (
    <table className="table" style={{ marginTop: "6rem" }}>
      <thead className="table-header">
        <tr className="table-header__row">
          <th>ID</th>
          <th>Tên</th>
          <th>loại</th>
          <th>kiểu loại</th>
          <th>Năm SX</th>
          <th>Số năm SD</th>
          <th>Câp</th>
          <th>vị trí</th>
          <th>Tình trạng</th>
          <th>Ngày cấp</th>

          <th>Ghi chú</th>
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
