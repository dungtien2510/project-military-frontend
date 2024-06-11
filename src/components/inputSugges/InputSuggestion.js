import { useCallback, useState } from "react";
import lodash from "lodash";
import useHttp from "../../hooks/use-http";
import { getToken } from "../../util/token";
function InputSuggestion({ id, label, http, setId, setOption }) {
  const [data, setData] = useState([]);
  const [valueName, setValueName] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const { loading, error, requestAPI: requestSuggestions } = useHttp();
  const token = getToken();

  const fetchSuggestions = useCallback(
    lodash.debounce((location) => {
      const request = {
        http: `${http}${location}`,
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      const applyData = (data) => {
        setData(data);
      };
      requestSuggestions(applyData, request);
    }, 300),
    [requestSuggestions, token]
  );
  //
  const changeHandler = (e) => {
    const name = e.target.value;
    setId(data, "");
    setValueName(name);
    if (name.trim() !== "") {
      fetchSuggestions(name);
    } else {
      setData([]);
    }
  };
  //
  const selectedHandler = (e) => {
    const value = e.target.value;
    // const selected = data.find((v) => setId(v, value));

    // if (selected) {
    //   setSelectedId(selected._id);
    // }
    setId(data, value);
  };

  return (
    <div>
      <label>{label}</label>
      <input
        list={id}
        onChange={changeHandler}
        onSelect={selectedHandler}
        value={valueName}
        type="text"
        className="form-control"
        placeholder="Tên"
        maxLength="50"
      />
      <input type="hidden" value={selectedId} name="selectedId" />

      <datalist id={id}>
        {data.length !== 0 &&
          data.map((v) => <option key={v._id}>{setOption(v)}</option>)}
      </datalist>
    </div>
  );
}
export default InputSuggestion;
