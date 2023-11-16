import { json, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const requestAPI = useCallback(async (applyData, request) => {
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(request.http, {
        method: request.method ? request.method : "GET",
        headers: request.headers ? request.headers : undefined,
        body: request.body ? request.body : null,
      });
      const data = await response.json();
      if (!response.ok) {
        if (response.status === 422) {
          setError(data);
          return setLoading(false);
        }
        if (response.status === 403 || request.status === 401) {
          alert(response.message);
          throw new Error(401);
        }
        if (response.status === 404 || response.status === 500) {
          console.log(data);
          return navigate("/error");
        }
      }

      applyData(data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, []);
  return { error, loading, requestAPI };
};
export default useHttp;
