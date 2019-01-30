// from data.js
var tableData = data;
// Let's create the table body first
var tbody = d3.select("tbody");
var table = d3.select("#ufo-table");

//log this to the console so we can make sure we're pulling our data
//console.log(data);

// Next let's create some empty lists to hold our data for date, city, state, country, shape, duration, and comments.

var dates = [];
var city = [];
var state = [];
var country = [];
var shape = [];
var duration = [];
var comments = [];

// let's add code for user input and the button. First let's select the filter button.

//var submit = d3.select("#filter-btn");

//Now we loop through the 'data' and log each object in the data

tableData.forEach(function(data){
    //console.log(report);
    dates.push(data.datetime),
    city.push(data.city),
    state.push(data.state),
    country.push(data.country),
    shape.push(data.shape),
    duration.push(data.durationMinutes),
    comments.push(data.comments)
});

// Now let's have the console show us what's in each list, just to make sure we're doing this right

//console.log(dates);
//console.log(comments);

// Looks like it's working. Alright so now we append the lists to the table. 

tableData.forEach(function (report) {
    //console.log(report);
    var row = tbody.append("tr");

    Object.entries(report).forEach(function ([key, value]) {
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});
// select filter button
var filter = d3.select("#filter-btn");
// Alright let's also build out the button and User input. Now that we've selected the filter button, let's get it to submit stuff.
filter.on("click", function () {
    //First we're gonna stop the page from refreshing
    d3.event.preventDefault();

    // Then we're selecting the input element and getting the raw HTML

    var inputElement = d3.select("#datetime");

    //Next we get the value property of the input element

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    //console.log(tableData);

    //clear table
    tbody.html("");

    //filter based on input
    var filteredData = tableData.filter(date => date.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach((report)=> {
        var row = tbody.append("tr");
        Object.entries(report).ForEach(([key, value]) =>{
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});
//    filteredData.row(filteredData)
//        .remove()
//        .draw();
    //var input, filter, table, tr, td, i, txtValue;
    
    //filter = inputValue.toUpperCase();
    //table = document.getElementsById("ufo-table");
    //tr = table.getElementsByTagName("tr");
   // for (i = 0; i < tr.length; i++) {
       // td = tr[i].getElementsByTagName("td")[0];
       // if (td) {
            //txtValue = td.textContent || td.innerText;
            //if (txtValue.toUpperCase().indexOf(filter) > -1) {
 //               tr[i].style.display = "";
 //           } else {
 //               tr[i].style.display = "none";
 //           }
//        }
 //   }



