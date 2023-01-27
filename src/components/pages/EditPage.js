import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EditPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [titleValue, setTitleValue] = useState();
  const [bodyValue, setBodyValue] = useState();

  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBodyValue(event.target.value);
  };

  let { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:7500/pages/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titleValue,
        body: bodyValue,
      }),
    });
  };
  
  useEffect(() => {
    fetch(`http://localhost:7500/pages/${id}`)
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

  return (
    <>
      <h1>Edit Page</h1>
      {titleValue ? "" : setTitleValue(data.title)}
      {bodyValue ? "" : setBodyValue(data.body)}
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <br />
        <input
          id="title"
          type="text"
          value={titleValue ? titleValue : data.title}
          onChange={handleTitleChange}
        />
        <br />
        <br />
        <label>Body</label>
        <br />
        <input
          id="body"
          type="text"
          value={bodyValue ? bodyValue : data.body}
          onChange={handleBodyChange}
        />
        <br />
        <br />

        <button className="saveBTN">Save</button>
      </form>
    </>
  );
}
