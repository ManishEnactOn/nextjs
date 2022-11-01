"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const singleProduct = ({ params }) => {
  const router = useRouter();
  console.log(router);
  console.log("router", params.singleProduct);
  return (
    <>
      <Link href={"/about"}>
        <div> single product: {params.singleProduct}</div>
      </Link>
    </>
  );
};

export default singleProduct;
