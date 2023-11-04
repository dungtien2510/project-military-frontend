import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import DetailEquip from "./pages/equipment/Detail";
import SearchEquip from "./pages/equipment/Search";
import ListEquip from "./pages/equipment/List";
import AddEquip from "./pages/equipment/Add";
import AddPeople from "./pages/people/Add";
// import AddWeapon from "./pages/weapon/Add";
import IntroduceEquip from "./pages/equipment/Introduce";
import ConfigurationEquip from "./pages/equipment/Configuration";
import RootPage from "./pages/layout/RootPage";
// import LayoutPeople from "./pages/layout/LayoutPeople";
import SearchPeople from "./pages/people/Search";
import DetailPeople from "./pages/people/Detail";
import ListPeople from "./pages/people/List";
import ConfigurationPeople from "./pages/people/Configuration";
import IntroducePeople from "./pages/people/Introduce";
// import LayoutEquip from "./pages/layout/Layout";
// import LayoutWeapon from "./pages/layout/LayoutWeapon";
// import SearchWeapon from "./pages/weapon/Search";
// import DetailWeapon from "./pages/weapon/Detail";
// import ListWeapon from "./pages/weapon/List";
// import ConfigurationWeapon from "./pages/weapon/Configuration";
// import IntroduceWeapon from "./pages/weapon/Introduce";
import Layout from "./pages/layout/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "people",
        element: <Layout />,
        children: [
          { path: "search", element: <SearchPeople /> },
          { path: "detail", element: <DetailPeople /> },
          { path: "add", element: <AddPeople /> },
          { path: "list", element: <ListPeople /> },
          { path: "configuration", element: <ConfigurationPeople /> },
          { path: "", element: <IntroducePeople /> },
        ],
      },
      {
        path: "equipment",
        element: <Layout />,
        children: [
          { path: "search", element: <SearchEquip /> },
          { path: "detail", element: <DetailEquip /> },
          { path: "add", element: <AddEquip /> },
          { path: "list", element: <ListEquip /> },
          { path: "configuration", element: <ConfigurationEquip /> },
          { path: "", element: <IntroduceEquip /> },
        ],
      },
      // {
      //   path: "weapon",
      //   element: <Layout />,
      //   children: [
      //     { path: "search", element: <SearchWeapon /> },
      //     { path: "detail", element: <DetailWeapon /> },
      //     { path: "add", element: <AddWeapon /> },
      //     { path: "list", element: <ListWeapon /> },
      //     { path: "configuration", element: <ConfigurationWeapon /> },
      //     { path: "", element: <IntroduceWeapon /> },
      //   ],
      // },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
