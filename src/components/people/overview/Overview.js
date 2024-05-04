import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import useHttp from "../../../hooks/use-http";
import { getToken } from "../../../util/token";
import style from "./Overview.module.css";
function Overview() {
  const token = getToken();
  const idLocation = useParams().id;
  console.log(idLocation);
  const totalAbsent = (value) =>
    Object.values(value).reduce((a, v, i) => (a = a + v), 0);
  const [total, setTotal] = useState("");
  const [present, setPresent] = useState("");
  const [absent, setAbsent] = useState({});
  const [lowerLocation, setLowerLocation] = useState([]);
  const [nameLocation, setNameLocation] = useState("");
  const [master, setMaster] = useState({});
  const [objectData, setObjectData] = useState({});
  const { error, loading, requestAPI: loadOverview } = useHttp();
  const request = {
    http: idLocation
      ? `http://localhost:5000/client/military/general?id=${idLocation}`
      : "http://localhost:5000/client/military/general",
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const applyData = (data) => {
    setTotal(data.totalMilitarys);
    setPresent(data.presentMilitarys);
    setAbsent(data.absentMilitarys);
    setNameLocation(data.nameLocation);
    setLowerLocation(data.locationLower);
    setMaster(data.master);
    setObjectData(data.object);
  };
  useEffect(() => {
    loadOverview(applyData, request);
  }, [idLocation]);

  return (
    <>
      {!loading && (
        <div>
          <h2 className="mb-0">{nameLocation}</h2>
          <p className={`mx-2 fst-italic fw-ligth ${style.master}`}>
            Chỉ huy trưởng: {master.fullName}
          </p>
        </div>
      )}
      {loading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden text-center">Loading...</span>
        </div>
      )}

      <Card className="text-center my-1">
        <Card.Header>
          <span>Tổng Quân số: </span>
          {!loading && <span>{total}</span>}
          {loading && (
            <div className="spinner-border" role="status">
              <span className="visually-hidden text-center">Loading...</span>
            </div>
          )}
        </Card.Header>
        <Card.Body>
          <CardGroup className="my-2">
            <Card>
              <Card.Body>
                <span>Sỹ Quan: </span>
                {!loading && <span>{objectData.officer}</span>}
                {loading && (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden text-center">
                      Loading...
                    </span>
                  </div>
                )}
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <span>QNCN: </span>
                {!loading && <span>{objectData.pro_serviceman}</span>}
                {loading && (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden text-center">
                      Loading...
                    </span>
                  </div>
                )}{" "}
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <span>HSQ-CS: </span>
                {!loading && <span>{objectData.soldier}</span>}
                {loading && (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden text-center">
                      Loading...
                    </span>
                  </div>
                )}
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <span>CN,VCQP: </span>
                {!loading && <span>{objectData.workers}</span>}
                {loading && (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden text-center">
                      Loading...
                    </span>
                  </div>
                )}
              </Card.Body>
            </Card>
          </CardGroup>
        </Card.Body>
      </Card>
      <Card className="text-center my-1">
        <Card.Header>
          <span>Quân số có mặt: </span>
          {!loading && <span>{present}</span>}
          {loading && (
            <div className="spinner-border" role="status">
              <span className="visually-hidden text-center">Loading...</span>
            </div>
          )}
        </Card.Header>
      </Card>
      <Card className="text-center my-1">
        <Card.Header>
          <span>Quân số vắng: </span>
          {!loading && <span>{totalAbsent(absent)}</span>}
          {loading && (
            <div className="spinner-border" role="status">
              <span className="visually-hidden text-center">Loading...</span>
            </div>
          )}
        </Card.Header>
        <Card.Body>
          <CardGroup className="my-2">
            <Card>
              <Card.Body>
                <span>Phép: </span>
                {!loading && <span>{absent.militarysP}</span>}
                {loading && (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden text-center">
                      Loading...
                    </span>
                  </div>
                )}
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <span>Bệnh xá: </span>
                {!loading && <span>{absent.militarysBX}</span>}
                {loading && (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden text-center">
                      Loading...
                    </span>
                  </div>
                )}{" "}
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <span>Bệnh viện: </span>
                {!loading && <span>{absent.militarysV}</span>}
                {loading && (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden text-center">
                      Loading...
                    </span>
                  </div>
                )}
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <span>Công tác: </span>
                {!loading && <span>{absent.militarysCT}</span>}
                {loading && (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden text-center">
                      Loading...
                    </span>
                  </div>
                )}
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <span>Không có lý do: </span>
                {!loading && <span>{absent.militarysN}</span>}
                {loading && (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden text-center">
                      Loading...
                    </span>
                  </div>
                )}
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <span>Khác: </span>
                {!loading && <span>{absent.militarysK}</span>}
                {loading && (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden text-center">
                      Loading...
                    </span>
                  </div>
                )}
              </Card.Body>
            </Card>
          </CardGroup>
        </Card.Body>
      </Card>

      <Row xs={1} md={3} className="g-4">
        {loading && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden text-center">Loading...</span>
          </div>
        )}
        {!loading &&
          lowerLocation.map((v, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">
                    <NavLink to={`/overview/${v._id}`}>{v.name}</NavLink>
                  </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{`Tổng quân số: ${v.totalMilitaryLocaLower}`}</ListGroup.Item>
                  <ListGroup.Item>{`Quân số có mặt: ${v.totalMilitaryPre}`}</ListGroup.Item>
                  <ListGroup.Item>{`Quân số vắng mặt: ${v.totalMilitaryAbsent}`}</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
}
export default Overview;
