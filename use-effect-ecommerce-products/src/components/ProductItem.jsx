export default function ProductItem({id, title, image, price }) {
  return (
    <div key={id} className="item-box">
      <img src={image} alt="itemImg" />
      <h3>{title}</h3>
      <h4> $ {price}</h4>
    </div>
  );
}
