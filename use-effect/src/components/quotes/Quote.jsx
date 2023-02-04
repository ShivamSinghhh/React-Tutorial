import {Author} from "./Author"

export const Quote = ({ phrases,author }) => {
  return (
    <div>
      <p>
        <em>{phrases}</em> <i><Author authorName={author}/></i>
      </p>
      
    </div>
  );
};
