import { useParams } from "react-router-dom";

const DeleteContent = () => {
  let { id } = useParams();

  const handleDelete = (event) => {
    event.preventDefault();
    var answer = window.confirm("Delete content?");
    if (answer) {
      fetch(`http://localhost:7500/pages/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  };

  return (
    <a href="/delete" className="deleteBTN" onClick={handleDelete}>
      Delete Page
    </a>
  );
};
export default DeleteContent;
