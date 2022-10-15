// i want this to be a loader component

import React from "react";
import { Spin } from "antd";

const Loader = () => {
  return (
    <div className="loader">
      <Spin size="large" />
    </div>
  );
};

export default Loader;
