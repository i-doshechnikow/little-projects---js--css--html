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
    const { countries, year, image, rating, titleOriginal, description } =
      element;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
      <div class='movie'>
      <img src='${image}' alt='${titleOriginal}'/>
      <div class="movie-info">
        <h3>
        ${titleOriginal}
        <h3>
        <span class='${
          parseInt(rating) > 5 ? "green" : "orange"
        }'>${rating}</span>
      </div>
      <div class='overview'>
        <h2>Owerview</h2>
        <h3>
        ${countries.map((el) => " " + el.name)}
        </h3>
        ${year}
        ${description}
      </div>
      </div>
    `;

    main.appendChild(movieEl);
  });
};

getMovies().then((movies) => showMovies(movies));

const { form } = document.forms;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = form.elements.search.value;

  if (value !== "") {
    search.value = "";
  }
});

getMovies().then((el) => console.log(el));
