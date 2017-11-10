    var oCen=document.getElementById("center");
	var oBan=oCen.getElementsByTagName("div")[0];
	var oPic=oBan.getElementsByTagName("div")[0];
	var aUl=oBan.getElementsByTagName("ul")[0];
	var pag=aUl.children;
	var m=0;
	function marqueeimg(){
		m++;
		oPic.scrollLeft+=1166;
		if(m==1){
			oPic.scrollLeft=0;
			pag[0].className+="bgd";
			pag[1].className="";
			pag[2].className="";
		}else if(m==2){
			oPic.scrollLeft=1166;
			pag[0].className="";
			pag[1].className+="bgd";
			pag[2].className="";
		}else if(m==3){
			oPic.scrollLeft=2332;
			pag[0].className="";
			pag[1].className="";
			pag[2].className+="bgd";
			m=0;
		}
		n=setTimeout("marqueeimg()",2000);
	}
	marqueeimg();
	oBan.onmouseover=function(){
		clearTimeout(n);
	}
	oBan.onmouseout=function(){
		n=setTimeout("marqueeimg()",2000);
	}
	function page(x){
		if(x==1){
			oPic.scrollLeft=0;
			pag[0].className+="bgd";
			pag[1].className="";
			pag[2].className="";
		}else if(x==2){
			oPic.scrollLeft=1166;
			pag[0].className="";
			pag[1].className+="bgd";
			pag[2].className="";
		}else if(x==3){
			oPic.scrollLeft=2332;
			pag[0].className="";
			pag[1].className="";
			pag[2].className+="bgd";
		}
	}