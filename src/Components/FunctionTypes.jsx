import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { calcUFP } from "../Redux/FPSlice";

const FunctionTypes = ({ weights: { Name, simple, average, complex } }) => {
  const [SimpleValue, setSimpleValue] = useState(0);
  const [AverageValue, setAverageValue] = useState(0);
  const [ComplexValue, setComplexValue] = useState(0);

  const dispatch = useDispatch();

  //const [res, setRes] = useState(0);

  let Result = 0;
  const calc = () => {
    Result =
      SimpleValue * simple + AverageValue * average + ComplexValue * complex;
    //setRes(Result);
    dispatch(calcUFP(Result));
  };

  return (
    <div className="m-3">
      <h4 className="mb-3">{Name}</h4>
      <div className="">
        <InputGroup className="mb-3">
          <Form.Control
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => setSimpleValue(e.target.value)}
          />
          <InputGroup.Text
            style={{ width: "6rem", display: "flow-root" }}
            id="basic-addon2"
          >
            Simple
          </InputGroup.Text>
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => setAverageValue(e.target.value)}
          />
          <InputGroup.Text
            style={{ width: "6rem", display: "flow-root" }}
            id="basic-addon2"
          >
            Average
          </InputGroup.Text>
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => setComplexValue(e.target.value)}
          />
          <InputGroup.Text
            style={{ width: "6rem", display: "flow-root" }}
            id="basic-addon2"
          >
            Complex
          </InputGroup.Text>
        </InputGroup>
        <Button onClick={calc} variant="primary">
          Calculate
        </Button>
      </div>
    </div>
  );
};

export default FunctionTypes;
