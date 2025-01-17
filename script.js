function calculerHauteur() {
    // Récupérer les valeurs de l'interface
    let hauteurPedalier = parseFloat(document.getElementById("hauteur_pedalier").value);
    let longueurManivelle = parseFloat(document.getElementById("longueur_manivelle").value);
    let angleManivelle = parseFloat(document.getElementById("angle_manivelle").value);
    let inclinaisonVelo = parseFloat(document.getElementById("inclinaison_velo").value);

    // Convertir les angles en radians
    let angleManivelleRad = (Math.PI / 180) * angleManivelle;
    let inclinaisonVeloRad = (Math.PI / 180) * inclinaisonVelo;

    // Calculer la projection verticale de la manivelle
    let projectionVerticale = longueurManivelle * Math.cos(angleManivelleRad);

    // Ajuster pour l'inclinaison latérale du vélo
    let projectionAjustee = projectionVerticale * Math.cos(inclinaisonVeloRad);

    // Calculer la hauteur entre le sol et l'axe de la manivelle
    let hauteurSol = hauteurPedalier - projectionAjustee;

    // Afficher le résultat
    document.getElementById("resultat").innerText = "La hauteur entre le sol et la manivelle est de " + hauteurSol.toFixed(2) + " mm";
}
