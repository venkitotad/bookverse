import React from "react";
import { Spin } from "antd";

const Loader = () => (
  <div style={{
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}>
    <Spin tip="Loading..." size="large" />
  </div>
);

export default Loader;
