import React from "react";
import { useSelector } from "react-redux";
import FunctionTypes from "./FunctionTypes";

const FPList = () => {
  const { weights } = useSelector((state) => state.FP);
  const { UFP } = useSelector((state) => state.FP);

  return (
    <div>
      <div className="d-flex flex-wrap p-3 gap-4 justify-content-center">
        {weights.map((item) => (
          <FunctionTypes weights={item} key={item.id} />
        ))}
      </div>
      <h1 className="text-center mb-5">UFP = {UFP}</h1>
      <hr
        style={{
          border: "3px solid black",
        }}
      />
    </div>
  );
};

export default FPList;
