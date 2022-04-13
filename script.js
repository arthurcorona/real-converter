document.getElementsByClassName('convert') = convert
document.getElementsByClassName('reset') = reset

//CELCIUS E KELVIN

function convert() {
    var celciusk = document.getElementById('celciusk').value
    var kelvinc = document.getElementById('kelvinc').value

    if(celciusk === '') {
        celciusk = (parseFloat(celciusk) + 273,15) 
    }
    else if(kelvinc === ''){
        kelvinc = (parseFloat(kelvinc) - 32) / 1.8
    }
    
    document.getElementById("celciusk").value = parseFloat(celciusk).toFixed(2)
    document.getElementById("kelvinc").value = parseFloat(kelvinc).toFixed(2)
}

function reset() {
    document.getElementById("celciusk").value = ''
    document.getElementById("kelvinc").value = ''
}

//CELCIUS E FAHRENHEIT

function convert() {
    var fahrenheitc = document.getElementById('fahrenheitc').value
    var celciusf = document.getElementById('celciusf').value

    if(fahrenheitc === '') {
        fahrenheitc = (parseFloat(celciusf) * 1.8) + 32
    }
    else if(celciusf === ''){
        celciusf = (parseFloat(fahrenheitc) - 32) / 1.8
    }
    
    document.getElementById("fahrenheitc").value = parseFloat(fahrenheitc).toFixed(2)
    document.getElementById("celciusf").value = parseFloat(celciusf).toFixed(2)
}

function reset() {
    document.getElementById("fahrenheitc").value = ''
    document.getElementById("celciusf").value = ''
}
