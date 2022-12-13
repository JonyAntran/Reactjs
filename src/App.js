import "./App.css";
import { useState } from "react";
function App() {
  const [numberA, setNumberA] = useState("");
  const [numberB, setNumberB] = useState("");
  const [numberC, setNumberC] = useState("");
  const [total, setTotal] = useState("");
  const handleInputNumberAchange = (e) => {
    setNumberA(e.target.value);
  };
  const handleInputNumberBchange = (e) => {
    setNumberB(e.target.value);
  };
  const handleInputNumberCchange = (e) => {
    setNumberC(e.target.value);
  };
  const click = (e) => {
    const sum = Number(numberA) + Number(numberB) + Number(numberC);
    setTotal(sum);
  };

  return (
    <>
      {" "}
      <div class="input-field">
        {" "}
        <div>
          {" "}
          Nhap vao so a:{" "}
          <input
            type="text"
            value={numberA}
            name="numberA"
            onChange={handleInputNumberAchange}
          />{" "}
        </div>{" "}
        <div>
          {" "}
          Nhap vao so b:{" "}
          <input
            type="text"
            value={numberB}
            name="numberB"
            onChange={handleInputNumberBchange}
          />{" "}
        </div>{" "}
        <div>
          {" "}
          Nhap vao so c:{" "}
          <input
            type="text"
            value={numberC}
            name="numberC"
            onChange={handleInputNumberCchange}
          />{" "}
        </div>{" "}
      </div>{" "}
      <button type="button" onClick={click}>
        Tổng là
      </button>{" "}
      <div>{total}</div>{" "}
    </>
  );
}
export default App;
