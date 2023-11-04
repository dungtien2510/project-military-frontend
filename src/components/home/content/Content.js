import style from "./Content.module.css";
function Content() {
  return (
    <div className={style["home-content"]}>
      <div className={style.header}>
        <h3 className={style.h3}>
          QUÂN CHỦNG PK-KQ
          <br /> SƯ ĐOÀN 372
        </h3>
        <h1>PHẦN MỀM QUẢN LÝ</h1>
        <h3>“SÁNG TẠO TRẺ” trong Quân chủng Phòng Không Quân</h3>
        <p>Họ và tên : Phan Tiến Dũng</p>

        <p> Đơn vị : Đại đội Thông tin, Phòng tham mưu, sư đoàn 372</p>
      </div>
    </div>
  );
}
export default Content;
