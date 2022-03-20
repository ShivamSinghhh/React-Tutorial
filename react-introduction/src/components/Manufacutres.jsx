export const Manufactures = () => {
  return (
    <>
      <h1 style={{color:"teal"}}>Mobile Operating System</h1>
      <ul>{["Android","Blackberry","iPhone","Windows Phone"].map((el)=>(<li>{el}</li>))}       
      </ul>
    </>
  );
};
