import React, { useState, useMemo, useRef } from "react";
import ReactDom from "react-dom";
import "./styles.css";

const SearchKeywords = (searchKeywords) => {
  return <div>what</div>;
};

const Examp = () => {
  const [inputVal, setInputVal] = useState("");
  const [searchKeywords] = useState(["apple ip", "ipad", "iwatch"]);

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
      <SearchKeywords />
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
