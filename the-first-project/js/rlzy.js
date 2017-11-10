
 //侧导航伸展效果的控制
    var pdnav=document.getElementById("pdnav");
           pdnav.onclick=function(){
            if(this.parentNode.children[1].getAttribute("class")=="show"){
                this.parentNode.children[1].setAttribute("class","");
                this.children[1].setAttribute("class","r1");
            }else{
                this.parentNode.children[1].setAttribute("class","show");
                this.children[1].setAttribute("class","r2");
            }
     }
 //焦点图特效
     var show=document.getElementById("show");
     var imgs=document.getElementById("content");
      imgs.innerHTML=imgs.innerHTML+imgs.innerHTML+imgs.innerHTML;
       var move=15;
    function changeimg(){
      show.scrollLeft+=move;
      if(show.scrollLeft>1400){
      show.scrollLeft=0;
      }else if(show.scrollLeft<=0){
       show.scrollLeft=1400;
      }
      i=setTimeout("changeimg()",200);
    }
    function scrimg(){
      move=15;
    }
    function backimg(){
      move=-15;
    }
    changeimg();