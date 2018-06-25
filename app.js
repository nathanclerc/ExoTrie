 $(document).ready(function(){
    $('select').formSelect();
  });


var nomPers = ['Philippe', 'Cano Simon', 'Badji', 'Lupi', 'Kurowski', 'Oliveira Ribeiro', 'Zarrik', 'Gouzenne', 'Sandras', 'Morais', 'Segond', 'Taha', 'Lasportes', 'Clerc', 'Ahmed'];
var prenomPers = ['Jonathan', 'Luc', 'Adeline', 'Marc', 'Alexandra', 'Marco', 'Houssine', 'Dylan', 'Benjamin', 'Helder', 'Zakia', 'Max', 'Nicolas', 'Nathan', 'Dania'];
var compteur = 0;
var pers = [];
var groupe;
	var nb =[];
var tab = document.getElementById("tab");

$('#grp').change(function(){
	var tableau = $("#tab").empty();
	nb = [];
	var grp = $('#grp option:selected').val();
	rd();
	for (var i = 0; i < nomPers.length; i++) {
		for (var i = 0; i < prenomPers.length; i++) {
			for (var i = 0; i < nb.length; i++) {
				var ligne = tab.insertRow(-1);
				var colonne1 = ligne.insertCell(-1);
				colonne1.innerHTML += nb[i];
				var colonne2 = ligne.insertCell(-1);
				colonne2.innerHTML += nomPers[i];
				var colonne3 = ligne.insertCell(-1);
				colonne3.innerHTML += prenomPers[i];
			}
		}
	}
});


function rd(){
	var nbPers = nomPers.length/$('#grp option:selected').val();
		console.log(nbPers);
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

var start = start();