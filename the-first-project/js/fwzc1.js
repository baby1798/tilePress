// 图片自动滚动
	function marqueeimg(){
	document.getElementById("showimg").scrollLeft+=10;
	i=setTimeout("marqueeimg()",100);
}
marqueeimg();