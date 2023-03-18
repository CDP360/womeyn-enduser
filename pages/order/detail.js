import React from "react";
import Orderdetails from "../../src/components/userprofile/components/order/components/orderdetails/Orderdetails";
import LayoutHeader from "./../../src/components/Layoutheader/LayoutHeader";

function details() {
  return (
    <LayoutHeader title="detail">
      <Orderdetails />
    </LayoutHeader>
  );
}

export default details;
