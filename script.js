document.getElementById('convert') = convert
document.getElementById('reset') = reset

function convert() {
    var fahrenheit = document.getElementById('fahrenheit').value
    var celcius = document.getElementById('celcius').value
   // var kelvin = document.getElementById('kelvin').value

    if(fahrenheit === '') {
        fahrenheit = (parseFloat(celcius) * 1.8) + 32
    }
    else if(celcius === ''){
        celcius = (parseFloat(fahrenheit) - 32) / 1.8
    }
  //  else if(kelvin === ''){

  //  }
    
    document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(2)
    document.getElementById("celcius").value = parseFloat(celcius).toFixed(2)
    //document.getElementById("kelvin").value = parseFloat(kelvin).toFixed(2)
}

function reset() {
    document.getElementById("fahrenheit").value = ''
    document.getElementById("celcius").value = ''
    //document.getElementById("kelvin").value = 0
}