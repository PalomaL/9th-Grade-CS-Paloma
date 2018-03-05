var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json"
var query = "?q=subway"
var api_key = "&api-key=a5ac75e55ba140eaa75b0fde7d241ffb"


function setup() {
  loadJSON(url+ query + api_key, getJson, error1);
}

function getJson(data) {
  console.log("json get");
  console.log(data)
}

function error1(err) {
  console.log("Error: ");
  console.log(err);
}