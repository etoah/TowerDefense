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

       imgList :{
           imgEnemy : document.getElementById("imgEnemy"),
           imgTower : document.getElementById("imgTower"),
           imgBullet : document.getElementById("imgBullet"),
           imgBtn : document.getElementById("imgBtn")
       },


       tower:
       {
           Map : [
               {x:0,y:80},{x:100,y:40},{x:100,y:80},
               {x:100,y:0},{x:50,y:0},{x:0,y:0},
               {x:0,y:40},{x:50,y:40},{x:50,y:80}
           ],
           Size:{x:50,y:40}
       },

        enemy:
        {
            mapCount:9,
            mapSideLen:50,
            map:[
                {x:0,y:0},
                {x:50,y:0},
                {x:100,y:0},
                {x:150,y:0},
                {x:200,y:0},
                {x:250,y:0},
                {x:300,y:0},
                {x:350,y:0},
                {x:400,y:0}

            ]


        },
       bullet:
       {
           Map : [{x:0,y:0},{x:10,y:0},{x:20,y:0},{x:30,y:0},{x:40,y:0}],
           Size:{x:10,y:10}
       },

       //游戏参数
       score:150,
       life:10,
       //关卡数
       mission : 0,
       coinPerEnemy:5



    };

    //初始化，敌人的坐标

    L.Config=Config;
    return L;
}(Lucien||{}));
