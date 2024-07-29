function cargarDatos() {
    const capital = parseFloat(prompt("Cantidad del préstamo")); // Monto del préstamo a solicitar
    const intereses = parseFloat(prompt("Interés anual (en %)")); // Tasa de interés anual en porcentaje
    const meses = parseInt(prompt("Tiempo para devolver el préstamo (en meses)")); // Tiempo en el que va a devolver el préstamo

    return { capital, intereses, meses };
}

function calcularPrestamo(capital, intereses, meses) {
    const interesMensual = intereses / 100 / 12;
    const x = Math.pow(1 + interesMensual, meses);
    const pagoMensual = (capital * interesMensual * x) / (x - 1);

    if (!isNaN(pagoMensual) && pagoMensual !== Infinity && pagoMensual > 0) {
        console.log(`Monto del préstamo: $${capital}`);
        console.log(`Tasa de interés anual: ${intereses}%`);
        console.log(`Plazo del préstamo: ${meses} meses`);
        console.log(`Pago mensual: $${pagoMensual.toFixed(2)}`);
    } else {
        console.log('Por favor, ingrese valores válidos.');
    }
}

function calcularOtroPrestamo() {
    let continuar = true;

    while (continuar) {
        const { capital, intereses, meses } = cargarDatos();
        calcularPrestamo(capital, intereses, meses);

        continuar = confirm("¿Desea calcular otro préstamo?");
    }
}

calcularOtroPrestamo();
