window.onload = function () {
  var button = document.getElementById("summary");
  button.addEventListener("click", handleSummary);

  var country = document.getElementById("country");
  country.addEventListener("click", handleCountry);
};

function handleSummary() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.covid19api.com/summary");
  xhr.send();

  xhr.onload = function () {
    displayData(this.response);
  };
}

function displayData(response) {
  var summary = JSON.parse(response);
  console.log(summary);
  var div = document.getElementById("d_summary");
  var data = summary.Countries;
  console.log(data);

  for (var i = 0; i < data.length; i++) {
    var tbody = document.createElement("tbody");
    var cont = document.createElement("tr");

    var country = document.createElement("th");
    country.textContent = data[i].Country;
    //console.log(country);
    cont.append(country);

    var new_confirmed = document.createElement("th");
    new_confirmed.textContent = data[i].NewConfirmed;
    //console.log(new_confirmed);
    cont.append(new_confirmed);

    var new_deaths = document.createElement("th");
    new_deaths.textContent = data[i].NewDeaths;
    cont.append(new_deaths);

    var new_recovered = document.createElement("th");
    new_recovered.textContent = data[i].NewRecovered;
    cont.append(new_recovered);

    var total_deaths = document.createElement("th");
    total_deaths.textContent = data[i].TotalDeaths;
    cont.append(total_deaths);

    tbody.append(cont);
  }

  console.log(cont);

  div.append(tbody);
}

function handleCountry() {
  var c = document.getElementById("c").value;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.covid19api.com/total/country/" + c);
  xhr.send();

  xhr.onload = function () {
    displayStatus(this.response);
  };
}

function displayStatus(response) {
  console.log(response);
}
