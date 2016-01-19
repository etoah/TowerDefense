##TowerDefense
***
一款原生JS写的塔防游戏




![预览](review.jpg )


``` javascript
/**
 * Created by Administrator on 2014/12/4 0004.
 */
var Lucien=(function(L){
    "use strict";
    var mapLen= L.Config.mapData[1].length;
    L. Map = {        
        currentMap: [],
        mapEntry:null,
        draw : function(map){
            var i,j;
            for(i = 0; i < mapLen;i++){

                for(j = 0;j<mapLen;j++){

                    if(this.currentMap[i][j] == 0)Lucien.Canvas.drawRect(map,i*50,j*50,50,50);
                    else Lucien.Canvas.fillRect(map,i*50,j*50,50,50,'black');
                }
            }
        }

    }


    return L;
}(Lucien||{}))


```