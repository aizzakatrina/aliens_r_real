// Getting a reference to the button on the page with the id property set to `search`
var searchButton = document.querySelector("#search");

 // appending a table 
function renderTable() {
    // header text
    var headers = ["Date/Time", "City", "State", "Country", "Shape", "Comment"]
  
    // Getting a reference to the to div with id property "ufo-sighting"
    var ufoSighting = document.querySelector("#ufo-sighting");
  
    // Create an empty <thead> element and add it to the table:
    var tableHeader = document.createElement("thead");
  
    // Create an empty <tr> element and add it to the first position of <thead>:
    var row = document.createElement("tr");    
  
    for (var h=0; h<headers.length; h++) {
      // Insert a new cell (<td>) at the first position of the "new" <tr> element:
      var td = document.createElement("td");
  
      // Add some bold text in the new cell:
      td.innerHTML = headers[h];

      // Use 'appendChild' to put the heading and paragraph into the `app` container
      ufoSighting.appendChild(td);  
    };  
};

renderTable();