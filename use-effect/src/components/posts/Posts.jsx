import { useState, useEffect } from "react";
import "./Posts.css";
import { PostItem } from "./PostItem";

function Posts() {
  const [data, setData] = useState([]);
  const [current,setCurrent]= useState(1);

  useEffect(() => {
    fetchAndUpdateData(current);
  },[current]);

  const fetchAndUpdateData = async (pageNumber) => {
    try {
      const posts = await getData(pageNumber);
      setData(posts);
    } catch (error) {
      console.log(error);
    }
  };
  const getData = (pageNumber) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNumber}`).then(
      (res) => res.json()
    );
  };
 const handleClick = (val)=> setCurrent(current+val)
  
  return (
    <div className="Posts">
      <h2>Posts</h2>
      <ul>
        {data.map((el) => (
          <PostItem key={el.id} title={el.title} id={el.id} />
        ))}
      </ul>
      <button disabled={current===1} onClick={()=>handleClick(-1)}>Prev</button>
      <button disabled>{current}</button>
      <button onClick={()=>handleClick(1)}>Next</button>
    </div>
  );
}
export default Posts;

// Json fake data url :
// https://jsonplaceholder.typicode.com/posts?_limit=10
