const cities = [];

const prom = fetch(
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
)
  .then((res) => res.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    return (
      place.city.match(`${wordToMatch}`) || place.state.match(`${wordToMatch}`)
    );
  });
}

const ans = findMatches("Bos", cities);
// console.log(ans);

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  //   console.log(matchArray);
  const html = matchArray
    .map((place) => {
      return `
<li> <span class='name'>${place.city},${place.state}</span> 
   <span class='population'>${place.population}</span>
</li>


`;
    })
    .join(" ");
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
