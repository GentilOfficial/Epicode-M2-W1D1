let celsius;
let faharenheit;

celsius = prompt("Inserisci la temperatura in gradi Celsius:");
faharenheit = celsius * 1.8 + 32;

let output = `${celsius} gradi Celsius sono ${faharenheit} gradi Fahrenheit.`;
console.log(output);

document.getElementById("output").innerHTML = output;
