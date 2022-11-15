const formulario = document.getElementById('formulario');
const inputFormulario = document.getElementById('inputFormulario')


const formularioUbicacion = data => {
    formulario.addEventListener('keyup', e => {
        e.preventDefault()

        const letraCliente = inputFormulario.value.toLowerCase();
        // console.log(letraCliente)

        const arrayFiltrado = data.filter(item => {
            const letraApi = item.ubicacion.toLowerCase()
            if (letraApi.indexOf(letraCliente) !== -1) {
                return item
            }

        })

        inmueblesCards(arrayFiltrado)



    })


}



// section


function select(data) {
    const tInmueble = document.querySelector('#tInmueble');
    console.log(tInmueble)

    tInmueble.addEventListener('change', (e) => {
        const query = e.target.value


        if (query === "") {
            inmueblesCards(data)
        } else {
            const arrayFiltrado = data.filter(item => item.TipImieble === query)
            inmueblesCards(arrayFiltrado)
        }
    })
}