import { useState } from "react";

import "./App.css";

function App() {
  const [tipPercent, setTipPercent] = useState(0.15);
  const [billAmount, setBillAmount] = useState(0);
  const [numPeople, setNumPeople] = useState(1);

  function handleReset() {
    setTipPercent(0.15);
    setBillAmount(0);
    setNumPeople(1);
  }

  return (
    <div className="container">
      <h1>
        SPLI
        <br />
        TTER
      </h1>
      <div className="card">
        <div className="leftside">
          <div className="billtippeople">
            <div className="billcontainer">
              <p>Bill</p>
              <input
                className="textbox"
                type="number"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
              ></input>
            </div>

            <div className="tipinfo">
              <p>Select Tip %</p>
              <div className="tip-button-container">
                <button
                  className={
                    tipPercent === 0.05
                      ? "tip-button tip-button-highlight"
                      : "tip-button"
                  }
                  onClick={() => setTipPercent(0.05)}
                >
                  5%
                </button>
                <button
                  className={
                    tipPercent === 0.1
                      ? "tip-button tip-button-highlight"
                      : "tip-button"
                  }
                  onClick={() => setTipPercent(0.1)}
                >
                  10%
                </button>
                <button
                  className={
                    tipPercent === 0.15
                      ? "tip-button tip-button-highlight"
                      : "tip-button"
                  }
                  onClick={() => setTipPercent(0.15)}
                >
                  15%
                </button>
                <button
                  className={
                    tipPercent === 0.2
                      ? "tip-button tip-button-highlight"
                      : "tip-button"
                  }
                  onClick={() => setTipPercent(0.2)}
                >
                  20%
                </button>
                <button
                  className={
                    tipPercent === 0.5
                      ? "tip-button tip-button-highlight"
                      : "tip-button"
                  }
                  onClick={() => setTipPercent(0.5)}
                >
                  50%
                </button>
                <button className="tip-button-custom tip-button">Custom</button>
              </div>
            </div>
            <div className="numpeople">
              <p>Number of People</p>
              <input
                type="number"
                className="textbox"
                value={numPeople}
                onChange={(e) => setNumPeople(e.target.value)}
              ></input>
            </div>
          </div>
          {/* end billtippeople */}
          <div className="rightside">
            <div className="tipcontainer">
              <div className="tipinfo">
                <p>Tip Amount</p>
                <p>/ Person</p>
              </div>
              <div className="big-num">
                {numPeople !== 0
                  ? (
                      (((billAmount * tipPercent) / numPeople) * 100) /
                      100
                    ).toFixed(2)
                  : "$0.00"}
              </div>
            </div>
            <div className="tipcontainer">
              <div className="tipinfo">
                <p>Total Amount</p>
                <p>/ Person</p>
              </div>
              <div className="big-num">
                {numPeople !== 0
                  ? (
                      (billAmount * tipPercent + parseInt(billAmount)) /
                      numPeople
                    ).toFixed(2)
                  : "$0.00"}
              </div>
            </div>
            <button className="reset-button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
