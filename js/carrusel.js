const images = ["../../images/member1/img1.jpg", "../../images/member1/img2.jpg", "../../images/member1/img3.jpg", "../../images/member1/img4.jpg", "../../images/member1/img5.jpg", "../../images/member1/img6.jpg", ];
let image = document.getElementById("imagen");
let botonRetroceder = document.getElementById("retroceder");
let botonAvanzar = document.getElementById("avanzar");
let posicionActual = 0;

function renderizarImagen() {
    let path = images[posicionActual];
    image.style.backgroundImage = `url(${path})`;
    console.log(image);
}
renderizarImagen();

function retrocederFoto() {
    if (posicionActual == 0) {
        renderizarImagen();
    } else {
        posicionActual--;
        renderizarImagen();
    }
}

function avanzarFoto() {
    if (posicionActual == 5) {
        renderizarImagen();
    } else {
        posicionActual++;
        renderizarImagen();
    }
}
botonRetroceder.addEventListener("click", function() {
    retrocederFoto();
});

botonAvanzar.addEventListener("click", function() {
    avanzarFoto();
    console.log("avanzando");
});