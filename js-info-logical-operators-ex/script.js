
let who = prompt("Who'is there?");

if (who === "Admin") {
let login = prompt("password");
if (login === "TheMaster") {
alert("Welcome");
} else if (login === null) {
alert('Canceled')
} else {
alert ('wrong password')
}

} else if (who === null) {
alert('Canceled');
} else {
alert('I dont know you');
}