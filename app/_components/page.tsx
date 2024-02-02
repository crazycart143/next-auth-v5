import React from "react";

export default function page() {
  return (
    <div>
      This folder inside app router uses "_" underscore, this will not be
      accesible in url, this is good if you want to store single use components
      or components that are not reusable. Try removing underscore "_" on
      components folder and see what happens.
    </div>
  );
}
