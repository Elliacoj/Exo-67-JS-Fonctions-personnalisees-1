function update () {
    for (let i = 0; i < paragraphe.length; i++) {
    paragraphe[i].id = "rename";
    paragraphe[i].innerText = "Nouveau texte";
    }
}

let paragraphe = document.getElementsByTagName("p");
update (paragraphe);

