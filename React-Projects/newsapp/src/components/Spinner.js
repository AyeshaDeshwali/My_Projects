import React from "react";
// import loading from "./loading.gif";
const Spinner = () => {
  return (
    <div className="text-center">
      <img
        className="my-3"
        src={
          "https://github.com/CodeWithHarry/NewsMonkey-React/blob/master/src/components/loading.gif?raw=true"
        }
        alt="loading"
      />
    </div>
  );
};

export default Spinner;
