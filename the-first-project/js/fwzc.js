// 侧导航
document.getElementById("h1").onclick=function(){
	if(document.getElementById("u1").getAttribute("class")=="show"){
		document.getElementById("u1").setAttribute("class","");
	}else{
		document.getElementById("u1").setAttribute("class","show");
	}
}
document.getElementById("h2").onclick=function(){
	if(document.getElementById("u2").getAttribute("class")=="show"){
		document.getElementById("u2").setAttribute("class","");
	}else{
		document.getElementById("u2").setAttribute("class","show");
	}
}

//图片自动滚动
              var oScrool=document.getElementById("scroll");
	var oShowimgss=document.getElementById("u");
	var iSpeed=30;
	oShowimgss.innerHTML=oShowimgss.innerHTML+oShowimgss.innerHTML+oShowimgss.innerHTML;
function marqueeright(){  
	document.getElementById("showimgss").scrollLeft=document.getElementById("showimgss").scrollLeft+iSpeed;
	if(document.getElementById("showimgss").scrollLeft>1200){
	 	document.getElementById("showimgss").scrollLeft=0;
	  }else if(document.getElementById("showimgss").scrollLeft<=0){
	 	document.getElementById("showimgss").scrollLeft=1200;
	 }
	i=setTimeout("marqueeright()",200);
}
oScrool.children[0].onmouseover=function(){
	 iSpeed=30;
}
oScrool.children[1].onmouseover=function(){
	 iSpeed=-30;
}
marqueeright();