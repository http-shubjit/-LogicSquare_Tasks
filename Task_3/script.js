const CAFE_URL =
  "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json";
const PLACE_URL =
  "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("unable to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function fetchDataAndDisplay() {
  const cafesData = await fetchData(CAFE_URL);
  const placesData = await fetchData(PLACE_URL);

  const searchBox = document.getElementById("searchBox");
  const searchButton = document.getElementById("searchButton");
  const cafeListTable = document.getElementById("cafeListTable");

  searchBox.addEventListener("keyup", (event) => {
    let searchItem = searchBox.value.split(" ").join("");

    if (searchItem) {
      showingCasfePlace(searchItem);
    }
  });
  searchButton.addEventListener("click", () => {
    let searchItem = searchBox.value.split(" ").join("");
    if (searchItem) {
      showingCasfePlace(searchItem);
    }
  });

  function showingCasfePlace(searchItem) {
    let cafes = cafesData.cafes;
    let places = placesData.places;

    const result = [];

    cafes.forEach((cafe) => {
      if (cafe.name.toLowerCase().includes(searchItem.toLowerCase())) {
        const cafeWithplace = places.find(
          (place) => place.id === cafe.location_id
        );
        if (cafeWithplace) {
          result.push({
            name: cafe.name,
            street_no: cafeWithplace.street_no,
            locality: cafeWithplace.locality,
            postal_code: cafeWithplace.postal_code,
          });
        }
      }
    });

    cafeListTable.innerHTML = "";

    let table = "<table>";
    table =
      table +
      "<tr><th>Name</th><th>Street</th><th>Locality</th> <th>Pin Code</th></tr>";
    result.forEach((res) => {
      table += `<tr><td>${res.name}</td><td>${res.street_no}</td><td>${res.locality}</td> <td>${res.postal_code}</td></tr> `;
    });
    table += "</table>";
    //const cafeListTable = document.getElementById("cafeListTable");
    cafeListTable.innerHTML = table;
  }
}
fetchDataAndDisplay();
