//导航浮动效果
window.onload=function(){
	var oNav=document.getElementById("nav");
	var Na=oNav.offsetTop;
	window.onscroll=function(){
		//要获取当前页面的滚动条纵坐标位置，用：document.documentElement.scrollTop;而不是：document.body.scrollTop;documentElement 对应的是 html 标签，而 body 对应的是 body 标签。在标准w3c下，document.body.scrollTop恒为0，需要用document.documentElement.scrollTop来代替;
    	var scroll=document.documentElement.scrollTop || document.body.scrollTop;
    	if(scroll>Na){
    		oNav.style.position="fixed";
    		oNav.style.top="0";
    	}else{
    		oNav.style.position="absolute";
    		oNav.style.top="120px";
    	}
	}
}