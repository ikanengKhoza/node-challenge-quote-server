import React, { useState, useEffect } from "react";

const Ouotes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/quotes`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      {data.map((element) => {
        return `${element.quotes} by ${element.author}`;
      })}
    </div>
  );
};
export default Ouotes;
