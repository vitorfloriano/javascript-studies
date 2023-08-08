// ask user for name
let who = prompt("Who'is there?");

// if name is "Admin"
if (who === "Admin") {
    // ask user for password
    let login = prompt("password");

    // if password is "TheMaster"
    if (login === "TheMaster") {
        alert("Welcome");
    // if password is empty
    } else if (login === null) {
        alert('Canceled')
    // if password is wrong
    } else {
        alert ('wrong password')
    }
// if name is empty
} else if (who === null) {
    alert('Canceled');
// if name is wrong
} else {
    alert('I dont know you');
}