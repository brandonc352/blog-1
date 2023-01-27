import { useState } from "react";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:7500/pages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        body: body,
      }),
    });
  };

  return (
    <>
      <h1>Create a Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <label htmlFor="body">Body</label>
        <br />
        <input
          id="body"
          type="text"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
