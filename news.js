var recherches=[];//tableau contenant des chaines de caracteres correspondant aux recherches stockees
var recherche_courante;// chaine de caracteres correspondant a la recherche courante
var recherche_courante_news=[]; // tableau d'objets de type resultats (avec titre, date et url)

function ajouter_recherche(){
	var zone_saisie=document.getElementById("zone_saisie").value;
	var recherche_stockee=document.getElementById("recherches-stockees");
	var indiceSiPresent = recherches.indexOf(zone_saisie);
	if( indiceSiPresent<0){
		recherches.push(zone_saisie);
		recherche_stockee.innerHTML="<p class=\"titre-recherche\"><label onclick=\"selectionner_recherche()\">"+zone_saisie+"</label><img src=\"croix30.jpg\" class=\"icone-croix\" onclick=\"supprimer_recherche(this)\" /> </p>";
	}


}

function supprimer_recherche(e){


}


function selectionner_recherche(e){

}


function init(){

}


function rechercher_nouvelles(){


}


function maj_resultats(res){


}


function sauver_nouvelle(e){

}


function supprimer_nouvelle(e){

}
