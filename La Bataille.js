//Initialisation
var manches = 0;
var valeurs = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
var pat = false;

//Cartes Joueur 1
var n = parseInt(readline());
var stack1 = [];
for(var i=0; i<n; i++){
    var cardp1 = readline();
    if(cardp1.length > 2){
        stack1.push(cardp1[0].concat(cardp1[1]));
    }else{
        stack1.push(cardp1[0]);
    }
}

//Cartes Joueur 2
var m = parseInt(readline());
var stack2 = [];
for(var i=0; i<m; i++){
    var cardp2 = readline();
    if(cardp2.length > 2){
        stack2.push(cardp2[0].concat(cardp2[1]));
    }else{
        stack2.push(cardp2[0]);
    }
}

//Partie
var iComp = 0; //index des cartes à comparer
while(stack1.length>0 && stack2.length>0){
    if(stack1[iComp] !== stack2[iComp]){ //Si 2 cartes différentes
        manches++;
        if(valeurs.indexOf(stack1[iComp]) > valeurs.indexOf(stack2[iComp])){
            for(var i=0; i<iComp+1; i++){ stack1.push(stack1.shift()); }
            for(var i=0; i<iComp+1; i++){ stack1.push(stack2.shift()); }
        }else{
            for(var i=0; i<iComp+1; i++){ stack2.push(stack1.shift()); }
            for(var i=0; i<iComp+1; i++){ stack2.push(stack2.shift()); }
        }
        iComp = 0;
    }else{ //Si 2 cartes même valeur
        iComp += 4; //Brûler 3 cartes et comparer la 4ème
        if(!stack1[iComp] || !stack2[iComp]){ //Mais si la suivante n'existe pas : PAT
            pat = true;
        }
    }
}

if(pat === true){
    print("PAT");
}else if(stack1.length > stack2.length){
    print("1", manches);
}else{
    print("2", manches);
}