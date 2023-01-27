export const createPage = (pageObj) => {
  fetch("http://localhost:7500/pages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pageObj),
  });
};

export const getSinglePage = async (id) => {
  return fetch(`http://localhost:7500/pages/${id}`)
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
};

export const updatePage = (id, pageObj) => {
  return fetch(`http://localhost:7500/pages/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pageObj),
  });
};

export const getAllPages = async () => {
  return fetch("http://localhost:7500/pages")
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
};

export const deletePage = (event, id) => {
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
