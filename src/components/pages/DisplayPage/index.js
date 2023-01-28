import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSinglePage, deletePage } from "../../../controllers/pages.js";

const DisplayPage = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState({ title: "", body: "" });
  const { title, body } = page;

  let { id } = useParams();

  useEffect(() => {
    getSinglePage(id).then((data) => setPage(data));
  }, []);

  const handleDelete = (event, id) => {
    deletePage(event, id);
    navigate("/list-pages");
  };

  return (
    <>
      <h1>Display Page</h1>
      <h1>{title}</h1>
      <div>{body}</div>
      <Link to={{ pathname: `/page/edit/${id}` }}>Edit Page</Link>
      <br />
      <a href="/delete" onClick={(e) => handleDelete(e, id)}>
        Delete Page
      </a>
    </>
  );
};

export default DisplayPage;
