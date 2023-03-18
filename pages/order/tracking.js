import React from "react";
import Ordertarcking from "../../src/components/userprofile/components/order/components/ordertracking/Ordertarcking";
import LayoutHeader from "./../../src/components/Layoutheader/LayoutHeader";

function tracking() {
  return (
    <LayoutHeader title={"tracking"}>
      <Ordertarcking />
    </LayoutHeader>
  );
}

export default tracking;
