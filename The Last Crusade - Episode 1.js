var inputs = readline().split(' ');
var W = parseInt(inputs[0]); //Nombre de colonnes
var H = parseInt(inputs[1]); //Nombre de lignes
var arr = [];
for (var i = 0; i < H; i++) {
    var LINE = readline().split(' '); //Types des cases de la ligne
    arr[i] = [];
    for(var j=0; j<LINE.length; j++){
        arr[i][j] = LINE[j];
    }
}

var EX = parseInt(readline()); //Coordonnée X de la sortie (inutile pour cette mission mais elle doit être lue)

while (true) {
    var inputs = readline().split(' ');
    var X = parseInt(inputs[0]); //Position X d'Indy
    var Y = parseInt(inputs[1]); //Position Y d'Indy
    var POS = inputs[2]; //Point d'entrée d'Indy
    
    switch (arr[Y][X]) {
        case "1":
        case "3":
        case "7":
        case "8":
        case "9":
        case "12":
        case "13":
            Y++;
            break;
        case "10":
            X--;
            break;
        case "11":
            X++;
            break;
        case "2":
        case "6":
            if(POS=="RIGHT"){ X--; }else{ X++; }
            break;
        case "4":
            if(POS=="TOP"){ X--; }else{ Y++; }
            break;
        case "5":
            if(POS=="TOP"){ X++; }else{ Y++; }
    }
    print(X, Y);
}