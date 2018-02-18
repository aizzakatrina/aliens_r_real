// Getting a reference to the input field and button
var dateTimeInput = document.querySelector("#dateTime");
var searchButton = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
// searchButton.addEventListener("click", handleSearchButtonClick);

// Set filterTimes to dataSet initially
var filterTimes = dataSet;

 // appending a table 
function renderTable() {
    // header text
    var headers = ["Date/Time", "City", "State", "Country", "Shape", "Duration (Minutes)", "Comments"]

    // Get a reference to the tr element with id 'header'
    var $header = document.querySelector("#header");

    for (var h=0; h < headers.length; h++) {
      // Insert a new cell (<td>) at the first position of the <tr> element:
      var th = document.createElement("th");
  
      // Add text in the new cell:
      th.innerHTML = headers[h];

      // Use 'appendChild' to put the heading text into the cell
      $header.appendChild(th);  
    };  

    // Create an empty <tbody> element and add it to the table:
    var tableBody = document.querySelector("tbody");

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

renderTable();