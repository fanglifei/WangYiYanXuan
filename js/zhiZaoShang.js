//返回顶部方法
// 获取滚动条到top距离
var gotop=document.getElementById('goTop');
var ceBian=document.getElementsByClassName('cebian')[0];
var topDh=document.getElementById('display-top');
window.onscroll=function(){
	function scroll() {
		if (window.pageYOffset != null){
			return window.pageYOffset;  
		}else if (document.compatMode == 'CSS1Compat'){
			return document.documentElement.scrollTop;
		}
		return document.body.scrollTop; 
	}
	if(scroll()<616){
		topDh.className='daohang-top';
	}else{
		topDh.className='daohang-top active1';
	}
	gotop.onclick=function(){
		var top=Math.floor(scroll()-scroll()*0.1);
		document.documentElement.scrollTop=top;
		if(top>0){
			var timer=setTimeout(gotop.onclick,10);
		}else{
			document.documentElement.scrollTop=0;
			clearTimeout(timer);
			return;
		}	
	}
}