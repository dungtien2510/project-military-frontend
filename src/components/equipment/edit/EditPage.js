import FormAdd from "../add/FormAdd";
import FormEquip from "../add/FormEquip";

function EditPage() {
  return (
    <div style={{ marginTop: "7rem" }}>
      {/* <FormAdd nameForm="Thêm khí tài" nameButton="Thêm" /> */}
      <FormEquip header="Thêm Vũ khí, khí tài" button="Thêm" />
    </div>
  );
}
export default EditPage;
