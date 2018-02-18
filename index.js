// Get a reference to the <tbody> element, input field, and button
var tableBody = document.querySelector("tbody");
var timeInput = document.querySelector("#time");
var searchButton = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
searchButton.addEventListener("click", handleSearchButtonClick);

// Set filterTimes to dataSet initially
var filterTimes = dataSet;

 // appending a table 
function renderTable() {
  tableBody.innerHTML = "";
  
    for (var i=0; i < filterTimes.length; i++) {
      // Get get the current UFO sighting object and its fields
      var sighting = filterTimes[i];
      var fields = Object.keys(sighting);

       // Create a new row in the tbody
      var $row = tableBody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the address object, create a new cell 
        //and  set its inner text to be the current value at the current sighting's field
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = sighting[field];
      }
    }
};

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace
  var filterDate = timeInput.value.trim();

  // Set filterTimes to an array of all datetimes whose "time" matches the filter
  filterTimes = dataSet.filter(function(sighting) {
    var dateTime = sighting.datetime;

    // If true, add the address to the filterTimes, otherwise don't add it to filterTimes
    return dateTime === filterDate;
  });

  renderTable();
}

renderTable();