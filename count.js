let count = 0;
const target = 99; // Set your target number here
const incrementSpeed = 10; // Set the speed (milliseconds) of the increment here

function incrementCounter() {
    if (count < target) {
        count++;
        document.getElementById("counter").innerText = count;
    } else {
        clearInterval(counterInterval); // Stop the counter when the target is reached
    }
}


const counterInterval = setInterval(incrementCounter, incrementSpeed); // Increase count every 10 milliseconds