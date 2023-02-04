import { useState, useEffect } from "react";
import axios from "axios";
import { Quote } from "./Quote";
import "./QuotesPage.css"

export default function Quotes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/quotes?_limit=10")
      .then((res) => setData(res.data.quotes))
      .catch((err) => console.log(err));
  }, []);
  console.log("data =>", data);
  return (
    <>
      <ul>
        {data.map((item,el) => (
          <li className={el%2===0 ? "bg-grey": ""} >
            <Quote key={el} phrases={item.quote} author={item.author} />
          </li>
        ))}
      </ul>
    </>
  );
}
