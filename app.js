 //bibliothéque JS materialize
 $(document).ready(function(){
 	$('select').formSelect();
 });

//tableau de données
var nomPers = ['Philippe', 'Cano Simon', 'Badji', 'Lupi', 'Kurowski', 'Oliveira Ribeiro', 'Zarrik', 'Gouzenne', 'Sandras', 'Morais', 'Segond', 'Taha', 'Lasportes', 'Clerc', 'Ahmed'];
var prenomPers = ['Jonathan', 'Luc', 'Adeline', 'Marc', 'Alexandra', 'Marco', 'Houssine', 'Dylan', 'Benjamin', 'Helder', 'Zakia', 'Max', 'Nicolas', 'Nathan', 'Dania'];
//compteur pour afficher le nombre de personne
var compteur = 0;
//tableau pour mettre donner les groupes
var nb =[];
//récupérer l'Id du tbody htlm
var tab = document.getElementById("tab");

//fonction pour choisir le nombre de groupe et afficher le tableau
$('#grp').change(function(){
	//cache le label
	$('#lbgrp').css("display", "none");
	//vide le tbody
	var tableau = $("#tab").empty();
	//remet le tableau nb vide
	nb = [];
	//récupère la valeur du select
	var grp = $('#grp option:selected').val();
	//execution de la fonction qui fait les groupes
	rd();
	//première boucle pour parcourir le tableau des noms
	for (var i = 0; i < nomPers.length; i++) {
		//deuxième boucle pour parcourir le tableau des prénoms
		for (var i = 0; i < prenomPers.length; i++) {
			//troisième boucle pour parcourir le tableau des groupes
			for (var i = 0; i < nb.length; i++) {
				//création d'une ligne par personne
				var ligne = tab.insertRow(-1);
				//création d'une cellule pour le groupe
				var colonne1 = ligne.insertCell(-1);
				//affichage de la valeur du groupe dans la cellule
				colonne1.innerHTML += nb[i];
				//création d'une cellule pour le nom
				var colonne2 = ligne.insertCell(-1);
				//affichage de la valeur du nom dans la cellule
				colonne2.innerHTML += nomPers[i];
				//création d'une cellule pour le prénoms
				var colonne3 = ligne.insertCell(-1);
				//affichage de la valeur prénom dans la cellule
				colonne3.innerHTML += prenomPers[i];
			}
		}
	}
});

//déffinit un tableau groupe avec les groupe constitué
function rd(){
	//définit le nombres de personnes qu'il doit y avoir dans un groupe
	var nbPers = nomPers.length/$('#grp option:selected').val();
	console.log(nbPers);
	//boucle qui permet de x personnes dans un groupe
	for (var i = 0; i < nomPers.length; i++) {
		if (i<nbPers) {
			nb.push('1');
		}else if (i>=nbPers && i< nbPers*2) {
			nb.push('2');
		}else if (i>= nbPers*2 && i<nbPers*3) {
			nb.push('3');
		}else if (i>= nbPers*3 && i<nbPers*4) {
			nb.push('4');
		}else if (i>= nbPers*4 && i<nbPers*5) {
			nb.push('5');
		}
	}
	//exectution du mélange du tableau
	shuffle(nb);
	return nb;
};


function shuffle(nb)
{
	var j = 0;
	var valI = '';
	var valJ = valI;
	var l = nb.length - 1;
	while(l > -1)
	{
		j = Math.floor(Math.random() * l);
		valI = nb[l];
		valJ = nb[j];
		nb[l] = valJ;
		nb[j] = valI;
		l = l - 1;
	}
	return nb;
};

//création d'un tableau au chargement de la page
function start(){
	$('#grp').val('Groupe');
	for (var i = 0; i < nomPers.length; i++) {
		for (var i = 0; i < prenomPers.length; i++) {
			var ligne = tab.insertRow(-1);
			var colonne1 = ligne.insertCell(-1);
			colonne1.innerHTML += 'Aucun';
			var colonne2 = ligne.insertCell(-1);
			colonne2.innerHTML += nomPers[i];
			var colonne3 = ligne.insertCell(-1);
			colonne3.innerHTML += prenomPers[i];
		}
	}
};
//execution de la fonction start
var start = start();