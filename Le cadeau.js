var N = parseInt(readline()); //Nombre de Oods
var C = parseInt(readline()); //Prix du cadeau
var arr = [];
var somme = 0;
for(var i=0; i<N; i++){
    var B = parseInt(readline()); //Budget d'un Oods
    arr[i] = B;
    somme += B;
}


var contrib = []; //Contributions des participants
var moyenne = 0;

if(somme < C){
    print("IMPOSSIBLE");
}else{
    arr.sort(function(a,b){ return a-b; });
    while(C > 0){
        if(arr.length === 0){
            printErr("arr vide mais C > 0");
            break;
        }else{
            moyenne = Math.ceil(C / arr.length);
            if(arr[0] < moyenne){
                contrib.push(arr[0]);
                C -= arr[0];
                arr.shift();
            }else{
                contrib.push(moyenne);
                C -= moyenne;
                arr.shift();
            }
        }
    }
    contrib.sort(function(a,b){ return a-b; });
    for(var j=0; j<contrib.length; j++){
        print(contrib[j]);
    }
}