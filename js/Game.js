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
                map :L.Config.canvasElements.map.getContext("2d"),
                info:L.Config.canvasElements.info.getContext("2d"),
                select:L.Config.canvasElements.select.getContext("2d"),
                main: L.Config.canvasElements.main.getContext("2d"),
                tower: L.Config.canvasElements.tower.getContext("2d")

            }
        },
        //初始化数据
        initData : function(){
            L.Tower.init(this.canvasList.info, L.Config.imgList.imgTower);
        },
        init : function(){

            this.initCanvas();
            this.initData();

        },
        start : function(){
            L.Map.currentMap= L.Config.mapData[L.Config.currentMapIdx];
            L.Map.draw(this.canvasList.map);
        }

    }

    return L;
}(Lucien||{}))
