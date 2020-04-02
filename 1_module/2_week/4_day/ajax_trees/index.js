const url =
  "https://opendata.paris.fr/api/records/1.0/search/?dataset=arbresremarquablesparis&rows=1000&facet=genre&facet=espece&facet=stadedeveloppement&facet=varieteoucultivar&facet=dateplantation&facet=libellefrancais";

axios
  .get(url)
  .then(function(HTTPResponse) {
    const trees = HTTPResponse.data.records;
    displayTrees(trees);
  })
  .catch(function(HTTPResponse) {
    console.log(HTTPResponse);
  });

function displayTrees(trees) {
  const list = document.getElementById("list");
  trees.forEach(tree => {
    list.innerHTML += `<li>${tree.fields.libellefrancais} - ${tree.fields.adresse}</li>`;
  });
}
