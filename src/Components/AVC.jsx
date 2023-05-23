import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useSelector } from "react-redux";

const AVC = () => {
  const [AvcChoice, setAvcChoice] = useState("AVC");
  const [finalResult, setFinalResult] = useState(0);

  const { FP } = useSelector((state) => state.FP);

  const { AVC } = useSelector((state) => state.FP);

  const calcFR = () => {
    AvcChoice === "Assembly"
      ? setFinalResult(FP * AVC.Assembly)
      : AvcChoice === "C"
      ? setFinalResult(FP * AVC.C)
      : AvcChoice === "COBOL"
      ? setFinalResult(FP * AVC.COBOL)
      : AvcChoice === "Pascal"
      ? setFinalResult(FP * AVC.Pascal)
      : AvcChoice === "Ada"
      ? setFinalResult(FP * AVC.Ada)
      : AvcChoice === "C++"
      ? setFinalResult(FP * AVC.Cpp)
      : AvcChoice === "VisualBasic"
      ? setFinalResult(FP * AVC.VisualBasic)
      : AvcChoice === "OOL"
      ? setFinalResult(FP * AVC.OOL)
      : AvcChoice === "SmallTalk"
      ? setFinalResult(FP * AVC.SmallTalk)
      : AvcChoice === "CodeGenerator"
      ? setFinalResult(FP * AVC.CodeGenerator)
      : AvcChoice === "SQL"
      ? setFinalResult(FP * AVC.SQL)
      : AvcChoice === "SpreadSheets"
      ? setFinalResult(FP * AVC.SpreadSheets)
      : setFinalResult(FP * AVC.GraphicalLanguages);
  };

  return (
    <div className="m-3">
      <div className="d-flex justify-content-center">
        <DropdownButton
          variant="outline-secondary"
          title={AvcChoice}
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item
            onClick={() => {
              setAvcChoice("Assembly");
            }}
          >
            Assembly
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setAvcChoice("C")}>C</Dropdown.Item>
          <Dropdown.Item onClick={() => setAvcChoice("COBOL")}>
            COBOL
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setAvcChoice("Pascal")}>
            Pascal
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setAvcChoice("Ada")}>Ada</Dropdown.Item>
          <Dropdown.Item onClick={() => setAvcChoice("C++")}>C++</Dropdown.Item>
          <Dropdown.Item onClick={() => setAvcChoice("VisualBasic")}>
            VisualBasic
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setAvcChoice("OOL")}>OOL</Dropdown.Item>
          <Dropdown.Item onClick={() => setAvcChoice("SmallTalk")}>
            SmallTalk
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setAvcChoice("CodeGenerator")}>
            CodeGenerator
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setAvcChoice("SQL")}>SQL</Dropdown.Item>
          <Dropdown.Item onClick={() => setAvcChoice("SpreadSheets")}>
            SpreadSheets
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setAvcChoice("GraphicalLanguages")}>
            GraphicalLanguages
          </Dropdown.Item>
        </DropdownButton>
        <button onClick={calcFR} className="btn btn-primary ms-3">
          Calc LOC
        </button>
      </div>
      <h1 className="text-center m-5">LOC = {Math.round(finalResult)}</h1>
    </div>
  );
};

export default AVC;
