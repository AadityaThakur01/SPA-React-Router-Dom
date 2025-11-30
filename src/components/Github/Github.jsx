import React from "react";
import { useEffect } from "react";

function Github() {
  const [data, setData] = React.useState(null);
  useEffect(() => {
    fetch();
  });
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github
    </div>
  );
}

export default Github;
