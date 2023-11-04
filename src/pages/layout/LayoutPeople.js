import { Outlet } from "react-router";
import NavBar from "../../components/navbar/Navbar";

function LayoutPeople() {
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
