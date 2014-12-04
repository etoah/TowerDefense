/**
 * Created by Administrator on 2014/12/5 0005.
 */
var Lucien=(function(L){
    "use strict";
    L.Game={
        //画布列表信息
        canvasList : {},
        currentMap:[],
        initCanvas : function(){
            this.canvasList = {
                map : document.getElementById(L.Config.canvasIds.map).getContext("2d")
            }
        },
        init : function(){

            this.initCanvas();

        },
        start : function(){
            L.Map.currentMap= L.Config.mapData[L.Config.currentMapIdx];
            L.Map.draw(this.canvasList.map);
        }

    }

    return L;
}(Lucien||{}))
