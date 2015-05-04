/**
 * Created by Administrator on 2014/12/6 0006.
 */
var Lucien=(function(L){

    "use strict";
    function Enemy(x,y,type)
    {
        this.x=x;
        this.y=y;
        this.type=type;
        this.maxLife = 50 + type * 100;
        this.life = this.maxLife;
        this.sp = 2;
        //是否活着
        this.islive = true;
        //移动的方向
        this.dir = null;
        //下个移动位置
        this.nextPosition = null;
        //冰冻时间
        this.frozenTime = 0;
        //敌人的序号
        this.num = 0;
        //记录已经走过的位置
        this.hadWalk = {};
    }

    Enemy.prototype={
        cxt: L.Config.canvasElements.main.getContext("2d"),
        img: L.Config.imgList.imgEnemy,
        height:L.Config.enemy.mapSideLen,
        width:L.Config.enemy.mapSideLen,

        over:function(isdead)
        {
            //this.islive = false;
            if(!isdead)
            {
                L.Config.life-=1;
            }
            else
            {
                L.Config.score+= L.Config.coinPerEnemy;
            }
            L.Game.updateMessag();
            L.Game.enemyList.remove(this) ;
            if(L.Config.life<=0) {
                L.Game.over();
            }
        },

        draw:function(){
            var mapY=L.Config.enemy.map[this.type].y,
                lifeIcon=Math.floor((this.width-10)*this.life/this.maxLife);
            if(this.frozenTime > 0)
            {
                mapY+= L.Config.enemy.mapSideLen;
            }
             L.Canvas.drawImg(this.cxt,this.img,L.Config.enemy.map[this.type].x ,mapY,this.height,this.width,this.x,this.y,this.height,this.width);
            //画出血量
            L.Canvas.fillRect(this.cxt,this.x+5,this.y,lifeIcon,3,"rgba(38,223,116,0.8)");

        },

        update:function(){
            if(this.x> L.Config.mapSideLen||this.y> L.Config.mapSideLen)
            {
                this.over(false);
                return false;
            }
            var xIndex = Math.floor(this.x / 50),
                yIndex = Math.floor(this.y / 50);

            //如果没有下个位置或是到了下个位置
            if(!this.nextPosition ||
                ((this.x >= this.nextPosition.x - 5 && this.x <= this.nextPosition.x) && (this.y >= this.nextPosition.y - 5 && this.y <= this.nextPosition.y))
            )
            {
                //走到最右侧
                if (xIndex + 1 >= 10) {
                    xIndex = -1;
                }
                else {
                    //判断往下能否走
                    if (L.Map.currentMap[xIndex][yIndex + 1] && !this.hadWalk[xIndex + "_" + (yIndex + 1)]) {

                        this.dir = "down";
                        yIndex += 1;
                    }
                    //判断往右能否走
                    else if (L.Map.currentMap[xIndex + 1][yIndex] && !this.hadWalk[(xIndex + 1) + "_" + yIndex]) {
                        this.dir = "right";
                        xIndex += 1;
                    }
                    else if (L.Map.currentMap[xIndex][yIndex - 1] && !this.hadWalk[xIndex + "_" + (yIndex - 1)]) {
                        this.dir = "up";
                        yIndex -= 1;
                    }
                    else if (L.Map.currentMap[xIndex - 1][yIndex] && !this.hadWalk[(xIndex - 1) + "_" + yIndex]) {
                        this.dir = "left";
                        xIndex -= 1;
                    }
                }


                this.nextPosition = {x: xIndex * 50 + 5, y: yIndex * 50 + 5};
                //记录已经走过的位置
                this.hadWalk[xIndex + "_" + yIndex] = true;

            }

            //移动
            switch(this.dir){

                case "down":
                    this.y += this.sp;
                    break;
                case "up":
                    this.y -= this.sp;
                    break;
                case "left":
                    this.x -= this.sp;
                    break;
                case "right":
                    this.x += this.sp;
                    break;
                default:

                    break;
            }

        }



    }

//画出所有敌人
    Enemy.drawEnemies=function(){

        var enemy;

        for(var i=0,len= L.Game.enemyList.length;i<len;i++){

            enemy = L.Game.enemyList[i];

            if(!enemy)continue;

            enemy.draw();
        }

    }


//更新所有敌人信息   转为静态方法
    Enemy.updateEnemies=function (){

        var enemy;

        for(var i=0,l= L.Game.enemyList.length;i<l;i++){

            enemy = L.Game.enemyList[i];

            if(!enemy)continue;

            enemy.update();
        }

    }
    L.Enemy=Enemy;
    return L;
}(Lucien||{}))