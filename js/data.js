const inmuebles = document.getElementById('imuebles');

// cuando se cargue a pagina, va a cargar todo el continido de la api a la pagina HTML
document.addEventListener('DOMContentLoaded', e => {
    fetchData();
})



const fetchData = async () => {
    try {

        const res = await fetch('http://localhost:3000/inmuebles')
        const data = await res.json()
        console.log(data)
        // imprimir la data en las cartas
        inmueblesCards(data)
        formularioUbicacion(data)
        select(data)

    } catch (error) {
        console.log(error)

    }
}

const inmueblesCards = data => {

    let elementos = '';

    data.forEach(card => {
        elementos += `

        <div class="property__card">

                <div class="hero__card hero__card1">

                <a href="/inmuebleP.html?id=${card.id}">

                <figure class="hero__card__img">
                    <img onclick="inmueblesIr()" src="${card.img}"  alt="">
                </figure>

                </a>

                
                    <div class="hero__card__icons">
                        <div class="hero__card__icons--buy">
                            <div class="class__card">${card.TipImieble}</div>
                            <div class="buy__card">${card.rentaOVenta}</div>
                        </div>

                        <img class=" star__icon" src="./img/estrella.png" width="25px" alt="">

                    </div>
                    <div class="price_card">$ ${card.precio}</div>

                </div>

                <div class="info__card">
                <h3 class="ubication__card">${card.nombre}</h3>
                <p class="location__card">${card.direccion}</p>
                <p class="location__card">${card.ubicacion}</p>
                    <div class="time__card">
                        <div class="user__card">
                            <img src="./img/icon__user.svg" alt="">
                            <p class="name__user">${card.propietario.nombrePro}</p>
                        </div>
                        <p class="times__card">4 month ago</p>



                    </div>
                    <hr>
                    <div class="icons__info__card">
                        <div class="tamaño__info">
                            <img src="./img/Area Icon.svg" alt="">
                            <p> <span>${card.metrosCuadrados}</span>M²</p>
                        </div>

                        <div class="icons__info__card--unit">
                            <div class="icon">
                                <img src="./img/Garage Icon.svg" alt="">
                                <p class="icon__number">${card.parqueadero}</p>
                            </div>
                            <div class="icon">
                                <img src="./img/Bathroom Icon.svg" alt="">
                                <p class="icon__number">${card.baños}</p>
                            </div>
                            <div class="icon">
                                <img class="cama__icon" src="./img/cama.png" alt="">
                                <p class="icon__number">${card.habitaciones}</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


        
        `

    });

    inmuebles.innerHTML = elementos
}



// scrips de la pagina secundaria




