import Cookies from "js-cookie";
export const getToken = () => {
  const token = Cookies.get("user")
    ? JSON.parse(Cookies.get("user")).token
    : undefined;
  return token;
};

export const getFullName = () => {
  const fullName = Cookies.get("user")
    ? JSON.parse(Cookies.get("user")).fullName
    : undefined;
  return fullName;
};
