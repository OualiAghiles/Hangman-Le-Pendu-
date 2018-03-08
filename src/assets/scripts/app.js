// tableau de mot
// nombre aleatoire pour definir le mot
var randomNum = Math.floor(Math.random() * mot.length)
// mot choisi aleatoirement + conversion en minuscule
var motChoisi = mot[randomNum].toLowerCase()
// convertire le mot en tableau
var motChoisit = motChoisi.split('')
// erreus du mot
var misses = []
// tableau bonne reponse
var bonneReponse = []
// initialisation du nombre d'essais a 0
var essais = 0
// generer les underscore
var underScore = document.querySelector('.lettre-true');
// generer l'html selon la longueur du mot choisit
var entry = document.createElement('ul');
// hangmanParts
var hangmanParts = document.querySelectorAll('#hangman .parts')
// limite des essais
var nbrEssais = hangmanParts.length
// reponse DOM
var perdu = document.querySelector('.mot-hasar')
// lettre erroner
var toucheErroner = document.querySelector('.lettre-fase')
var cmptEssais = document.createElement("span")
cmptEssais.classList.add('cmptEssais')
// fonction pour generer les _ representant la longueur du mot
var genererTiret = function () {
	cmptEssais.innerHTML = nbrEssais

	for (var i = 0; i < motChoisit.length; i++) {
		bonneReponse.push('_')
		// creation de l'element li selon la longueur du mot
		var li = document.createElement('li');
		// ajout du text au li
		li.appendChild(document.createTextNode(' _ '))
		// ajout du data-index avec valeur i
		li.setAttribute("data-index", i); // added line
		// ajout des li au ul
		entry.appendChild(li)
		// ajout du ul au DOM
		underScore.appendChild(entry)
	}
	return bonneReponse
}

// creation d'element DOM des mauvaise reponse
var elementPenduFaulse = function (key) {
	var span = document.createElement("span") // Create a <li> node
	var textnode = document.createTextNode(key); // Create a text node
	span.appendChild(textnode); // Append the text to <li>
	toucheErroner.appendChild(span); // Append <li> to <ul> with id="myList"
}
// creer les element bonne lettre 
var guess = function (cmp, touche) {
	// selectionner le bon element ou ajouter la lettre via le data-index
	var maLettre = document.querySelector('li[data-index="' + cmp + '"]');
	maLettre.classList.add('check')
	// ajouter la lettre a l'element selectionner au prealable
	maLettre.innerHTML = maLettre.innerHTML.replace(' _ ', touche)
	return maLettre
}
// compteur des essais restant
var essaisRestant = function (cmptRestant, nbrEssais) {
	// calcule du nombre d'essais restant
	var tentative = nbrEssais - (cmptRestant + 1)
	// affichage du nombre d'essais restant
	cmptEssais.innerHTML = tentative
	perdu.appendChild(cmptEssais)
	
	
}

genererTiret()
document.addEventListener('keypress', function (event) {
	// Convertion du code de la touche en symbole representant le clavier (lettre , chiffre , etc)
	var touche = String.fromCharCode(event.charCode).toLowerCase()
	if (bonneReponse.indexOf(touche) != -1 || misses.indexOf(touche) != -1) {
		// notifier que la lettre a deja etait utilisé
		return false
	}
	if (motChoisit.indexOf(touche) != -1) {
		for (var i = 0; i < motChoisit.length; i++) {
			// comparer la lettre incerer avec l'une des lettre du mot choisit
			if (motChoisit[i] == touche) {
				bonneReponse[i] = motChoisit[i]
				guess(i, touche)
			}
		}
	} else {
		// condition pour limiter les essais
		if (essais >= nbrEssais - 1) {
			// Afficher defaite et demande de rejouer
			var parts = hangmanParts[essais]
			parts.classList.add('visible')
			// si defaite ajouter le texte pour monter le mot non trouver
			perdu.innerHTML = motChoisi			
			// demender de rejouer
			modal('.modal')
			return false
		} else {
			essaisRestant(essais, nbrEssais)
			// ajout des lettre erroner au tableau misses
			misses.push(touche)				
			elementPenduFaulse(touche)
			// ici code pour les image du pendu			
			var parts = hangmanParts[essais]
			parts.classList.add('visible')
			// incrementation des essais
			essais++
		}
	}
	// comparer les chaine de caractères pour verifier si le joueur a gagner
	if (JSON.stringify(bonneReponse) == JSON.stringify(motChoisit)) {
		// message de felicitation
		modal('.modal')
		// demande de rejouer
		return false
	}
})
