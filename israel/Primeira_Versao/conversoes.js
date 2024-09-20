var valor_hexadecimal;
var valor_binario;
var valor_decimal;
var valor_octal;

function aparecer1() {
    div_visor.innerHTML += `1`
}
function aparecer2() {
    div_visor.innerHTML += `2`
}
function aparecer3() {
    div_visor.innerHTML += `3`
}
function aparecer4() {
    div_visor.innerHTML += `4`
}
function aparecer5() {
    div_visor.innerHTML += `5`
}
function aparecer6() {
    div_visor.innerHTML += `6`
}
function aparecer7() {
    div_visor.innerHTML += `7`
}
function aparecer8() {
    div_visor.innerHTML += `8`
}
function aparecer9() {
    div_visor.innerHTML += `9`
}
function aparecer0() {
    div_visor.innerHTML += `0`
}
function aparecerA() {
    div_visor.innerHTML += `A`
}
function aparecerB() {
    div_visor.innerHTML += `B`
}
function aparecerC() {
    div_visor.innerHTML += `C`
}
function aparecerD() {
    div_visor.innerHTML += `D`
}
function aparecerE() {
    div_visor.innerHTML += `E`
}
function aparecerF() {
    div_visor.innerHTML += `F`
}
function excluir() {
    div_visor.innerHTML = ``
}
function analisarHexadecimal() {
        valor_hexadecimal = div_visor.innerHTML;

        var decimal = parseInt(valor_hexadecimal, 16);
    
        var binario = decimal.toString(2);

        var octal = decimal.toString(8);
    
        var processoConversao = '';
        var potencia = valor_hexadecimal.length - 1;
        var multiplicarCaractereVisual = '';

        for (var i = 0; i < valor_hexadecimal.length; i++) {
            var digitoHexadecimal = valor_hexadecimal[i];
            var valorDecimalCaractere = '';
    
            if (digitoHexadecimal >= '0' && digitoHexadecimal <= '9') {
                valorDecimalCaractere = parseInt(digitoHexadecimal);
            } else if(digitoHexadecimal == 'A'){
                valorDecimalCaractere = 10;
            } else if(digitoHexadecimal == 'B'){
                valorDecimalCaractere = 11;
            } else if(digitoHexadecimal == 'C'){
                valorDecimalCaractere = 12;
            } else if(digitoHexadecimal == 'D'){
                valorDecimalCaractere = 13;
            } else if(digitoHexadecimal == 'E'){
                valorDecimalCaractere = 14;
            } else {
                valorDecimalCaractere = 15;
            } 
            var multiplicarCaractere = valorDecimalCaractere;
            for (var j = 0; j < potencia; j++) {
                multiplicarCaractere *= 16  
            }
            var multiplicarCaractereVisual = " x 16^" + (potencia);
    
            processoConversao += `Dígito ${digitoHexadecimal} => Decimal: ${valorDecimalCaractere} ${multiplicarCaractereVisual} = ${multiplicarCaractere}<br>`;
            potencia--;
        }
    
        document.body.innerHTML = `
            <div class="monitor">
                <h2>Resultado da Conversão</h2>
                <b>Valor Hexadecimal:</b> ${valor_hexadecimal} <br>
                <b>Valor Decimal:</b> ${decimal} <br>
                <b>Valor Binário:</b> ${binario} <br>
                <b>Valor Octal:</b> ${octal} <br>
                <h3>Processo de Conversão para decimal:</h3>
                ${processoConversao}
            </div>`;
    
}
function analisarDecimal() {
    valor_decimal = Number(div_visor.innerHTML);

    var binario = valor_decimal.toString(2);

    var octal = valor_decimal.toString(8);
    
    var hexadecimal = valor_decimal.toString(16);

    document.body.innerHTML = `
        <div class="monitor">
            <h2>Resultado da Conversão</h2>
            <b>Valor Decimal:</b> ${valor_decimal} <br>
            <b>Valor Binário:</b> ${binario} <br>
            <b>Valor Octal:</b> ${octal} <br>
            <b>Valor Hexadecimal:</b> ${hexadecimal} <br>
        </div>`;
}

function analisarBinario() {
    
    valor_binario = div_visor.innerHTML;

    var decimal = parseInt(valor_binario, 2);

    var octal = decimal.toString(8);
    
    var hexadecimal = decimal.toString(16);

    document.body.innerHTML = `
        <div class="monitor">
            <h2>Resultado da Conversão</h2>
            <b>Valor Binário:</b> ${valor_binario} <br>
            <b>Valor Decimal:</b> ${decimal} <br>
            <b>Valor Octal:</b> ${octal} <br>
            <b>Valor Hexadecimal:</b> ${hexadecimal} <br>
        </div>`;
}
function analisarOctal() {
    valor_octal = div_visor.innerHTML;

    var decimal = parseInt(valor_octal, 8);

    var binario = decimal.toString(2);
    
    var hexadecimal = decimal.toString(16);

    document.body.innerHTML = `
        <div class="monitor">
            <h2>Resultado da Conversão</h2>
            <b>Valor Octal:</b> ${valor_octal} <br>
            <b>Valor Decimal:</b> ${decimal} <br>
            <b>Valor Binário:</b> ${binario} <br>
            <b>Valor Hexadecimal:</b> ${hexadecimal} <br>
        </div>`;
}

