
alert("Hola abriste una caja de ahorro!");
alert("Tienes 10 depositos disponibles");

let ahorro = 0;
let numeroDepositos = 0;
let pregunta = prompt("Si estas de acuerdo coloca si:" );

if (pregunta == "si"){

        while (numeroDepositos < 10){

                dinero = parseFloat(prompt("Ingese cantidan para ahorrar deposito: "));

                ahorro = ahorro + dinero;

                numeroDepositos = numeroDepositos + 1;
                
        }

        alert("Cantidad Ahorrada " + ahorro + "$");
}

alert("tu caja de ahorro se cerro")

