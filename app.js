function update(id, texte) {
    let paragraphe = document.getElementById(id);
    paragraphe.id = "rename";
    paragraphe.innerText = texte;
    return paragraphe;
}

update('p1', "Mon texte blabla");
update('p2', "Mon deuxieme texte");
update('p3', "Mon troisième texte");
update('p4', "Mon quatrième texte");
update('p5', "Mon cinquième texte");
