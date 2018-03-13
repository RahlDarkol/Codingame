var inputs = readline().split(' ');
var nbFloors = parseInt(inputs[0]); //Nombre d'étages
var width = parseInt(inputs[1]); //Largeur de la zone
var nbRounds = parseInt(inputs[2]); //Nombre max de tours de jeu
var exitFloor = parseInt(inputs[3]); //Etage de la sortie
var exitPos = parseInt(inputs[4]); //Position de la sortie à son étage
var nbTotalClones = parseInt(inputs[5]); //Nombre de clones
var nbAdditionalElevators = parseInt(inputs[6]); //Inutile ici, vaut toujours 0
var nbElevators = parseInt(inputs[7]); //Nombre d'ascenseurs

var arr = [];
arr[exitFloor] = exitPos;

for (var i = 0; i < nbElevators; i++) {
    var inputs = readline().split(' ');
    var elevatorFloor = parseInt(inputs[0]); //Etage d'un ascenseur
    var elevatorPos = parseInt(inputs[1]); //Position de l'ascenseur à cet étage
    arr[elevatorFloor] = elevatorPos;
}

while (true) {
    var inputs = readline().split(' ');
    var cloneFloor = parseInt(inputs[0]); //Etage du clone de tête
    var clonePos = parseInt(inputs[1]); //Position du clone de tête à cet étage
    var direction = inputs[2]; //Direction du clone de tête : LEFT or RIGHT
    if ((clonePos < arr[cloneFloor] && direction == "LEFT") ||
        (clonePos > arr[cloneFloor] && direction == "RIGHT"))
    {
        print('BLOCK');
    }else{
        print('WAIT');
    }
}