//Obtener nombre de la pagina mediante el path de la URL
var path = window.location.pathname;
var page = path.split("/").pop();

// Obteniendo Posiciones
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

//Al cargar la pagina, verificar si es Index para cambiar las hojas de estilo (modo oscuro-claro)
window.onload = function() {
    var viewMap = document.getElementById("hydroMap");
    var viewVolc = document.getElementById("volcMap");

    if (viewMap.addEventListener) {
        viewMap.addEventListener('click', DisplayMap);
    } else if (viewMap.attachEvent) {
        viewMap.attachEvent('onclick', DisplayMap);
    }

    if (viewVolc.addEventListener) {
        viewVolc.addEventListener('click', DisplayVolc);
    } else if (viewVolc.attachEvent) {
        viewVolc.attachEvent('onclick', DisplayVolc);
    }

    var mode = localStorage.getItem('mode');
    if (page == "index.html") {
        var mode = localStorage.getItem('mode');
        if (mode == 'dark') {
            theme.href = "css/dark-mode.css";
        } else if (mode == 'light') {
            theme.href = "css/light-mode.css";
        }
    } else {
        var mode = localStorage.getItem('mode');
        if (mode == 'dark') {
            theme.href = "../css/dark-mode.css";
        } else if (mode == 'light') {
            theme.href = "../css/light-mode.css";
        }
    }
};

function DisplayVolc() {
    modal.style.display = "block";
    modalImg.src = "img/volcanes-de-el-salvador.jpg";
    captionText.innerHTML = "Volcanes de El Salvador";
}

function DisplayMap() {
    modal.style.display = "block";
    modalImg.src = "img/mapa-hidrografico.jpg";
    captionText.innerHTML = "Mapa hidrográfico de El Salvador";
}
//Metodos de cambio de hojas de estilo para Index (modo oscuro-claro)
function switchSheet() {
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "css/light-mode.css") {
        console.log('modo oscuro')
        theme.href = "css/dark-mode.css";
        localStorage.setItem('mode', 'dark');
    } else {
        console.log('modo claro')
        theme.href = "css/light-mode.css";
        localStorage.setItem('mode', 'light')
    }
}

//Metodos de cambio de hojas de estilo para todos los departamentos (modo oscuro-claro)
function switchSheet1() {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "../css/light-mode.css") {
        console.log('modo oscuro')
        theme.href = "../css/dark-mode.css";
        localStorage.setItem('mode', 'dark');
    } else {
        console.log('modo claro')
        theme.href = "../css/light-mode.css";
        localStorage.setItem('mode', 'light');
    }
}

//Esta funcion hace uso de su parametro para obtener toda la informacion de la imagen
function ImagenModal(Funcion) {
    modal.style.display = "block";
    modalImg.src = Funcion.src;
    captionText.innerHTML = Funcion.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}