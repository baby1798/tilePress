var scrol=document.getElementById("scroll");
var eye=document.getElementById("show");
var oUl=document.getElementById("u");
var move=15;
oUl.innerHTML=oUl.innerHTML+oUl.innerHTML+oUl.innerHTML;
function marqueeimgss(){
	eye.scrollLeft+=move;
	if(eye.scrollLeft>1320){
		eye.scrollLeft=0;
	}else if(eye.scrollLeft<=0){
		eye.scrollLeft=1320;
	}
	i=setTimeout("marqueeimgss()",100);
}
marqueeimgss();
scrol.children[0].onmouseover=function(){
	move=15;
}
scrol.children[1].onmouseout=function(){
	move=-15;
}



// 表单验证
				function checkform() {
					if (document.form1.username.value == "") {
						return false;
						alert("内容不能为空");
					} else {
						alert("提交成功，单击确定返回");
						return true;
					}
					if (document.form1.tel.value == "") {
						return false;
						alert("内容不能为空");
					} else {
						alert("提交成功，单击确定返回");
					}
					if (document.form1.email.value == "") {
						return false;
						alert("内容不能为空");
					} else {
						alert("提交成功，单击确定返回");
					}
					if (document.form1.address.value == "") {
						return false;
						alert("内容不能为空");
					} else {
						alert("提交成功，单击确定返回");
					}
					if (document.form1.yjjy.value == "") {
						return false;
						alert("内容不能为空");
					} else {
						alert("提交成功，单击确定返回");
					}
				}
