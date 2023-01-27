import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllPages } from "../../../controllers/pages.js";

const AllPages = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    getAllPages().then((data) => setPages(data));
  }, []);

  return (
    <>
      <h1>List Pages</h1>
      <div>
        {pages &&
          pages.map(({ id, title, body }) => (
            <div key={id}>
              <b>
                <Link to={{ pathname: `/page/${id}` }}>{title}</Link>
              </b>
              <p>{body}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default AllPages;
