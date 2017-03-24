/**
(function (global) {

var dc = {};

var homeHtml = "http://Users/sameserge/Desktop/website/snippets/home-snippet.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='/Users/sameserge/Desktop/website/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});


global.$dc = dc;

})(window);

**/

function showTime() {
    var input, filter, ul, li, a, i;
    document.getElementById('resultatMotor').style.display = 'inline';
    if(document.getElementById("nav-search").value == ""){
document.getElementById("resultatMotor").style.display = "none";
};
    input = document.getElementById("nav-search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("resultatMotor");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            
        } else {
            li[i].style.display = "none";

        }
    }
};



function showOff() {
    //close search result
     document.getElementById('resultatMotor').style.display = 'none';
    //close aide intro page
        document.getElementById('cartonRouge').style.display = "none";
        document.getElementById("cosbyShow").style.width = "0%";
        document.getElementById("theoHuxtable").style.width = "0%";
    };


 function frappe() {
    //afficher la page aide
     document.getElementById('cartonRouge').style.display = 'inline';
};

function passe(){
    //close aide page
    document.getElementById('cartonRouge').style.display = "none";
};
/* Open when someone clicks on the first button  */
function openNav() {
    document.getElementById("cosbyShow").style.width = "100%";
};

/* Open when someone clicks on the second button  */
function sondraHuxtable() {
    document.getElementById("theoHuxtable").style.width = "100%";
};



// Get the modal inscription page
{

var captainAmerica = document.getElementById('comics');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == captainAmerica) {
        captainAmerica.style.display = "none";
    }
};
};

function barryAllen() {
     document.getElementById('comics').style.display = 'inline'; /* ouvrir la page d'inscription*/
    };
function mrFantastique() {
     document.getElementById('comics').style.display = 'none'; /* Hide la page d'inscription*/
    };

function bane() {
    document.getElementById("comics").style.display ="none";
    document.getElementById("xmen").style.display ="inline";
};
function thanos() {
    document.getElementById("xmen").style.display ="none";
    document.getElementById("comics").style.display ="inline";
};
function oeildeFaucon() {
        document.getElementById("killerCroc").style.display ="inline";
};
function namor() {
        document.getElementById("killerCroc").style.display ="none";
};
function vision() {
     document.getElementById("ultron").style.display ="none";
    document.getElementById("pingouin").style.display ="inline";
};

/* Connexion page javascript */

// Get the modal connexion page
{
var xavier = document.getElementById('xmen');

// When the user clicks anywhere outside of the modal, close it
document.onclick = function(event) {
    if (event.target == xavier) {
        xavier.style.display = "none";
    }
};
};


function lefauve() {
     document.getElementById('xmen').style.display = 'inline'; /* ouvrir la page connexion*/
    };
function iceberg() {
     document.getElementById('xmen').style.display = 'none'; /* Hide la page connexion*/
    };

