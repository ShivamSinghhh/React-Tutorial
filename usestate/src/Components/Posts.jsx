import { useState } from "react";
import "./Posts.css";
import {PostItem} from "./PostItem"

function Posts() {
  const [data, setData] = useState([]);

  const fetchAndUpdateData = async () => {
    try {
      const posts = await getData();
      setData(posts);
     // console.log("inside data",data,posts)
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async() => {
    return await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`).then(
      (res) => res.json()
    );
  };

  console.log("outside data",data);
  return (
    <div className="Posts">
      <h2>Posts</h2>
      <button onClick={fetchAndUpdateData}>Get Posts</button>
      <ul>
        {data.map((el) => (
          <PostItem key={el.id} title={el.title}/>
        ))}
      </ul>
    </div>
  );
}
export default Posts;

// Json fake data url :
// https://jsonplaceholder.typicode.com/posts?_limit=10
