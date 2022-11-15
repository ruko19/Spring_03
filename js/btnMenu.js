let nav = document.querySelector('.nav__container')
let backGround = document.querySelector('#back__container');



// let mostrarMenu = () => {
//     nav.style.right = '0px';
//     console.log(nav)

// }
document.getElementById('btn__menu').addEventListener('click', () => {
    nav.style.right = '0px';
    backGround.style.display = 'block'

});

document.getElementById('btn__exit').addEventListener('click', () => {
    nav.style.right = '-380px';
    backGround.style.display = 'none'

})







// mostrarMenu = () => {
//     nav.style.right = '0px'
// }