function boardwalkEmpire() {
   var radiobuttons = document.querySelector('[name="optradio"]:checked').value;
    var revenuNet = document.getElementById("nuckyThompson").value; //Revenu net mensuel du ménage
    var loyerActuel = document.getElementById("margaretThompson").value; //Loyer actuel
    var prixImmobilier = document.getElementById("chalkyWhite").value; // Prix du bien immobilier
    
    
    var interet;
    if ( revenuNet <= 3000) {
        interet = (2.30/100);
    } else if (3000 < revenuNet && revenuNet <= 4000) {
        interet = (2.20/100);
    }  else if (4000 < revenuNet && revenuNet  <= 5000) {
        interet = (2.10/100);
    }  else if (5000 < revenuNet && revenuNet  <= 6000) {
        interet = (2/100);
    }  else if (6000 < revenuNet && revenuNet <= 7000) {
        interet = (1.9/100);
    } else {
        interet = (1.8/100);
    };
    
    var impactApport = (0.15/100); // impact de l'apport en moyenne
    var coutAssurance = (0.46/100); //cout de l'assurance en pourcentage du cout global
    var interetFive = interet + coutAssurance; //impact de 5% d'apport
    var interetTen = interet - impactApport  + coutAssurance; //impact de 10% d'apport
    var interetFifteen = interet + (impactApport * -2) + coutAssurance; // impact de 15% d'apport
    var maturitéMoyenne = (18 * 12); // maturite moyenne d'emprunt de 18 ans
    var propConsoImmo = (35/100); //capacite mensuel d'emprunt
    var propEpargner; //capacité d'epargne mensuel du menage
    var tauxSqoople = (5/100); //commision du pret sqoople
    
    
    var coutGlobal;
    var mensualiteMortgage;
    var SRE;
    var gainSre;
    var coutGlobalAssurance;
    var coutMensuelAssurance;
    var capaciteMensuel;
    var apportRechercher;
    var capaciteEpargner;
    var coutOpportuniteMois;
    var coutOpportuniteLoyer;
    var coutOpportuniteMensualite;
    var coutOpportuniteInteret;
    var feesSqoople;
    var feesInvestisseurs;
    var economieSqoople;
    var tauxInvestisseurs;
    
    
   if ( revenuNet <= 3000) {
        tauxInvestisseurs = (12/100);
    } else if (3000 < revenuNet && revenuNet <= 4000) {
        tauxInvestisseurs = (10/100);
    }  else if (4000 < revenuNet && revenuNet  <= 5000) {
        tauxInvestisseurs = (8/100);
    }  else if (5000 < revenuNet && revenuNet  <= 6000) {
        tauxInvestisseurs = (6/100);
    }  else if (6000 < revenuNet && revenuNet <= 7000) {
        tauxInvestisseurs = (5/100);
    } else {
        tauxInvestisseurs = (4/100);
    };
    
    if ( revenuNet <= 3000) {
        propEpargner = (20/100);
    } else if (3000 < revenuNet && revenuNet <= 4000) {
        propEpargner = (25/100);
    }  else if (4000 < revenuNet && revenuNet  <= 5000) {
        propEpargner = (30/100);
    }  else if (5000 < revenuNet && revenuNet  <= 6000) {
        propEpargner = (35/100);
    }  else if (6000 < revenuNet && revenuNet <= 7000) {
        propEpargner = (40/100);
    } else {
        propEpargner = (45/100);
    };
    
    var economieSqoople;
    
    switch (radiobuttons) {
    case "5":
radiobuttons = document.getElementById("phoebeBuffay").value; 
  document.getElementById("mikeRoss").innerHTML= radiobuttons;
      coutGlobal =   prixImmobilier * (1 + interetFive);  
       apportSqoople = prixImmobilier * (radiobuttons/100);
      mensualiteMortgage = coutGlobal /  maturitéMoyenne; 
                                         
        SRE = loyerActuel / mensualiteMortgage;
         
            if (loyerActuel > mensualiteMortgage) {
           gainSre = loyerActuel - mensualiteMortgage;
       }  else {
           gainSre = 0;
       };
       
    coutGlobalAssurance =  coutAssurance * prixImmobilier; 
    coutMensuelAssurance =  coutGlobalAssurance /  maturitéMoyenne;                               capaciteMensuel = revenuNet * propConsoImmo;
    apportRechercher =  prixImmobilier * (radiobuttons/100);
    capaciteEpargner =  revenuNet * propEpargner;
    coutOpportuniteMois = ((apportRechercher/capaciteEpargner)-1);
    coutOpportuniteLoyer = loyerActuel * coutOpportuniteMois;
    coutOpportuniteMensualite = gainSre * maturitéMoyenne;
    coutOpportuniteInteret = prixImmobilier * (impactApport * 0); // impact apport nulle qd l'apport est inferieur à 5%
    feesSqoople =  tauxSqoople * apportRechercher;
    feesInvestisseurs = tauxInvestisseurs * apportRechercher;
    economieSqoople =  (coutOpportuniteLoyer + coutOpportuniteMensualite +  
                        coutOpportuniteInteret - ( feesSqoople + feesInvestisseurs)); 
      document.getElementById("gillianDarmody").innerHTML= Math.round(economieSqoople);
        document.getElementById("jamesDarmody").innerHTML= Math.round(economieSqoople);
      document.getElementById("agentNelson").innerHTML= Math.round(mensualiteMortgage);
       
            
    break;
            
    case "10":
        radiobuttons = document.getElementById("chandlerBing").value; 
  document.getElementById("mikeRoss").innerHTML= radiobuttons;
      coutGlobal =   prixImmobilier * (1 + interetTen);
       apportSqoople = prixImmobilier * (radiobuttons/100);
      mensualiteMortgage = coutGlobal /  maturitéMoyenne;
     SRE = loyerActuel / mensualiteMortgage;
          if (loyerActuel > mensualiteMortgage) {
           gainSre = loyerActuel - mensualiteMortgage;
       }  else {
           gainSre = 0;
       };
    coutGlobalAssurance =  coutAssurance * prixImmobilier; 
    coutMensuelAssurance =  coutGlobalAssurance /  maturitéMoyenne;                               capaciteMensuel = revenuNet * propConsoImmo;
    apportRechercher =  prixImmobilier * (radiobuttons/100);
    capaciteEpargner =  revenuNet * propEpargner;
    coutOpportuniteMois = ((apportRechercher/capaciteEpargner)-1);
    coutOpportuniteLoyer = loyerActuel * coutOpportuniteMois;
    coutOpportuniteMensualite = gainSre * maturitéMoyenne;
    coutOpportuniteInteret = prixImmobilier * (impactApport); // impact apport nulle qd l'apport est inferieur à 5%
    feesSqoople =  tauxSqoople * apportRechercher;
    feesInvestisseurs = tauxInvestisseurs * apportRechercher;
    economieSqoople =  (coutOpportuniteLoyer + coutOpportuniteMensualite +  
                        coutOpportuniteInteret - feesSqoople - feesInvestisseurs); 
    document.getElementById("gillianDarmody").innerHTML= Math.round(economieSqoople);
      document.getElementById("jamesDarmody").innerHTML= Math.round(economieSqoople);
      document.getElementById("agentNelson").innerHTML= Math.round(mensualiteMortgage);
    break;
            
    case "15":
        radiobuttons = document.getElementById("rachelGreen").value; 
      document.getElementById("mikeRoss").innerHTML= radiobuttons;
        coutGlobal =   prixImmobilier * (1 + interetFifteen);
        apportSqoople = prixImmobilier * (radiobuttons/100);
      mensualiteMortgage = coutGlobal /  maturitéMoyenne; 
     SRE = loyerActuel / mensualiteMortgage;
          if (loyerActuel > mensualiteMortgage) {
           gainSre = loyerActuel - mensualiteMortgage;
       }  else {
           gainSre = 0;
       };
    coutGlobalAssurance =  coutAssurance * prixImmobilier; 
    coutMensuelAssurance =  coutGlobalAssurance /  maturitéMoyenne;                               capaciteMensuel = revenuNet * propConsoImmo;
    apportRechercher =  prixImmobilier * (radiobuttons/100);
    capaciteEpargner =  revenuNet * propEpargner;
    coutOpportuniteMois = ((apportRechercher/capaciteEpargner)-1);
    coutOpportuniteLoyer = loyerActuel * coutOpportuniteMois;
    coutOpportuniteMensualite = gainSre * maturitéMoyenne;
    coutOpportuniteInteret = prixImmobilier * (impactApport + impactApport ) ; // impact apport nulle qd l'apport est inferieur à 5%
    feesSqoople =  tauxSqoople * apportRechercher;
    feesInvestisseurs = tauxInvestisseurs * apportRechercher;
    economieSqoople =  (coutOpportuniteLoyer + coutOpportuniteMensualite +  
                        coutOpportuniteInteret - feesSqoople - feesInvestisseurs);
    document.getElementById("gillianDarmody").innerHTML= Math.round(economieSqoople);
        document.getElementById("jamesDarmody").innerHTML= Math.round(economieSqoople);
      document.getElementById("agentNelson").innerHTML= Math.round(mensualiteMortgage); 
    break;       
    default:
    document.getElementById("mikeRoss").innerHTML = "1";
    coutGlobal =   prixImmobilier * (1 + interetFive);
    apportSqoople = prixImmobilier * (radiobuttons/100);
      mensualiteMortgage = coutGlobal /  maturitéMoyenne;
     SRE = loyerActuel / mensualiteMortgage;
          if (loyerActuel > mensualiteMortgage) {
           gainSre = loyerActuel - mensualiteMortgage;
       }  else {
           gainSre = 0;
       };
    coutGlobalAssurance =  coutAssurance * prixImmobilier; 
    coutMensuelAssurance =  coutGlobalAssurance /  maturitéMoyenne;                               capaciteMensuel = revenuNet * propConsoImmo;
    apportRechercher =  prixImmobilier * (radiobuttons/100);
    capaciteEpargner =  revenuNet * propEpargner;
    coutOpportuniteMois = ((apportRechercher/capaciteEpargner)-1);
    coutOpportuniteLoyer = loyerActuel * coutOpportuniteMois;
    coutOpportuniteMensualite = gainSre * maturitéMoyenne;
    coutOpportuniteInteret = prixImmobilier * (impactApport * 0); // impact apport nulle qd l'apport est inferieur à 5%
    feesSqoople =  tauxSqoople * apportRechercher;
    feesInvestisseurs = tauxInvestisseurs * apportRechercher;
    economieSqoople = (coutOpportuniteLoyer + coutOpportuniteMensualite +  
                        coutOpportuniteInteret - feesSqoople - feesInvestisseurs);
   document.getElementById("gillianDarmody").innerHTML= Math.round(economieSqoople);
      document.getElementById("jamesDarmody").innerHTML= Math.round(economieSqoople);
      document.getElementById("agentNelson").innerHTML= Math.round(mensualiteMortgage);
   }  
};
//Les boutons En savoir plus
//Premier bouton en savoir plus
function remusLupin(){
     document.getElementById('nevilleLondubat').style.display = 'none';
};
//Second bouton en savoir plus
function gregorovitch() {
    //close 
    
    document.getElementById('minervaMcGonagall').style.display = 'none';
    };
//Troisième bouton en savoir plus
function calvinScott() {
    //close 
    
    document.getElementById('vanessaScott').style.display = 'none';
    };