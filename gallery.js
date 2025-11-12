function upDate(previewPic) {
    console.log("Événement déclenché : survol d'une image");
    console.log("Source de l'image :", previewPic.src);
    console.log("Texte alternatif :", previewPic.alt);

    // Sélection de la div principale
    let imageDiv = document.getElementById("image");

    // Mise à jour du texte de la div avec le texte alternatif de l'image
    imageDiv.innerHTML = previewPic.alt;

    // Changement de l'image d'arrière-plan pour celle survolée
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    console.log("Événement déclenché : sortie de l'image");

    // Sélection de la div principale
    let imageDiv = document.getElementById("image");

    // Rétablir le texte initial
    imageDiv.innerHTML = "Survolez une image ci-dessous pour l’afficher ici";

    // Rétablir le fond initial (aucune image)
    imageDiv.style.backgroundImage = "url('')";
}
