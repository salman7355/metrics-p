import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useDispatch, useSelector } from "react-redux";
import { calcDI } from "../Redux/FPSlice";

const DiRates = ({ Name }) => {
  const { DIRates } = useSelector((state) => state.FP);

  const [rateChoice, setRateChoice] = useState("NoInfluence");
  const dispatch = useDispatch();

  const calcdi = () => {
    let Result = 0;

    rateChoice === "NoInfluence"
      ? (Result = DIRates.NoInfluence)
      : rateChoice === "Incidental"
      ? (Result = DIRates.Incidental)
      : rateChoice === "Moderate"
      ? (Result = DIRates.Moderate)
      : rateChoice === "Average"
      ? (Result = DIRates.Average)
      : rateChoice === "Significant"
      ? (Result = DIRates.Significant)
      : (Result = DIRates.Essential);

    if (Result !== 0) {
      dispatch(calcDI(Result));
    }
  };

  return (
    <div
      style={{
        width: "30rem",
      }}
    >
      <div className="d-flex justify-content-between m-5 gap-5 ">
        <h5 className="me-5">{Name}</h5>
        <DropdownButton
          variant="outline-secondary"
          title={rateChoice}
          id="input-group-dropdown-2"
          onFocus={calcdi}
          align="end"
          className="mb-3"
        >
          <Dropdown.Item onClick={() => setRateChoice("NoInfluence")}>
            NoInfluence
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setRateChoice("Incidental")}>
            Incidental
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setRateChoice("Moderate")}>
            Moderate
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setRateChoice("Average")}>
            Average
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setRateChoice("Significant")}>
            Significant
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setRateChoice("Essential")}>
            Essential
          </Dropdown.Item>
        </DropdownButton>
      </div>
      {/* <div className="d-flex justify-content-center">
        <button className="btn btn-primary mb-3" onClick={calcdi}>
          Calc DI
        </button>
      </div> */}
    </div>
  );
};

export default DiRates;
