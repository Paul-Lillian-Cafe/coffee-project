"use strict"


let search = document.getElementById('searchCoffee');
search.addEventListener('keyup', function() {
    console.log("event fired off");
    let searchValue = search.value.toUpperCase();
    let filteredCoffees = [];
    for(let i = 0; i < coffees.length; i++) {
        if(coffees[i].name.toUpperCase().includes(searchValue)) {
            console.log(coffees[i]);
            filteredCoffees.push(coffees[i]);
        }
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
});


let nextSearch = document.getElementById("second-typing");

nextSearch.addEventListener('keyup', function(){
   console.log("did this one work?");
   let getValue = nextSearch.value.toUpperCase();
   let filteredCoffees =[];
   for(let i = 0; i < coffees.length; i++){
       if(coffees[i].name.toUpperCase().includes(getValue)){
           filteredCoffees.push(coffees[i]);
       }
       console.log(coffees[i]);
   }
   tbody.innerHTML = renderCoffees(filteredCoffees);
});

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function secondDropdown(e) {
    e.preventDefault();
    let selectedRoast = roastSelectionTwo.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee){
        if (coffee.roast === selectedRoast){
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

let submitButtonTwo = document.querySelector('#submitTwo');
let roastSelectionTwo = document.querySelector('#roast-selection-two');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
submitButtonTwo.addEventListener('click', secondDropdown);
