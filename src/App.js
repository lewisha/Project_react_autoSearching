import React, { useState, useMemo, useRef } from "react";
import ReactDom from "react-dom";
import "./styles.css";

const SearchKeywords = ({ searchKeywords }) => {
  if (!searchKeywords) {
    return null;
  }
  return (
    <ul>
      {searchKeywords.map((ele, idx) => {
        return <li key={"${ele}-${idx}"}>{ele}</li>;
      })}
    </ul>
  );
};

const Examp = () => {
  const [inputVal, setInputVal] = useState("");
  const [keywords] = useState(["apple ip", "ipad", "iwa"]);

  const searchKeywords = useMemo(() => {
    return keywords.filter((keyword) => {
      return keyword.includes(inputVal.toLowerCase());
    });
  }, [inputVal]);
  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />

      <button className="btn-add">addme</button>
      <button className="btn-del">delme</button>
      <SearchKeywords searchKeywords={searchKeywords} />
    </div>
  );
};

function App() {
  return (
    <div>
      <Examp />
    </div>
  );
}

export default App;
