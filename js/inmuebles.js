const pageInmuebles = document.getElementById('pageInmuebles')
const query = new URLSearchParams(window.location.search)
const params = query.get('id')
console.log(params)




document.addEventListener('DOMContentLoaded', e => {
    fetchData();
})



const fetchData = async () => {
    try {

        const res = await fetch('http://localhost:3000/inmuebles')
        const data = await res.json()
        const filtroData = data.filter(card => card.id === params)

        console.log(data)
        // imprimir la data en las cartas
        inmueblesCards(filtroData)


    } catch (error) {
        console.log(error)

    }
}

const inmueblesCards = data => {

    let elementos = '';

    data.forEach(card => {
        elementos += `

        <main class="container main__container" id="pageInmuebles">

            <div class="main__info_container">

                <div class="info__main__right">
                    <h2 class="info__name">${card.nombre}</h2>
                    <div class="buy__container">
                        <p class="info__buy">${card.rentaOVenta}</p>
                        <p class="info__tipe">${card.TipImieble}</p>
                    </div>
                    <div class="location">
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                        <p>${card.direccion}</p>
                    </div>
                    <p class="ubication">${card.ubicacion}</p>
                    <p class="propietario"> Propietario: ${card.propietario.nombrePro}</p>

                </div>
                <div class="price">
                    <p>Precio: $${card.precio}</p>
                </div>
            </div>

            <div class=" description__container ">

                <img src="${card.img}" alt="">


                <div class="description">
                    <h3>Descripcion:</h3>
                    <p>${card.descripcion}<p>
                    <div class="icons__description">
                        <div class="m²">
                            <img src="./img/Area Icon.svg" alt="">
                            <p>${card.metrosCuadrados} m²</p>
                        </div>
                        <div class="cuartos">
                            <img src="./img/cama.png" alt="">
                            <p>${card.habitaciones}</p>

                        </div>
                        <div class="baños">
                            <img src="./img/Bathroom Icon.svg" alt="">
                            <p>${card.baños}</p>
                        </div>
                        <div class="garage">
                            <img src="./img/Garage Icon.svg" alt="">
                            <p>${card.parqueadero}</p>
                        </div>

                    </div>

                </div>
            </div>

        </main>






        `

    });

    pageInmuebles.innerHTML = elementos
}

