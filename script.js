//CELCIUS E KELVIN tem q arrumar isso

document.getElementsById('convertck') = convertck
document.getElementsById('resetck') = resetck

function convertck() {
    var celciusk = document.getElementById('celciusk').value
    var kelvinc = document.getElementById('kelvinc').value

    if(celciusk === '') {
        kelvinc = (parseFloat(celciusk) + 273.15) 
    }
    else if(kelvinc === ''){
        celciusk = (parseFloat(kelvinc) - 273.15) 
    }
    
    document.getElementById("celciusk").value = parseFloat(celciusk).toFixed(2)
    document.getElementById("kelvinc").value = parseFloat(kelvinc).toFixed(2)
}

function resetck() {
    document.getElementById("celciusk").value = ''
    document.getElementById("kelvinc").value = ''
}

//CELCIUS E FAHRENHEIT

document.getElementsById('convertcf') = convertcf
document.getElementsById('resetcf') = resetcf

function convertcf() {
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

function resetcf() {
    document.getElementById("fahrenheitc").value = ''
    document.getElementById("celciusf").value = ''
}
