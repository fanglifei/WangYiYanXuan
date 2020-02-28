//顶部轮播调用
var img=document.getElementsByClassName('bd-item')[0].getElementsByTagName('img');
var li=document.getElementsByClassName('bd-item')[0].getElementsByTagName('li');
var l=document.getElementById('l');
var r=document.getElementById('r');
var item=document.getElementById('item');
var index=0;
r.onclick=function(){
	index++;
	if(index==img.length){
		index=0;
	}
	lunBo1(index,img,li);
}
l.onclick=function(){
	index--;
	if(index<0){
		index=img.length-1;
	}
	lunBo1(index,img,li);
}
//福利社调用轮播方法(淡入淡出)
var index1=0;
var indexCarousel=document.getElementsByClassName('m-indexCarousel')[0];
var img1=indexCarousel.getElementsByTagName('img');
var li1=indexCarousel.getElementsByTagName('li');
var l1=document.getElementById('Left');
var r1=document.getElementById('Right');
l1.onclick=function(){
	index1--;
	if(index1<0){
		index1=img1.length-1;
	}
	lunBo1(index1,img1,li1);
}
r1.onclick=function(){
	index1++;
	if(index1>=img1.length){
		index1=0;
	}
	lunBo1(index1,img1,li1);
}
// 顶部轮播图调用点击方法
function diao(li,img){
	for(var i=0; i<li.length;i++){
		li[i].index=i;
		li[i].onclick=function(){
			index=this.index;
			xD(img,li,index);
		}
	}
}
//顶部轮播图调用点击方法
diao(li,img);
//福利社调用点击方法
diao(li1,img1);
//顶部轮播图的自动轮播
var timer=null;
function go(){
	timer=setInterval(function(){
		r.onclick();
	},2000);
}
go();
item.onmouseover=function(){
	clearInterval(timer);
}
item.onmouseout=function(){
	go();
}
//福利社的自动轮播
function go1(){
	var timer1=setInterval(function(){
		r1.onclick();
	},2000);
	return timer1;
}
go1();
//新品首发滑动版方法调用
var box=document.getElementsByClassName('bd-box')[0];
var left=document.getElementById('left');
var right=document.getElementById('right');
var li2=document.getElementsByClassName('focus-bd')[0].getElementsByTagName('li');
left.onclick=function(){ 
	if(!animated){
		animate(1100,-3300,-1100,box);
	}
}
right.onclick=function(){
	if(!animated){
		animate(-1100,-3300,-1100,box);
	}
}
//居家生活调用
var box1=document.getElementsByClassName('slick-track')[0];
var left1=document.getElementById('prve');
var right1=document.getElementById('next');
// 绑定点击事件调用滑动轮播方法
left1.onclick=function(){
	if(!animated){
		animate(1090,-3270,-1090,box1);
	}
}
right1.onclick=function(){
	if(!animated){
		animate(-1090,-3270,-1090,box1);
	}
}
//服饰鞋包
var left2=document.getElementById('prve1');
var right2=document.getElementById('next1');
var box2=document.getElementsByClassName('slick-track')[1];
left2.onclick=function(){
	if(!animated){
		animate(1090,-3270,-1090,box2);
	}
}
right2.onclick=function(){
	if(!animated){
		animate(-1090,-3270,-1090,box2);
	}
}
//美食酒水
var left3=document.getElementById('prve2');
var right3=document.getElementById('next2');
var box3=document.getElementsByClassName('slick-track')[2];
left3.onclick=function(){
	if(!animated){
		animate(1090,-2180,-1090,box3);
	}
}
right3.onclick=function(){
	if(!animated){
		animate(-1090,-2180,-1090,box3);
	}
}
//个护清洁
var left4=document.getElementById('prve3');
var right4=document.getElementById('next3');
var box4=document.getElementsByClassName('slick-track')[3];
left4.onclick=function(){
	if(!animated){
		animate(1090,-2180,-1090,box4);
	}
}
right4.onclick=function(){
	if(!animated){
		animate(-1090,-2180,-1090,box4);
	}
}
//母婴亲子
var left5=document.getElementById('prve4');
var right5=document.getElementById('next4');
var box5=document.getElementsByClassName('slick-track')[4];
left5.onclick=function(){
	if(!animated){
		animate(1090,-2180,-1090,box5);
	}
}
right5.onclick=function(){
	if(!animated){
		animate(-1090,-2180,-1090,box5);
	}
}
//运动旅行
var left6=document.getElementById('prve5');
var right6=document.getElementById('next5');
var box6=document.getElementsByClassName('slick-track')[5];
left6.onclick=function(){
	if(!animated){
		animate(1090,-2180,-1090,box6);
	}
}
right6.onclick=function(){
	if(!animated){
		animate(-1090,-2180,-1090,box6);
	}
}
//数码家电
var left7=document.getElementById('prve6');
var right7=document.getElementById('next6');
var box7=document.getElementsByClassName('slick-track')[6];
left7.onclick=function(){
	if(!animated){
		animate(1090,-3270,-1090,box7);
	}
}
right7.onclick=function(){
	if(!animated){
		animate(-1090,-3270,-1090,box7);
	}
}
//全球特色
var left8=document.getElementById('prve7');
var right8=document.getElementById('next7');
var box8=document.getElementsByClassName('slick-track')[7];
left8.onclick=function(){
	if(!animated){
		animate(1090,-2180,-1090,box8);
	}
}
right8.onclick=function(){
	if(!animated){
		animate(-1090,-2180,-1090,box8);
	}
}
//大家都在说
var left9=document.getElementById('prve8');
var right9=document.getElementById('next8');
var box9=document.getElementsByClassName('slick-track')[8];
left9.onclick=function(){
	if(!animated){
		animate(365,-3285,-1095,box9);
	}
}
right9.onclick=function(){
	if(!animated){
		animate(-365,-3285,-365,box9);
	}
}
//tab切换栏
var tJ=document.getElementById('tui');
var rX=document.getElementById('rexiao');
var s1=document.getElementsByClassName('s1');
var showContainer=document.getElementsByClassName('showContainer');
tJ.onclick=function(){
	s1[0].className='s1 border-bottom';
	s1[1].className='s1';
	showContainer[0].style.display='block';
	showContainer[1].style.display='none';
}
rX.onclick=function(){
	s1[0].className='s1';
	s1[1].className='s1 border-bottom';
	showContainer[0].style.display='none';
	showContainer[1].style.display='block';
}

//抢购倒计时
var cd=document.getElementsByClassName('cd');
function gettime(){
	// 获取当前时间
	var time=new Date();
	var year=time.getFullYear();
	var month=time.getMonth()+1;
	var date=time.getDate();
	var H=time.getHours();
	var endh='18';//结束时间
	var enddate=H>=endh?date+1:date;0
	// 获取结束时间
	var endTime=year+'/'+month+'/'+enddate+' '+endh+':00:00';
	var endtime=new Date(endTime);
	var left=endtime.getTime()-time.getTime();
	var H= Math.floor(left/1000/60/60%24);
	var M= Math.floor(left/1000/60%60); 
	var S= Math.floor(left/1000%60);
	H<10?H='0'+H:'',
	M<10?M='0'+M:'',
	S<10?S='0'+S:''
	cd[0].innerHTML=H;
	cd[1].innerHTML=M;
	cd[2].innerHTML=S;
	
}
gettime();
var timer1=setInterval(function(){
	gettime();
},1000);
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
		ceBian.style.top='616px';
		topDh.className='daohang-top';
	}else{
		ceBian.style.top='10%';
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

