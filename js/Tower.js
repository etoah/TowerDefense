/**
 * Created by Administrator on 2014/12/5 0005.
 */
var Lucien=(function(L){
    "use strict";
    var towerTypeCount= L.Config.tower.Map.length;
    function canInstall(xIndex,yIndex)
    {
        return L.Map.currentMap[xIndex][yIndex]===0&&!Tower.installTower[xIndex+"_"+yIndex];
    }
    function clickDown(e)
    {
        var x= e.offsetX|| e.layerX,
            y= e.offsetY|| e.layerY,
            select = L.Config.canvasElements.select;

        for(var i= 0,len= L.Tower.towerPosition.length;i<len;i++)
        {
            if(L.Canvas.isPointInRect({x:x,y:y}, L.Tower.towerPosition[i]))
            {
                select.towerIndex=i;
                select.onmousemove=selectPointMove;
                select.onmouseup=clickUp;

                break;
            }
        }

    }
    function selectPointMove(e)
    {
        var x = e.offsetX || e.layerX,
            y = e.offsetY || e.layerY,
            cxt = L.Game.canvasList.select,
            i=this.towerIndex|| 0,
        //地图上的坐标点
            xIndex,yIndex;
        xIndex = Math.floor(x / 50);
        yIndex = Math.floor(y / 50);
        L.Canvas.clear(cxt, L.Config.mapSideLen, L.Config.mapSideLen);
        //画出塔在左侧区域
        L.Canvas.drawImg(cxt,Tower.towerImg,L.Config.tower.Map[i].x,L.Config.tower.Map[i].y,L.Config.tower.size.x,L.Config.tower.size.y,x-L.Config.tower.size.x/2,y-L.Config.tower.size.y/2,50,50);
        if(canInstall(xIndex,yIndex))
        {
            L.Canvas.drawRect(cxt,xIndex*50,yIndex*50,50,50,'yellow');
            L.Canvas.fillArc(cxt,x,y,Tower.towerType[i]['level1'].scope,"rgba(25,70,174,0.4)");
        }




    }
    function clickUp(e)
    {

        var cxt = L.Game.canvasList.select,
            towerCvs=  L.Game.canvasList.tower,
            i=this.towerIndex||0,
            x = e.offsetX || e.layerX,
            y = e.offsetY || e.layerY,
            xIndex,yIndex
            ;
        //清除引用
        this.towerIndex=null;
        xIndex = Math.floor(x / 50);
        yIndex = Math.floor(y / 50);
        L.Canvas.clear(cxt,600,600);
        if(canInstall(xIndex,yIndex)) {
            var tower = new Tower(towerCvs,i, xIndex * 50, yIndex * 50, 50, 40)
            tower.draw();
            //标记当前位置有塔
            Tower.installTower[xIndex+"_"+yIndex] = i+"";
        }



        this.onmouseup=null;
        this.onmousemove=null;

    }
    function Tower(cxt,type,x,y,width,height)
    {
        this.cxt=cxt;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        //塔的类型
        this.type = type;
    }

    //静态变量
    Tower.towerPosition =[];
    Tower.installTower=[];
    Tower.towerImg=null;

    Tower.towerType = [
        {
            level1:{
                scope:100,buyIt:50,bullet:1,cd:20
            },
            level2:{
                scope:110,buyIt:50,bullet:1,cd:18
            },
            level3:{
                scope:120,buyIt:50,bullet:1,cd:15
            }
        },
        {
            level1:{
                scope:120,buyIt:75,bullet:1,cd:18
            },
            level2:{
                scope:130,buyIt:75,bullet:1,cd:15
            },
            level3:{
                scope:140,buyIt:75,bullet:2,cd:12
            }
        },
        {
            level1:{
                scope:140,buyIt:100,bullet:3,cd:18
            },
            level2:{
                scope:150,buyIt:100,bullet:4,cd:15
            },
            level3:{
                scope:160,buyIt:100,bullet:5,cd:12
            }
        },
        {
            level1:{
                scope:130,buyIt:125,bullet:1,cd:50
            },
            level2:{
                scope:140,buyIt:125,bullet:1,cd:40
            },
            level3:{
                scope:150,buyIt:125,bullet:1,cd:30
            }
        },
        {
            level1:{
                scope:150,buyIt:150,bullet:1,cd:20
            },
            level2:{
                scope:160,buyIt:150,bullet:1,cd:15
            },
            level3:{
                scope:170,buyIt:150,bullet:1,cd:12
            }
        },
        {
            level1:{
                scope:150,buyIt:150,bullet:1,cd:20
            },
            level2:{
                scope:160,buyIt:150,bullet:1,cd:15
            },
            level3:{
                scope:170,buyIt:150,bullet:1,cd:12
            }
        },
        {
            level1:{
                scope:180,buyIt:150,bullet:1,cd:20
            },
            level2:{
                scope:190,buyIt:150,bullet:1,cd:15
            },
            level3:{
                scope:200,buyIt:150,bullet:1,cd:12
            }
        },
        {
            level1:{
                scope:210,buyIt:150,bullet:1,cd:20
            },
            level2:{
                scope:220,buyIt:150,bullet:1,cd:15
            },
            level3:{
                scope:230,buyIt:150,bullet:1,cd:12
            }
        },
        {
            level1:{
                scope:80,buyIt:150,bullet:1,cd:20
            },
            level2:{
                scope:90,buyIt:150,bullet:1,cd:15
            },
            level3:{
                scope:100,buyIt:150,bullet:1,cd:12
            }
        }
    ]
    Tower.prototype={
        img: L.Config.imgList.imgTower,
        draw : function(){
            L.Canvas.drawImg(this.cxt,this.img, L.Config.tower.Map[this.type].x, L.Config.tower.Map[this.type].y,this.width,this.height,this.x,this.y,this.width,this.height);
        },
        update : function(enemyList){
            if(this.cd>0){
                this.cd-=1;
                return false;
            }

            var towerInfo = Tower.towerType[this.type]["level_"+this.level],
                canShot = towerInfo.bullet,
                enemy;

            this.cd = towerInfo.cd;


        }
    }
    Tower.init=function(cxt,img){
        for(var i = 0;i<towerTypeCount;i++){
            L.Canvas.drawImg(cxt,img, L.Config.tower.Map[i].x,L.Config.tower.Map[i].y,50,40,25,100+i*57,50,40);
            Tower.towerPosition.push({x:25,y:100+i*57,width:50,height:40});
        }
        Tower.towerImg = img;
        Tower.bindClick();

    };

    Tower.bindClick=function(){
        var info=L.Config.canvasElements.info,
             select = L.Config.canvasElements.select;

        info.onmousedown=clickDown;

        //如果鼠标释放的位置还在左侧,则取消此次操作
        info.onmouseup = function(){

            L.Canvas.clear(L.Game.canvasList.select,500,500);
            select.onmousemove = null;
            select.onmousedown = null;
        }
    }
    L.Tower=Tower;
    return L;
}(Lucien||{}));
