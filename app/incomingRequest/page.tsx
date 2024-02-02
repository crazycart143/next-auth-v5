import React from "react";

export default async function page({ params, searchParams }) {
  let res = await fetch("https://api.vercel.app/blog");
  let posts = await res.json();
  return (
    <div>
      {/* This http://localhost:3000/incomingRequest?hello=world */}
      {/* will display "world", this is useful if you want to get the data from searchParams or the data after the equals "=" sign */}
      <h1>{searchParams.hello}</h1>
    </div>
  );
}
