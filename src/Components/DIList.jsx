import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DiRates from "./DiRates";
import { calcFP, calcTCF } from "../Redux/FPSlice";

export const DIList = () => {
  const { TCFNames } = useSelector((state) => state.FP);
  const { DI } = useSelector((state) => state.FP);
  const { TCF } = useSelector((state) => state.FP);
  const { FP } = useSelector((state) => state.FP);

  const dispatch = useDispatch();

  const FPResult = () => {
    dispatch(calcTCF(DI));
    dispatch(calcFP());
  };

  return (
    <div>
      <div className="d-flex flex-wrap p-3 gap-4 justify-content-between">
        {TCFNames.map((item) => (
          <DiRates key={item.id} Name={item.name} />
        ))}
      </div>

      <h1 className="text-center mb-5">DI = {DI}</h1>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary mb-3" onClick={FPResult}>
          Calc TCF
        </button>
      </div>
      <div className="d-flex justify-content-center m-5">
        <h1>TCF = {TCF}</h1>
        <h1 className="ms-5">FP = {FP}</h1>
      </div>
      <hr
        style={{
          border: "3px solid black",
        }}
      />
    </div>
  );
};
