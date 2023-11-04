import style from "./Content.module.css";
function Content() {
  return (
    <div className={style["content"]}>
      <div className={style.header}>
        <h1>QUẢN LÝ QUÂN NHÂN</h1>
        <h3>“SÁNG TẠO TRẺ” trong Quân chủng Phòng Không Quân</h3>
        <p>Họ và tên : Phan Tiến Dũng</p>

        <p> Đơn vị : Đại đội Thông tin, Phòng tham mưu, sư đoàn 372</p>
        <p></p>
      </div>
    </div>
  );
}
export default Content;
