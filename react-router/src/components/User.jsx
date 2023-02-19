import { Link } from "react-router-dom";

export default function User(props) {
  const { first_name, last_name, avatar, id } = props;

  return (
    <div>
      <img src={avatar} alt="" />
      <h4>Id : {id}</h4>
      <h4>
        Name : {first_name} {last_name}
      </h4>
      <Link to={`${id}`}>More Info</Link>
    </div>
  );
}
