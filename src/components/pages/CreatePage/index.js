import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPage } from "../../../controllers/pages";

const CreatePage = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState({ title: "", body: "" });
  const [color, setColor] = useState("red");

  const { title, body } = page;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPage({
      ...page,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createPage(page);
    navigate("/list-pages");
  };

  useEffect(() => {
    if (title.length > 0 && body.length > 0) {
      setColor("green");
    } else {
      setColor("red")
    }
  }, [page])

  return (
    <>
      <h1>Create a Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <label htmlFor="body">Body</label>
        <br />
        <input
          id="body"
          name="body"
          type="text"
          value={body}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <button style={{backgroundColor: color}}>Submit</button>
      </form>
    </>
  );
};

export default CreatePage;
