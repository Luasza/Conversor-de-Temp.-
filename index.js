function converterTemperatura() {
    let celsius = prompt("Digite a temperatura em Celsius:");
    let fahrenheit = (parseFloat(celsius) * 9/5) + 32;
    
    alert("A temperatura em Fahrenheit é: " + fahrenheit.toFixed(2));
}

converterTemperatura();
        