var inputs = readline().split(' ');
var W = parseInt(inputs[0]) - 1; //Largeur max
var H = parseInt(inputs[1]) - 1; //Hauteur max
var N = parseInt(readline()); //Nombre de sauts
var inputs = readline().split(' ');
var X = parseInt(inputs[0]); //Position Batman
var Y = parseInt(inputs[1]); //Position Batman
var minW = 0; //Largeur min
var minH = 0; //Hauteur min

while (true) {
    var bombDir = readline(); //Direction de la bombe
    switch (bombDir) {
        case "U":
            H = Y-1;
            Y -= Math.ceil((Y-minH)/2);
            break;
        case "UR":
            H = Y - 1;
            minW = X + 1;
            X += Math.ceil((W-X)/2);
            Y -= Math.ceil((Y-minH)/2);
            break;
        case "R":
            minW = X + 1;
            X += Math.ceil((W-X)/2);
            break;
        case "DR":
            minH = Y + 1;
            minW = X + 1;
            X += Math.ceil((W-X)/2);
            Y += Math.ceil((H-Y)/2);
            break;
        case "D":
            minH = Y + 1;
            Y += Math.ceil((H-Y)/2);
            break;
        case "DL":
            minH = Y + 1;
            W = X - 1;
            X -= Math.ceil((X-minW)/2);
            Y += Math.ceil((H-Y)/2);
            break;
        case "L":
            W = X - 1;
            X -= Math.ceil((X-minW)/2);
            break;
        case "UL":
            H = Y - 1;
            W = X - 1;
            X -= Math.ceil((X-minW)/2);
            Y -= Math.ceil((Y-minH)/2);
    }
    print(X, Y);
}