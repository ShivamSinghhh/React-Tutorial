import "./Card.css"

export const Card = ({heading,arr,children}) => {
 
  return (
    <>
      <h1>{heading}</h1>
      <ul>{arr.map((el)=>(<li>{el}{children}</li>))}       
      </ul>
    </>
  );
};
