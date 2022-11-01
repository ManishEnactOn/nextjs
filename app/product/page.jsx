import React from "react";
import Link from "next/link";
import useRouter from "next/navigation";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}
const product = async () => {
  const data = await getData();
  return (
    <>
      <div>product</div>
      {data.slice(0, 5).map((res) => (
        <>
          {/* <Link href={`/contact`}> */}
          <div>
            <p>{res.id}</p>
            <p>{res.name}</p>
          </div>
          {/* </Link> */}
        </>
      ))}

      <Link href={`/contact`}>contact</Link>
      {/* <Link
        href={{
          pathname: "/about",
          query: { name: "test" },
        }}
      >
        About
      </Link> */}
    </>
  );
};

export default product;
