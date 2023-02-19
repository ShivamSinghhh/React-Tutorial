import { useEffect, useState } from "react";
import User from "../components/User";

export default function UsersPage() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorApi, setErrorApi] = useState("");

  const fetchAndUpdateData = async () => {
    return await fetch("https://reqres.in/api/users?page=2url")
      .then((res) => res.json())
      .then((res) => setUsersData(res))
      .catch((err) => setErrorApi(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchAndUpdateData();
  }, []);
  //console.log(usersData)
  return loading ? (
    <h1>Loading...</h1>
  ) : errorApi ? (
    <h1>Something is wrong..</h1>
  ) : (
    <div className="container">
      {usersData.data?.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
}
