window.onload = function () {
  var button = document.getElementById("summary");
  button.addEventListener("click", handleSummary);
};

function handleSummary() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.covid19api.com/summary");
  xhr.send();

  xhr.onload = function () {
    displayData(this.response);
  };
}

function displayData() {}
