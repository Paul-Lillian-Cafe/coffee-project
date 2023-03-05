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

//added col-6 for left side 
function renderCoffee(coffee) {
    var html = '<div id="cards" class="coffee col-6 col-sm-3 col-lg-3 card text-center ">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h3 class="card-header w-70 text-nowrap">' + coffee.name + '</h3>';
    html += '<p id="cardstext" class="p-1 card-body text-dark">' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

//had to reverse the loop so it counted up instead of backwards
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
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

// function secondDropdown(e) {
//     e.preventDefault();
//     let selectedRoast = roastSelectionTwo.value;
//     let filteredCoffees = [];
//     coffees.forEach(function(coffee){
//         if (coffee.roast === selectedRoast){
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }

function addCoffee(e){
    e.preventDefault()
    let coffeeId= coffees.length +1;
    let coffeeName = document.getElementById('second-typing').value;
    let coffeeRoast = document.getElementById('roast-selection-two').value;
    let newCoffee = {id: coffeeId, name: coffeeName, roast: coffeeRoast};
    coffees.push(newCoffee);

    tbody.innerHTML = renderCoffees(coffees);

}



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light', desc: 'Light city/New England roast coffees taste bright, delicate, fruity, and floral. The hay-like flavor evident in cinnamon roasts has been cooked away, leaving behind the truest flavor notes of the coffee cherry itself.'},
    {id: 2, name: 'Half City', roast: 'light', desc: 'For a fruity and flowery brew without the sour acidity of under-roasted beans, give the half city roast a try.'},
    {id: 3, name: 'Cinnamon', roast: 'light', desc: 'For a fruity and flowery brew without the sour acidity of under-roasted beans, give the half city roast a try.'},
    {id: 4, name: 'City', roast: 'medium', desc: 'Your coffee beans are in prime territory, about halfway between the first and second cracks; the caramelized flavor profile'},
    {id: 5, name: 'American', roast: 'medium', desc: 'At this roasting level, coffee beans have just begun to develop their rich chocolatey brown color, transitioning out of the pale cinnamon shade.'},
    {id: 6, name: 'Breakfast', roast: 'medium', desc: 'a blend of coffee beans (meaning coffee sourced from multiple farms, regions, or countries) is often used for breakfast, the flavor profile is likely to vary greatly by the brand of beans you purchase.' },
    {id: 7, name: 'High', roast: 'dark', desc: 'This roast is still not the darkest on the scale, though, so it could be a comfortable daily drinker for some coffee fans.'},
    {id: 8, name: 'Continental', roast: 'dark', desc: 'Continental roasts are usually the first in line in the scale of medium to dark roasts; a smoky, caramel-like body is distinct in the flavor, but we are not yet experiencing the burnt heaviness of the darkest roasts.'},
    {id: 9, name: 'New Orleans', roast: 'dark', desc: 'A New Orleans roast embodies the flavor of dark coffee without all the elements that we could do without; no burnt or bitter taste, or greasy, heavy mouthfeel.'},
    {id: 10, name: 'European', roast: 'dark', desc: 'The European style of roasting is meant to create a smooth, low-acidity coffee that pairs well with charcuterie, crudité, and patisserie.'},
    {id: 11, name: 'Espresso', roast: 'dark', desc:'These coffee beans are roasted the longest of all bean roasts until they are the color of dark chocolate or even black. '},
    {id: 12, name: 'Viennese', roast: 'dark', desc: ' It is a full-bodied, low-acidity roast with a heavy mouthfeel and undercurrents of dark chocolate.'},
    {id: 13, name: 'Italian', roast: 'dark', desc: 'The coffee is bitter with a dash of sweetness at best, taking on a strong smoky flavor and low acidity. You might enjoy the occasional cup of Italian roast in the afternoon or as the base for an espresso drink,'},
    {id: 14, name: 'French', roast: 'dark', desc: 'French roasts, beloved by dark coffee drinkers, are popularly used in a French press or even for drip coffee. It pairs well with heavy cream, which balances out the intensity of the roast, and we find it to be a good strong coffee for affogato drinks. '},
];


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');



let submitButtonTwo = document.querySelector('#submitTwo');
let roastSelectionTwo = document.querySelector('#roast-selection-two');

tbody.innerHTML = renderCoffees(coffees);



submitButton.addEventListener('click', updateCoffees);
submitButtonTwo.addEventListener('click', addCoffee);
