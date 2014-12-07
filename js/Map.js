/**
 * Created by Administrator on 2014/12/4 0004.
 */
var Lucien=(function(L){
    "use strict";
    var mapLen= L.Config.mapData[1].length;
    L. Map = {
        //当前地图
        currentMap: [],
        mapEntry:null,

        //画出地图
        draw : function(map){
            var i,j;
            for(i = 0; i < mapLen;i++){

                for(j = 0;j<mapLen;j++){
                    //画背景地图
                    if(this.currentMap[i][j] == 0)Lucien.Canvas.drawRect(map,i*50,j*50,50,50);
                    //画可以走的路
                    else Lucien.Canvas.fillRect(map,i*50,j*50,50,50,'black');
                }
            }
        }

    }


    return L;
}(Lucien||{}))