export function requestApi(query) {
  const url = `/api/v2/${query}`;
  return fetch(url, {
    credentials: "include",
    headers: {
      "X-Account": process.env.REACT_APP_API_ACCOUNT,
      "X-Token": process.env.REACT_APP_API_TOKEN
    }
  }).then(
    response => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("Error", response, query);
        return response.text().then(text => Promise.reject(text));
      }
    },
    fail => console.log(fail)
  );
}
