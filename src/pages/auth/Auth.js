import { useDispatch } from "react-redux";
import Login from "../../components/authentication/Login";
import { errorActions } from "../../store/error";
function AuthPage() {
  return <Login />;
}
export default AuthPage;
export async function action({ request }) {
  // try {
  //   const data = await request.formData();
  //   const user = {
  //     name_user: data.get("name_user"),
  //     password: data.get("password"),
  //   };
  //   const response = await fetch("http://localhost:5000/auth/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       body: JSON.stringify(user),
  //     },
  //   });
  //   if (response.status === 422) {
  //     dispatch(errorActions.setIsError());
  //   }
  // } catch (err) {
  //   console.log(err);
  // }
}
