function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

function createMessage(fahrenheit, celsius) {
    let message = `The temperature ${fahrenheit}°F is equivalent to ${celsius.toFixed(2)}°C. `;
    
    if (celsius < 0) {
        message += "It's freezing cold!";
    } else if (celsius < 15) {
        message += "It's quite chilly.";
    } else if (celsius < 25) {
        message += "It's a pleasant temperature.";
    } else {
        message += "It's really hot!";
    }
    
    return message;
}

function rand(limit) {
    return Math.round(Math.random() * limit);
}

let userInput = prompt("Enter a temperature in Fahrenheit:");
if (userInput !== null && userInput !== "") {
    let fahrenheit = parseFloat(userInput);
    
    if (!isNaN(fahrenheit)) {
        let celsius = convertToCelsius(fahrenheit);
        console.log(createMessage(fahrenheit, celsius));
        alert(createMessage(fahrenheit, celsius));
    } else {
        console.log("Invalid input! Please enter a number.");
        alert("Invalid input! Please enter a number.");
    }
}
