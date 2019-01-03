var eventType;
eventType = prompt("what is the event type?");
var tempFair;
tempFair = prompt("What is the temperature?");
var result = "";
var clothing1 = "";
var clothing2 = "";


if (eventType == "casual") {
    clothing1 = "something comfy";
} else if (eventType == "semiformal") {
    clothing1 = "a polo";
} else if (eventType == "formal") {
    clothing1 = "a suit";
}


if (tempFair < 54 ){
    clothing2 = "a coat";
} else if (tempFair >= 54 || tempFair <= 70) {
    clothing2 = "a jacket";
} else if (tempFair > 70) {
    clothing2 = "no jacket";
}

result = clothing1 + ' and '+ clothing2;
console.log('Since it is', tempFair ,' and you are going to a',  eventType, 'event you should wear', result);
 