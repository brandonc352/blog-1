import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ListPages() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:7500/pages")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "";
  if (error) return "Error!";

  const pagesList = data.map(({ id, title, body }) => (
    <div key={id}>
      <b>
        <Link to={{ pathname: `/page/${id}` }}>{title}</Link>
      </b>
      <p>{body}</p>
    </div>
  ));
  
  return (
    <>
      <h1>List Pages</h1>
      <div>{pagesList}</div>
    </>
  );
}
