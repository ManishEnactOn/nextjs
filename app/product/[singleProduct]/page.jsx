import React from "react";
import { useRouter } from "next/navigation";

const singleProduct = () => {
  const router = useRouter();
  console.log("router");
  return <div>single product</div>;
};

export default singleProduct;
