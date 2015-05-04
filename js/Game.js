/**
 * Created by Lucien on 2014/12/5 0005.
 */
var Lucien=(function(L){
    "use strict";

    var Game={
        //画布列表信息
        canvasList : {},

        //每关的延迟时间
        missionLazy : 2000,
        //每关已出的敌人数
        missionEnemy : 0,
        //每个敌人的出场间隔时间
        enemyTime : 1000,
        //每个敌人的出场间隔延迟
        enemyLazy : 0,
        //敌人类表
        enemyList : [],
        num:0,
        bulletList:[],

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
            Game.updateMessag();

        },

        updateMessag:function(){

                L.Canvas.clear(Game.canvasList.info,100,100);
                L.Canvas.drawText(Game.canvasList.info,"金钱:"+ L.Config.score,10,30,"#00AA00");
                L.Canvas.drawText(Game.canvasList.info,"第 "+ L.Config.mission+" 波",10,60,"#00AA00");
                L.Canvas.drawText(Game.canvasList.info,"生命:"+ L.Config.life,10,90,"#00AA00");
        },

        start : function(){
            L.Map.currentMap= L.Config.mapData[L.Config.currentMapIdx];
            L.Map.mapEntry= L.Config.mapEntry[L.Config.currentMapIdx];
            L.Map.draw(this.canvasList.map);
            this.timer = setInterval(Game.loop,Math.floor(1000/ L.Config.FPS));

        },
        //停止
        stop : function(){

            clearInterval(this.timer);
        },
        //结束
        over : function(){
            this.stop();
            alert("你输了!");
        },
        //赢了
        win : function(){
            this.stop();
            alert("你赢了!");
        },
        initEnemy:function(){
            //出敌等待时间是否到

            if(Game.enemyLazy > 0){

                Game.enemyLazy -= 20;

                return false;
            }
            else{
                //初始化出敌等待时间
                Game.enemyLazy = Game.enemyTime;
            }

            Game.missionEnemy += 1;
            var enemy=new L.Enemy(L.Map.mapEntry.x,L.Map.mapEntry.y, L.Config.mission);

            //敌人序号  关*20+当前数
            enemy.num = Game.mission*20+Game.missionEnemy;
            //添加到敌人列表
            Game.enemyList.push(enemy);

        },

        loop:function(){
            L.Canvas.clear(Game.canvasList.main, L.Config.mapSideLen, L.Config.mapSideLen);
            Game.initEnemy(); //是否等待、出敌，等相关信息

            L.Enemy.drawEnemies();//画出敌人
            L.Enemy.updateEnemies();

        }

    }


    L.Game=Game;
    return L;
}(Lucien||{}))
