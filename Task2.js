const cafes = [
  { name: "Ashley's Cafe ", place_id: "12hydbdf76sljfts87sbfis" },
  { name: "Avenue Bakery Cafe", place_id: "jahgde7wgdiau8ewsahgosd" },
  { name: "Avenue Cafe", place_id: "skjd86svvfdrsv55svbvf3f" },
  { name: "Bazaar Cafe", place_id: "kjk234g4gcvfx8usg1l33pi" },
  { name: "California Chicken Cafe", place_id: "12hydbdf76sljfts87sbfis" },
  { name: "Hi-Lo Cafe", place_id: "mjdhgetr4pojfyts22fzfsh" },
  { name: "Philz Coffee", place_id: "urhw3837ehalod7w02b7835" },
];

const places = [
  {
    id: "12hydbdf76sljfts87sbfis",
    street_no: "1B",
    locality: "Macarthur Blvd",
    postal_code: "20619",
    lat: "38.1781 N",
    long: "118.4171 W",
  },
  {
    id: "jahgde7wgdiau8ewsahgosd",
    street_no: "60H",
    locality: "Solomos Island Road",
    postal_code: "20688",
    lat: "36.7783 N",
    long: "119.4179 W",
  },
  {
    id: "kjk234g4gcvfx8usg1l33pi",
    street_no: "45250",
    locality: "Worth Avenue, Unit A",
    postal_code: "20619",
    lat: "36.1152",
    long: "117.521",
  },
  {
    id: "saswe3s6yydtdr52hsd72yst",
    street_no: "1X",
    locality: "Macarthur Blvd",
    postal_code: "20687",
    lat: "36.7783",
    long: "119.4179",
  },
  {
    id: "skjd86svvfdrsv55svbvf3f",
    street_no: "7S",
    locality: "Three Notch Road",
    postal_code: "20619",
    lat: "36.83",
    long: "119.6",
  },
  {
    id: "mjdhgetr4pojfyts22fzfsh",
    street_no: "22803",
    locality: "Gunston Dr Lexington Park",
    postal_code: "20688",
    lat: "35.7788",
    long: "119.979",
  },
  {
    id: "urhw3837ehalod7w02b7835",
    street_no: "225",
    locality: "Macarthur Blvd",
    postal_code: "20687",
    lat: "35.77813",
    long: "119.41791",
  },
];

function findCaliforniaCafes(searchTerm) {
  let result = [];

  if (searchTerm.length > 0) {
    //**Line74:  for check the searchterm is empty or not
    searchTerm = searchTerm.split(" ").join("").toLowerCase();
    //**line 76: to remove space from serchterm and convert it into lowercase, some one write with space then it just showing not found because the include method check with the space-string ( __Ave) **//
    for (let i = 0; i < cafes.length; i++) {
      if (cafes[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
        //** check the serchterm string is present in any cafes's objects
        for (let j = 0; j < places.length; j++) {
          if (cafes[i].place_id === places[j].id) {
            // * it check if cafe id is equal to place id
            result.push({
              cafe: cafes[i].name,
              street_no: places[j].locality,
              locality: places[j].street_no,
              postal_code: places[j].postal_code,
            });
            break;
          }
        }
      }
    }
    if (result.length > 0) {
      return result;
    } else {
      return "Cafe Name Not Found";
    }
  } else {
    console.log("Enter Cafe Name");
  }
}

console.log(findCaliforniaCafes("  A  ve"));

//testcase1- input: "A V E",  output: if  cafe name have ave or Ave or Avenue or Avenxyz it show this result
//testcase2- input: "  Ave",  output: if  cafe name have ave or Ave or Avenue or Avenxyz show this result
//testcase3- input: "ave",    output: if  cafe name have ave or Ave or Avenue or Avenxyz it show this result
//testcase4- input: "Ave ",   output: if  cafe name have ave or Ave or Avenue or Avenxyz it show this result
//testcase5- input: "AVE",    output: if  cafe name have ave or Ave or Avenue or Avenxyz it show this result
