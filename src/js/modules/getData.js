const getData = (url, method, body) =>
  fetch(url, {
    method,
    body,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  });

export default getData;
