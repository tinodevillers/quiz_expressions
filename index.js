function gagne() {
    alert("Bien joué, tu as gagné 1 point.");
}
function orange() {
    let mabalise = document.getElementById("couleur_modif");
    mabalise.className = "orange";
}
function rouge() {
    let mabalise = document.getElementById("couleur_modif");
    mabalise.className = "rouge";
}
function vert() {
    let mabalise = document.getElementById("couleur_modif");
    mabalise.className = "vert";
}
function bleu_foncé() {
    let mabalise = document.getElementById("titre");
    mabalise.classList.add("h1bleu");
}
function bleu_clair() {
    let mabalise = document.getElementById("description");
    mabalise.classList.add("h2bleu");
}

function bleu_foncé_fin() {
    let mabalise = document.getElementById("titre");
    mabalise.classList.remove("h1bleu");
}
function bleu_clair_fin() {
    let mabalise = document.getElementById("description");
    mabalise.classList.remove("h2bleu");
}

document.getElementById("bouton_orange").addEventListener("click", orange);
document.getElementById("bouton_rouge").addEventListener("click", rouge);
document.getElementById("bouton_vert").addEventListener("click", vert);

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 49) {
        document.querySelector('button[name="bon1"]').classList.add("visible");
    }
})
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 49) {
        document.querySelector('button[name="bon1"]').classList.remove("visible");
    }
})


document.addEventListener("keydown", function (event) {
    if (event.keyCode === 50) {
        document.querySelector('button[name="bon2"]').classList.add("visible");
    }
})
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 50) {
        document.querySelector('button[name="bon2"]').classList.remove("visible");
    }
})


document.addEventListener("keydown", function (event) {
    if (event.keyCode === 51) {
        document.querySelector('button[name="bon3"]').classList.add("visible");
    }
})
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 51) {
        document.querySelector('button[name="bon3"]').classList.remove("visible");
    }
})


document.addEventListener("keydown", function (event) {
    if (event.keyCode === 52) {
        document.querySelector('button[name="bon4"]').classList.add("visible");
    }
})
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 52) {
        document.querySelector('button[name="bon4"]').classList.remove("visible");
    }
})


document.addEventListener("keydown", function (event) {
    if (event.keyCode === 53) {
        document.querySelector('button[name="bon5"]').classList.add("visible");
    }
})
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 53) {
        document.querySelector('button[name="bon5"]').classList.remove("visible");
    }
})


document.addEventListener("keydown", function (event) {
    if (event.keyCode === 54) {
        document.querySelector('button[name="bon6"]').classList.add("visible");
    }
})
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 54) {
        document.querySelector('button[name="bon6"]').classList.remove("visible");
    }
})


document.addEventListener("keydown", function (event) {
    if (event.keyCode === 55) {
        document.querySelector('button[name="bon7"]').classList.add("visible");
    }
})
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 55) {
        document.querySelector('button[name="bon7"]').classList.remove("visible");
    }
})


document.addEventListener("keydown", function (event) {
    if (event.keyCode === 56) {
        document.querySelector('button[name="bon8"]').classList.add("visible");
    }
})
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 56) {
        document.querySelector('button[name="bon8"]').classList.remove("visible");
    }
})


document.addEventListener("keydown", function (event) {
    if (event.keyCode === 57) {
        document.querySelector('button[name="bon9"]').classList.add("visible");
    }
})
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 57) {
        document.querySelector('button[name="bon9"]').classList.remove("visible");
    }
})