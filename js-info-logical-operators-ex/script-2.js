
let who = prompt("Who's there?");

if (who == "Admin") {
    let password = prompt("Enter password:")
    if (password == "TheMaster") {
        alert("Welcome, Master")
    } else {
        alert("Wrong password")
    }
} else if (who == "" || null || undefined) {
    alert("I don't know you!");
} else {
    alert("Bubye!")
}

