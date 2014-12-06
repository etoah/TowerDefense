/**
 * Created by Administrator on 2014/12/5 0005.
 */

var Lucien=(function(L){
    "use strict";
    L.Config={
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
            }
    }


    return L;
}(Lucien||{}))
