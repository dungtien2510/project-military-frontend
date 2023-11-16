import { Outlet, redirect } from "react-router";
import NavBar from "../../components/navbar/Navbar";
import { getToken } from "../../util/token";
function LayoutPeople() {
  const token = getToken();
  console.log(token);
  if (!token) {
    alert("Vui lòng đăng nhập!");
    return redirect("/auth?mode=login");
  }
  return (
    <>
      <NavBar path="people" />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default LayoutPeople;
