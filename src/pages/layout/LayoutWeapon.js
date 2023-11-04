import { Outlet } from "react-router";
import NavBar from "../../components/navbar/Navbar";

function LayoutWeapon() {
  return (
    <>
      <NavBar path="weapon" />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default LayoutWeapon;
