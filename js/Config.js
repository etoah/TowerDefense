/**
 * Created by Administrator on 2014/12/5 0005.
 */

var Lucien=(function(L){
    "use strict";
   var Config={
        FPS:50,
        mapSideLen:600,
        currentMapIdx:0,
        mapData:[
            [[0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,1,1,1,1,1,1,1,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0],
                [0,1,1,1,1,1,1,1,1,0,0,0],
                [0,1,0,0,0,0,0,0,0,0,0,0],
                [0,1,0,0,0,0,0,0,0,0,0,0],
                [0,1,0,0,0,0,0,0,0,0,0,0],
                [0,1,0,0,0,0,0,0,0,0,0,0],
                [0,1,0,0,0,0,0,0,0,0,0,0],
                [0,1,0,0,0,0,0,0,0,0,0,0]]
            ,
            [[0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,1,1,1,1,1,1,1,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0],
                [0,1,1,1,1,1,1,1,1,0,0,0],
                [0,1,0,0,0,0,0,0,0,0,0,0],
                [0,1,0,0,0,0,0,0,0,0,0,0],
                [0,1,1,1,1,1,1,1,1,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0]]

        ],
        mapEntry:[{x:50,y:0}],
        canvasElements:{
            map:document.getElementById('map'),
            main : document.getElementById('main'),
            info :document.getElementById('info'),
            select : document.getElementById('select'),
            tower : document.getElementById('tower')

        },
        towerMap : [
                    {x:0,y:80},{x:100,y:40},{x:100,y:80},
                    {x:100,y:0},{x:50,y:0},{x:0,y:0},
                    {x:0,y:40},{x:50,y:40},{x:50,y:80}
                    ],
        imgList :{
                imgEnemy : document.getElementById("imgEnemy"),
                imgTower : document.getElementById("imgTower"),
                imgBullet : document.getElementById("imgBullet"),
                imgBtn : document.getElementById("imgBtn")
            },
        enemyMapSideLen:50,
        enemyMapCount:9,
        enemyMap:[], //下面函数初始化
       //游戏参数
       score:150,
       life:10,
       //关卡数
       mission : 0,
       coinPerEnemy:5

    };

    //初始化，敌人的坐标
    Config.enemyMap=(function(){
        var enemyMap=[];
        for(var i=0;i< Config.enemyMapCount;i++)
        {
            enemyMap.push({x: Config.enemyMapSideLen*i,y:0});
        }
        return enemyMap;

    })();

    L.Config=Config;
    return L;
}(Lucien||{}));
