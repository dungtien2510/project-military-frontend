import OverviewDetail from "../../components/people/overview/OverviewDetail";
import { getToken } from "../../util/token";
const token = getToken();

function OverviewDetailPage() {
  return (
    <>
      <h2></h2>
      <OverviewDetail />
    </>
  );
}
export default OverviewDetailPage;

export async function loader({ request }) {
  try {
    const idLocation = request.params.id;
    const response = await fetch(
      `http://localhost:5000/client/military/location/${idLocation}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}
