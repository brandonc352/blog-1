import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSinglePage, updatePage } from "../../../controllers/pages";

const EditPage = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState({ title: "", body: "" });
  const { title, body } = page;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPage({
      ...page,
      [name]: value,
    });
  };

  let { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePage(id, page);
    navigate("/list-pages");
  };

  useEffect(() => {
    getSinglePage(id).then((data) => setPage(data));
  }, []);

  return (
    <>
      <h1>Edit Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <label>Body</label>
        <br />
        <input
          id="body"
          name="body"
          type="text"
          value={body}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />

        <button className="saveBTN">Save</button>
      </form>
    </>
  );
};

export default EditPage;
