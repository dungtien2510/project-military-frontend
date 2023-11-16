import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import style from "./Login.module.css";
import Card from "react-bootstrap/Card";
import { NavLink, useNavigate, Form as RouterForm } from "react-router-dom";
import { useState, useEffect } from "react";
import { authActions } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "../../hooks/use-http";
import { errorActions } from "../../store/error";

//sử dụng js-cookie để lưu token vào cookie
function Login() {
  const dispatch = useDispatch();
  const { isError } = useSelector((state) => state.error);

  // const loading = "";
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [valueError, setValueError] = useState({});
  const [isErrorServer, setIsErrorServer] = useState(false);
  const [valueUserName, setvalueUserName] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const { error, loading, requestAPI: userLogin } = useHttp();
  const changeUserNameHandler = (e) => {
    setvalueUserName(e.target.value);
    // setValueError({ ...valueError, userName: "", isErrorServer: false });
    setIsErrorServer(false); //
  };
  const changePasswordHandler = (e) => {
    setValuePassword(e.target.value);
    // setValueError({ ...valueError, password: "", isErrorServer: false });
    setIsErrorServer(false); //
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    console.log(form, form.checkValidity());
    if (form.checkValidity() === false) {
      e.stopPropagation();
      // setValueError((preState) => ({
      //   ...preState,
      //   userName: "Vui Lòng nhập tên tài khoản!",
      //   password: "Vui lòng nhập mật khẩu ít nhất 8 ký tự!",
      // }));
      return setValidated(true);
    }
    const user = { name_user: valueUserName, password: valuePassword };
    const request = {
      http: "http://localhost:5000/auth/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const applyData = (data) => {
      dispatch(authActions.setLogin(data));
      navigate("/people");
    };
    userLogin(applyData, request);
    if (error) {
      setIsErrorServer(true);
    }
  };
  useEffect(() => {
    if (error) {
      setIsErrorServer(true);
    }
  }, [error]);
  console.log(isErrorServer);
  return (
    <Card className="w-50 text-center mx-auto my-5">
      <Card.Body>
        <Card.Title className="fs-1 fw-normal text-secondary my-5">
          Đăng Nhập
        </Card.Title>
        <Form
          noValidate
          validated={validated}
          className={`${style.form} my-5`}
          onSubmit={submitHandler}
          c
        >
          <Form.Group
            className={`${style.formLogin} mb-2`}
            controlId="formBasicEmail"
          >
            <Form.Control
              name="name_user"
              className={isErrorServer ? "rounded-0 is-invalid" : "rounded-0"}
              type="text"
              placeholder="Tài khoản"
              required
              value={valueUserName}
              onChange={changeUserNameHandler}
            />

            <Form.Control.Feedback
              type="invalid"
              className="text-start w-75 m-auto"
            >
              {isErrorServer ? "" : "Vui lòng nhập tên tài khoản!"}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className={`${style.formLogin} mb-2`}
            controlId="formBasicEmail"
          >
            <Form.Control
              name="password"
              className={isErrorServer ? "rounded-0 is-invalid" : "rounded-0"}
              type="password"
              minLength="8"
              placeholder="Mật Khẩu"
              required
              value={valuePassword}
              onChange={changePasswordHandler}
            />
            <Form.Control.Feedback
              type="invalid"
              className="text-start m-auto w-75"
            >
              {isErrorServer
                ? "Tài khoản hoặc mật khẩu không đúng!"
                : "Vui lòng nhập mật khẩu ít nhất 8 ký tự!"}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="success" type="submit">
            {!loading && "Đăng Nhập"}
            {loading && (
              <div className="spinner-border" role="status">
                <span className="visually-hidden text-center">Loading...</span>
              </div>
            )}
          </Button>
        </Form>
        {/* <p className="text-muted my-5">
          Create an accoun? <NavLink to="/register">Đăng ký</NavLink>
        </p> */}
      </Card.Body>
    </Card>
  );
}

export default Login;
