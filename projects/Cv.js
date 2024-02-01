
      document.getElementById("home1").addEventListener("click", function(){
        document.getElementById("home").style.display = "flex";
        document.getElementById("Education").style.display = 'none';
        document.getElementById("experience").style.display = 'none';
        document.getElementById("About").style.display = 'none';
        document.getElementById("contact").style.display = 'none';
    });

    document.getElementById("Education1").addEventListener("click", function(){
        document.getElementById("home").style.display = "none";
        document.getElementById("education").style.display = 'flex';
        document.getElementById("experience").style.display = 'none';
        document.getElementById("About").style.display = 'none';
        document.getElementById("contact").style.display = 'none';
    });

    document.getElementById("Experience1").addEventListener("click", function(){
        document.getElementById("home").style.display = "none";
        document.getElementById("education").style.display = 'none';
        document.getElementById("experience").style.display = 'flex';
        document.getElementById("About").style.display = 'none';
        document.getElementById("contact").style.display = 'none';
    });

    document.getElementById("About1").addEventListener("click", function(){
        document.getElementById("home").style.display = "none";
        document.getElementById("education").style.display = 'none';
        document.getElementById("experience").style.display = 'none';
        document.getElementById("About").style.display = 'flex';
        document.getElementById("contact").style.display = 'none';
    });

    document.getElementById("contact1").addEventListener("click", function(){
        document.getElementById("home").style.display = 'none';
        document.getElementById("education").style.display = 'none';
        document.getElementById("experience").style.display = 'none';
        document.getElementById("About").style.display = 'none';
        document.getElementById("contact").style.display = 'flex';
    });
    document.addEventListener("DOMContentLoaded", function() {
  // Create table element
  var table = document.createElement("table");

  // Create table headers
  var headers = ["Sr. #", "Name of Degree/Diploma", "Specialization ", "Period Attended", " Name of the Institution"];
  var thead = table.createTHead();
  var headerRow = thead.insertRow();
  headers.forEach(function(headerText) {
    var th = document.createElement("th");
    var text = document.createTextNode(headerText);
    th.appendChild(text);
    headerRow.appendChild(th);
  });

  // Sample data (replace this with your actual data)
  var data = [
    ["Sr. #", "Name of Degree/Diploma", "Specialization ", "Period Attended Year", "Name of the Institution"],
    ["1:", "Masters in Commerce M.com", "Commerce", "2022", "University of the Punjab"],
    ["2:", "Bachelor in Commerce B.com ", "Commerce", "2021", "University of the Punjab"],
    ["3:", "Inter in Commerce I.com", "Commerce", "2018", "BISE Lahore"],
    ["4:", "Matric", "Science", "2016", "BISE Lahore"]
  ];

  // Create table body with rows and data
  var tbody = table.createTBody();
  data.forEach(function(rowData) {
    var row = tbody.insertRow();
    rowData.forEach(function(cellData) {
      var cell = row.insertCell();
      cell.textContent = cellData;
    });
  });

  // Append table to the container
  var tableContainer = document.getElementById("table-container");
  tableContainer.appendChild(table);
});