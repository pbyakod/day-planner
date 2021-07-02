var currentDayEl = document.getElementById("currentDay");
var displayDate = moment().format('dddd, MMMM Do, YYYY');
currentDayEl.innerHTML = displayDate;

var dateArray = moment().toArray();
var indexOfHour = dateArray[3];

var nineAMEl = document.getElementById('nine');
var tenAMEl = document.getElementById('ten');
var elevenAMEl = document.getElementById('eleven');
var twelveAMEl = document.getElementById('twelve');
var oneAMEl = document.getElementById('one');
var twoAMEl = document.getElementById('two');
var threeAMEl = document.getElementById('three');
var fourAMEl = document.getElementById('four');
var fiveAMEl = document.getElementById('five');

var amArray = [nineAMEl, tenAMEl, elevenAMEl, twelveAMEl, oneAMEl, twoAMEl, threeAMEl, fourAMEl, fiveAMEl];

if(indexOfHour < '9') {
    for(var i = 0; i < 9; i++){
        amArray[i].style.backgroundColor = 'green';
    }
}
else if(indexOfHour == '9') {
    nineAMEl.style.backgroundColor = 'red';
    for(var i = 1; i < 9; i++){
        amArray[i].style.backgroundColor = 'green';
    }
}
else if(indexOfHour == '10') {
    nineAMEl.style.backgroundColor = 'lightgray';
    tenAMEl.style.backgroundColor = 'red';
    for(var i = 2; i < 9; i++){
        amArray[i].style.backgroundColor = 'green';
    }
}
else if(indexOfHour == '11') {
    elevenAMEl.style.backgroundColor = 'red';
    for(var i = 0; i < 2; i++){
        amArray[i].style.backgroundColor = 'lightgray';
    }
    for(var i = 3; i < 9; i++){
        amArray[i].style.backgroundColor = 'green';
    }
}
else if(indexOfHour == '12') {
    twelveAMEl.style.backgroundColor = 'red';
    for(var i = 0; i < 3; i++){
        amArray[i].style.backgroundColor = 'lightgray';
    }
    for(var i = 4; i < 9; i++){
        amArray[i].style.backgroundColor = 'green';
    }
}
else if(indexOfHour == '13') {
    oneAMEl.style.backgroundColor = 'red';
    for(var i = 0; i < 4; i++){
        amArray[i].style.backgroundColor = 'lightgray';
    }
    for(var i = 5; i < 9; i++){
        amArray[i].style.backgroundColor = 'green';
    }
}
else if(indexOfHour == '14') {
    twoAMEl.style.backgroundColor = 'red';
    for(var i = 0; i < 5; i++){
        amArray[i].style.backgroundColor = 'lightgray';
    }
    for(var i = 6; i < 9; i++){
        amArray[i].style.backgroundColor = 'green';
    }
}
else if(indexOfHour == '15') {
    threeAMEl.style.backgroundColor = 'red';
    for(var i = 0; i < 6; i++){
        amArray[i].style.backgroundColor = 'lightgray';
    }
    for(var i = 7; i < 9; i++){
        amArray[i].style.backgroundColor = 'green';
    }
}
else if(indexOfHour == '16') {
    fourAMEl.style.backgroundColor = 'red';
    for(var i = 0; i < 7; i++){
        amArray[i].style.backgroundColor = 'lightgray';
    }
    for(var i = 8; i < 9; i++){
        amArray[i].style.backgroundColor = 'green';
    }
}
else if(indexOfHour == '17') {
    fiveAMEl.style.backgroundColor = 'red';
    for(var i = 0; i < 8; i++){
        amArray[i].style.backgroundColor = 'lightgrey';
    }
}
else {
    for(var i = 0; i < 9; i++){
        amArray[i].style.backgroundColor = 'lightgrey';
    }
}

$(document).ready(function () {
    $(".save-align").on("click", function () {
        var textEl = $(this).siblings(".text").val();
        var hourEl = $(this).parent().attr("id");
        localStorage.setItem(hourEl, textEl);
    })
});

$("#nineblock .text").val(localStorage.getItem("nineblock"));
$("#tenblock .text").val(localStorage.getItem("tenblock"));
$("#elevenblock .text").val(localStorage.getItem("elevenblock"));
$("#twelveblock .text").val(localStorage.getItem("twelveblock"));
$("#oneblock .text").val(localStorage.getItem("oneblock"));
$("#twoblock .text").val(localStorage.getItem("twoblock"));
$("#threeblock .text").val(localStorage.getItem("threeblock"));
$("#fourblock .text").val(localStorage.getItem("fourblock"));
$("#fiveblock .text").val(localStorage.getItem("fiveblock"));
