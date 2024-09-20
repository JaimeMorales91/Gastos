let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcion =[];

// esta Funccion se invoca al momento en el que el usuario hace clik
// en el boton
function clickBoton (){
    let nombregasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;

    listaNombresGastos.push(nombregasto);
    listaValoresGastos.push(valorGasto);
    listaDescripcion.push(descripcionGasto);

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);
    // alert('clik del usuario');
    actualizarListaGastos();
}

function actualizarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGasto = 0;
    listaNombresGastos.forEach((elemento,posicion) => {
        const valorGasto = Number(listaValoresGastos [posicion]);
        const descripcionGasto = listaDescripcion[posicion];

        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} - Descripcion: ${descripcionGasto}
        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
        </li>`;
        // Calculamos El Total Gasto
        totalGasto += Number(valorGasto);
        if (valorGasto > 150) {
            alert(`El gasto "${elemento}" supera los 150 dólares.`);
        }
    });
   listaElementos.innerHTML = htmlLista;
   totalElementos.innerHTML = totalGasto.toFixed(2);
   limpiar();
}

function limpiar(){
    document.getElementById('nombreGasto').value = "";
    document.getElementById('valorGasto').value = "";
    document.getElementById('descripcionGasto').value = "";
}

function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGastos();
}
function mostrarModal(posicion) {
    // Llenar los campos del modal con los datos del gasto
    // ... código para mostrar el modal ...
}