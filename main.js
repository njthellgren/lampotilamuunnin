document.querySelector('#temperatureInput').addEventListener('submit', function(event){
    event.preventDefault();
    const conversionType = document.querySelector('#temperature').value;
    const temperature = parseFloat(document.querySelector('#tempInput').value);
    const resultMessageElement = document.querySelector('#result-message');

    resultMessageElement.style.color = 'black';
    resultMessageElement.style.fontWeight = 'normal';

    if (isNaN(temperature)) {
        resultMessageElement.textContent = 'Anna validi lämpötila';
        resultMessageElement.style.color = 'red';
        resultMessageElement.style.fontWeight = 'bold';
        return;
    }

    let result;
    if (conversionType === 'Celsius') {
        result = toCelsius(temperature);
    }
    else {
        result = toFahrenheit(temperature);
    }

    result = decimals(result);

    if (conversionType === 'Celsius'){
        resultMessageElement.textContent = `${result} °C`
    }

    if (conversionType === 'Fahrenheit'){
        resultMessageElement.textContent = `${result} °F`
    }

    if (conversionType === 'Celsius' && result < -273.15){
        resultMessageElement.textContent = `${result} °C. Lämpötila on pienempi kuin absoluuttinen nollapiste.`;
        return;
    }
    else if (conversionType === 'Fahrenheit' && result < -459.67){
        resultMessageElement.textContent = `${result} °F. Lämpötila on pienempi kuin absoluuttinen nollapiste.`;
        return;
    }

});

function toCelsius(fahrenheit){
    return (5 / 9) * (fahrenheit - 32);
}

function toFahrenheit(celsius){
    return (celsius * 9 / 5) + 32
}

function decimals(result){
    const precision = document.querySelector('input[name="decimal"]:checked')?.id;

    if (precision === '1decimal'){
        return result.toFixed(1);}
        else if (precision === '2decimal'){
            return result.toFixed(2);}
        else if (precision === '3decimal'){
            return result.toFixed(3);}
        else {
            return result;
        }
}