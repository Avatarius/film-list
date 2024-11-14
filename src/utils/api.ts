function getCharacters() {
  return fetch("https://api.disneyapi.dev/character")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status);
      }
    })
    .then((data) => {
      return data;
    });
}

export { getCharacters };
