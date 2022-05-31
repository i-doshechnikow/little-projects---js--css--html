const getMovies = async () => {
  const req = await fetch(MOVIES_URL, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "X-RapidAPI-Host": MOVIES_HOST,
      "X-RapidAPI-Key": MOVIES_API,
    },
  });

  const result = await req.json();
  return result;
};

const showMovies = async ({ results }) => {
  main.innerHTML = "";

  results.forEach((element) => {
    const { countries, year, image, rating, titleOriginal } = element;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
      <div>
        ${titleOriginal}
      </div>
    `;

    document.querySelector("#main").appendChild(movieEl);
  });
};

getMovies().then((movies) => showMovies(movies));

const { form } = document.forms;
console.log("form :>> ", form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = form.elements.search.value;

  if (value !== "") {
    search.value = "";
  }
});

getMovies().then((el) => console.log(el));
