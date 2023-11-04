import { Form } from "react-router-dom";
import FormAdd from "../add/FormAdd";
import style from "./AddPage.module.css";
import FormPeople from "../add/FormPeople";
function AddPage() {
  return <FormPeople header="Thêm Quân nhân" button="Thêm" action='/people/add'/>;
}
export default AddPage;
