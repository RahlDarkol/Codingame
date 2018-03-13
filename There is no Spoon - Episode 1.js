var width = parseInt(readline()); //Nombre de cellules sur l'axe X
var height = parseInt(readline()); //Nombre de cellules sur l'axe Y
var arr = [];
for(var i=0; i<height; i++){
    var line = readline();
    arr[i] = [];
    for(var j=0; j<width; j++){
        arr[i][j] = line.charAt(j);
    }
}

for(var i=0; i<height; i++){ //Inspection de la ligne
    for(var j=0; j<width; j++){ //Inspection de la colonne
        var res = "";
        if(arr[i][j] == "0"){ //Si c'est un noeud, rechercher les potentiels voisins
            res = res + "" + j + " " + i;
            if(j < width-1){ //Si on n'est pas sur la dernière colonne, rechercher le voisin de droite
                var right = false;
                var k = j + 1;
                while(k<width && right===false){ //Tant qu'on ne trouve pas de voisin à droite et qu'on n'est pas sur la dernière colonne
                    if(arr[i][k] == "0"){ //Si un voisin à droite est trouvé
                        right = true;
						res = res + " " + k + " " + i;
                    }else{ //Sinon la recherche continue
                        k++;
                    }
                }
                if(right === false){ //Si aucun voisin à droite n'est trouvé
                    res = res + " -1 -1";
                }
            }else{ //Si on est sur la dernière colonne
				res = res + " -1 -1";
            }
            
            if(i < height-1){ //Si on n'est pas en bas sur la dernière ligne, rechercher le voisin du dessous
                var bottom = false;
                var m = i + 1;
                while(m<height && bottom===false){ //Tant qu'on ne trouve pas de voisin en-dessous et qu'on n'est pas sur la dernière ligne
                    if(arr[m][j] == "0"){ //Si un voisin en-dessous est trouvé
                        bottom = true;
						res = res + " " + j + " " + m;
                    }else{ //Sinon la recherche continue
                        m++;
                    }
                }
                if(bottom === false){ //Si aucun voisin en-dessous n'est trouvé
                    res = res + " -1 -1";
                }
            }else{ //Si on est sur la dernière ligne
				res = res + " -1 -1";
            }
            //Sortie du noeud
            print(res);
        }
    }
}