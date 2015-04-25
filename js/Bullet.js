/**
 * Created by Administrator on 2014/12/8 0008.
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
        bulletType : [

            {
                level1:{
                    //hurt:10,steal:0
                    hurt:10,steal:100
                },
                level2:{
                    hurt:12,steal:0
                },
                level3:{
                    hurt:12,steal:1
                }
            },
            {
                level1:{
                    hurt:5,forzen:3000
                },
                level2:{
                    hurt:8,forzen:4000
                },
                level3:{
                    hurt:10,forzen:4000
                }
            },
            {
                level1:{
                    hurt:12
                },
                level2:{
                    hurt:15
                },
                level3:{
                    hurt:20
                }
            },
            {
                level1:{
                    hurt:100
                },
                level2:{
                    hurt:200
                },
                level3:{
                    hurt:300
                }
            },
            {
                level1:{
                    hurt:15,kill:5
                },
                level2:{
                    hurt:20,kill:8
                },
                level3:{
                    hurt:30,kill:10
                }
            }
        ],
        //子弹在图像中的对应
        bulletMap : [{x:0,y:0},{x:10,y:0},{x:20,y:0},{x:30,y:0},{x:40,y:0}],
        //画子弹
        draw : function(){

            L.Canvas.drawImg(this.cxt,this.img,this.bulletMap[this.type].x,this.bulletMap[this.type].y,this.imgRadius,this.imgRadius,this.x,this.y,this.imgRadius,this.imgRadius);
        }
    }


    return L;
}(Lucien||{}))
