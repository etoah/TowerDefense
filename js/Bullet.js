/**
 * Created by Lucien on 2014/12/8 0008.
 */

var Lucien=(function(L){

    "use strict";

    function Bullet(type,enemy,level,x,y,radius){
        this.x=x;
        this.y=y;
        this.type=type;
        this.radius=radius;
        this.enemy=enemy;
        this.level=level;
        this.sp=5;

    }

    Bullet.prototype={
        cxt: L.Config.canvasElements.main.getContext("2d"),
        img: L.Config.imgList.imgEnemy,
        imgRadius:10,
        //子弹类型
        bulletType : {
            steal:
            [
                {
                    //hurt:10,steal:0
                    hurt:10,steal:0
                },
                {
                    hurt:12,steal:1
                },
                {
                    hurt:12,steal:2
                }
            ],
            forzen:
            [
                {
                    hurt:5,duration:3000
                },
                {
                    hurt:8,duration:4000
                },
                {
                    hurt:10,duration:4000
                }
            ],
            mutiKill:
            [
                {
                    hurt:12
                },
                {
                    hurt:15
                },
                {
                    hurt:20
                }
            ],
            puncture:
            [
                {
                    hurt:100
                },
                {
                    hurt:200
                },
                {
                    hurt:300
                }
            ],
            seckill://秒杀 =.=!中式英语好强大
            [
                {
                    hurt:15,kill:5
                },
                {
                    hurt:20,kill:8
                },
                {
                    hurt:30,kill:10
                }
            ]
        },
        //子弹在图像中的对应
        bulletMap : [{x:0,y:0},{x:10,y:0},{x:20,y:0},{x:30,y:0},{x:40,y:0}],
        //画子弹
        draw : function(){

            L.Canvas.drawImg(this.cxt,this.img,this.bulletMap[this.type].x,this.bulletMap[this.type].y,this.imgRadius,this.imgRadius,this.x,this.y,this.imgRadius,this.imgRadius);
        },

        //get2DSpeed:function()
        //{
        //    var xsp,
        //        ysp,
        //        xdiff=this.enemy.x-
        //}
    }


    return L;
}(Lucien||{}))
