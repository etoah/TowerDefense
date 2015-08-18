##TowerDefense
***
一款原生JS写的塔防游戏



#####怎么使用
`原生JS` 


![预览](review.jpg )

[现在试玩](https://www.baidu.com/)


#####优点
* 原生
* 牛逼
* 就是牛逼



#####

*dasf*
**dfadfa**

> adfadfadfadf







adfadsfasdf  
adfadf
adf
adf
a

afadfadf


adfadfadf



``` javascript
/**
 * Created by Administrator on 2014/12/4 0004.
 */
var Lucien=(function(L){
    "use strict";
    var mapLen= L.Config.mapData[1].length;
    L. Map = {        
        currentMap: [],
        mapEntry:null,
        draw : function(map){
            var i,j;
            for(i = 0; i < mapLen;i++){

                for(j = 0;j<mapLen;j++){

                    if(this.currentMap[i][j] == 0)Lucien.Canvas.drawRect(map,i*50,j*50,50,50);
                    else Lucien.Canvas.fillRect(map,i*50,j*50,50,50,'black');
                }
            }
        }

    }


    return L;
}(Lucien||{}))


```