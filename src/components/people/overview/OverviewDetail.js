import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useLoaderData } from "react-router";
import Overview from "./Overview";
function OverviewDetailPage() {
  const data = useLoaderData();
  return <Overview />;
}
export default OverviewDetailPage;
