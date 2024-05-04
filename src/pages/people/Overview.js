import Overview from "../../components/people/overview/Overview";
import { getToken } from "../../util/token";
const token = getToken();
console.log(token);
function OverviewPage() {
  return (
    <>
      <Overview />
    </>
  );
}
export default OverviewPage;

// export async function loader({ request, params }) {
//   try {
//     const idLocation = params.id;
//     const url = idLocation
//       ? `http://localhost:5000/client/military/general?id=${idLocation}`
//       : "http://localhost:5000/client/military/general";
//     console.log(idLocation);
//     const response = await fetch(url, {
//       method: "GET",
//       headers: { Authorization: "Bearer " + token },
//     });
//     const result = await response.json();
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// }
