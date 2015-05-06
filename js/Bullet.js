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

        this.speed2D= this.get2DSpeed();

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

        //采用近似值
        get2DSpeed:function()
        {
            var xsp,
                ysp,
                xdiff= Math.abs(this.enemy.x+L.Config.enemy.mapSideLen/2-this.x+ L.Config.bullet.Size/ 2),
                ydiff= Math.abs(this.enemy.y+L.Config.enemy.mapSideLen/2-this.y+ L.Config.bullet.Size/ 2);

            if(ydif >= xdif){

                ysp = this.sp;
                xsp = Math.floor(this.sp * (xdiff / ydiff));
            }
            else {
                xsp = this.sp;
                ysp = Math.floor(this.sp * (ydiff / xdiff));
            }

            return {xsp:xsp,ysp:ysp};s


        },

        update:function()
        {
            if(!this.enemy.isLive) return this.over();
            this.speed2D=this.get2DSpeed();
            if(this.x+ L.Config.bullet.Size/ 2>=this.enemy.x+L.Config.enemy.mapSideLen/2)this.x-=this.speed2D.xsp;
            else this.x+=this.speed2D.xsp;
            if(this.y+ L.Config.bullet.Size/ 2>=this.enemy.y+L.Config.enemy.mapSideLen/2)this.y-=this.speed2D.ysp;
            else this.y+=this.speed2D.ysp;

            if(L.Canvas.isCircleInCircle({x:this.x+ L.Config.bullet.Size/ 2,y:this.y+ L.Config.bullet.Size/ 2,radius:this.radius},
                    {x:this.enemy.x+L.Config.enemy.mapSideLen/2,y:this.enemy.y+L.Config.enemy.mapSideLen/2,radius:L.Config.enemy.mapSideLen/2}))
            {
                this.over(this.enemy);
            }


        },

        over:function(sender)
        {
            if(sender)
            {
                var type=this.bulletType[this.type];
                var effect;
                this.enemy.hit(type.hurt,effect);
            }
        }

    }

    Bullet.updateAll=function()
    {
        var bullet;

        for(var i=0,l= L.Game.bulletList.length;i<l;i++){

            bullet = L.Game.bulletList[i];

            if(!bullet)continue;

            bullet.updateAll(Game.enemyList);
        }
    }

    Bullet.drawAll=function()
    {
        var bullet;

        for(var i=0,l= L.Game.bulletList.length;i<l;i++){

            bullet = L.Game.bulletList[i];

            if(!bullet)continue;

            bullet.draw();
        }
    }

    L.Bullet=Bullet;
    return L;
}(Lucien||{}))
