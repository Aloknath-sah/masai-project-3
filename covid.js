window.onload = function () {
  var button = document.getElementById("summary");
  button.addEventListener("click", handleSummary);

  var country = document.getElementById("country");
  country.addEventListener("click", handleCountry);

  var particular_country = document.getElementById("p_country");
  particular_country.addEventListener("click", handleParticularCountry);
};

function handleSummary() {
  event.preventDefault();
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
    country.setAttribute("class", "bg-primary");
    //console.log(country);
    cont.append(country);

    var new_confirmed = document.createElement("th");
    new_confirmed.textContent = data[i].NewConfirmed;
    new_confirmed.setAttribute("class", "bg-warning");
    //console.log(new_confirmed);
    cont.append(new_confirmed);

    var new_deaths = document.createElement("th");
    new_deaths.textContent = data[i].NewDeaths;
    new_deaths.setAttribute("class", "bg-secondary");
    cont.append(new_deaths);

    var new_recovered = document.createElement("th");
    new_recovered.textContent = data[i].NewRecovered;
    new_recovered.setAttribute("class", "bg-success");
    cont.append(new_recovered);

    var total_deaths = document.createElement("th");
    total_deaths.textContent = data[i].TotalDeaths;
    total_deaths.setAttribute("class", "bg-danger");
    cont.append(total_deaths);
    //console.log(cont);
    tbody.append(cont);
    //console.log(tbody);

    div.append(tbody);
    //console.log(div);
  }
}

function handleCountry() {
  event.preventDefault();
  var c = document.getElementById("c").value;

  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.covid19api.com/total/dayone/country/" + c + "/status/confirmed"
  );
  xhr.send();

  xhr.onload = function () {
    displayStatus(this.response);
  };
}

function displayStatus(response) {
  //console.log(response);
  var live_status = JSON.parse(response);
  console.log(live_status);
  var div = document.getElementById("latest_stat");
  var data = live_status[live_status.length - 1];
  div.textContent = data.Cases;
}

function handleParticularCountry() {
  event.preventDefault();
  var par_country = document.getElementById("par_country").value;

  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.covid19api.com/live/country/" +
      par_country +
      "/status/confirmed"
  );
  xhr.send();

  xhr.onload = function () {
    displayParCountry(this.response);
  };
}

function displayParCountry(response) {
  var particular = JSON.parse(response);
  console.log(particular);

  var div = document.getElementById("d_particular");
}
