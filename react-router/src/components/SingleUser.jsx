import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const getData = (id) => {
  return fetch(`https://reqres.in/api/users/${id}`).then((res) => res.json());
};

export const SingleUser = () => {
  const [singleData, setSingleData] = useState({});
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const fetchAndUpdateData = async (id) => {
    setLoading(true);
    return await getData(id)
      .then((data) => setSingleData(data))
      .catch((err) => setErr(true))
      .finally(() => setLoading(false));
  };
  const params = useParams();
  // It will fetch the parameter that has been passed into url: after the pathName.
  useEffect(() => {
    fetchAndUpdateData(params.user_id);
  }, [params.user_id]);

  return (
    <>
      {loading ? (
        <h2>Loading..</h2>
      ) : err ? (
        <h2>Error fetching data..</h2>
      ) : (
        <div>
          <img
            src={singleData?.data?.avatar}
            alt={singleData?.data?.first_name}
          />
          <h4>
            Name : {singleData?.data?.first_name} {singleData?.data?.last_name}
          </h4>
          <h5>Email : {singleData?.data?.email}</h5>
          <h4>Website : {singleData?.support?.url}</h4>
          <h4>{singleData?.support?.text}</h4>
        </div>
      )}
    </>
  );
};
