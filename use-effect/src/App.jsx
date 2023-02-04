import "./App.css";
import Quotes from "./components/quotes/QuotesPage";
import Posts from "./components/posts/Posts";
import { useState } from "react";

function App() {
  const [isQuote, setIsQuote] = useState(true);

  return (
    <div className="App">
      <div className="App-header">
        <button onClick={() => (isQuote ? "" : setIsQuote(!isQuote))}>
          <h2>Quote's</h2>
        </button>
        <button onClick={() => (isQuote ? setIsQuote(!isQuote) : "")}>
          <h2>Post's</h2>
        </button>
      </div>

      <div className="App-header">
        <h2>{isQuote ? "Quotes page" : "Post's Page"}</h2>
      </div>
      {isQuote ? <Quotes /> : <Posts />}
    </div>
  );
}

export default App;
