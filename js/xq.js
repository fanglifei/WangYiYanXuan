var smallDiv=document.getElementsByClassName('smallPic')[0];
var float=document.getElementsByClassName('float_layer')[0];
var bigDiv=document.getElementsByClassName('big_pic')[0];
var bigImg=document.getElementById('img');
// 调用封装方法
var smallDivL=getOffsetLeft(smallDiv);
var smallDivT=getOffsetTop(smallDiv);
//放大镜
smallDiv.onmouseover=function () {
	float.style.display='block';
	bigDiv.style.display='block';
}
smallDiv.onmouseout=function () {
	float.style.display='none';
	bigDiv.style.display='none';
}
smallDiv.onmousemove=function (ev) {
	var ev=ev||window.event;
	var L= ev.pageX-smallDivL-float.offsetWidth/2;
	var T=ev.pageY-smallDivT-float.offsetHeight/2;
	var maxL=smallDiv.offsetWidth-float.offsetWidth;
	var maxT=smallDiv.offsetHeight-float.offsetHeight;
	if(L<=0){
		L=0;
	}else if(L>maxL){
		L=maxL;
	}
	if(T<=0){
		T=0;
	}else if(T>=maxT){
		T=maxT;
	}
	float.style.left=L+'px';
	float.style.top=T+'px';
	pre=L/maxL;
	pre1=T/maxT;
	bigImg.style.left=(-pre*(bigImg.offsetWidth-bigDiv.offsetWidth))+'px';
	bigImg.style.top=(-pre1*(bigImg.offsetHeight-bigDiv.offsetHeight))+'px';
}
//切换图片
var thumbImg=document.getElementsByClassName('thumbImg')[0];
var li=document.getElementsByClassName('li1');
var samllimg=['img3/5.png','img3/1.jpg','img3/5.jpg','img3/7.jpg','img3/9.png'];
var bigimg=['img3/10.png','img3/11.png','img3/12.png','img3/13.png','img3/14.png'];
for(var i=0;i<li.length;i++){
	li[i].index=i;
	li[i].onclick=function(){
		for(var j=0; j<li.length; j++){
			if(li[j].className=='z-active li1'){
				li[j].className='li1';
				break;
			}
		}
		this.className='z-active li1';
		console.log(this.index);
		thumbImg.src=samllimg[this.index];
		bigImg.src=bigimg[this.index];
	}
}
// 下拉地址
var province=document.getElementById("province");
var city=document.getElementById("city");
var provinceArr=["请选择","湖南省","海南省","山东省"];
var cityArr=new Array();
	cityArr[0]=["请选择"];
	cityArr[1]=["长沙市","岳阳市","娄底市","株洲市","益阳市"];
	cityArr[2]=["海口市","文昌市","三亚市"];
	cityArr[3]=["济南市","青岛市","烟台市"];

for(var i=0;i<provinceArr.length;i++){
	var option=document.createElement("option");
	option.innerHTML=provinceArr[i];
	province.appendChild(option);
}
province.onchange=function(){
	city.options.length=0;
	var index=this.selectedIndex;
	for(var i=0;i<cityArr[index].length;i++){
		var Coption=document.createElement("option");
		Coption.innerHTML=cityArr[index][i];
		city.appendChild(Coption);
	}
}
//规格
var li1=document.getElementsByClassName('tab-con');
for(var j=0; j<li1.length; j++){
	li1[j].index=j;
	li1[j].onclick=function(){
		for(var k=0; k<li1.length; k++){
			li1[k].style.border='2px solid transparent';
		}
		this.style.border='2px solid #b4a078';
	}
}
//购买数量
var jia=document.getElementById('jia');
var jian=document.getElementById('jian');
var input=document.getElementById('input');
function num(element){
	if(element==jian&&input.value==1){
		return;
	}
	if(element==jian){
		input.value--;
	}else{
		input.value++;
	}
}
input.onblur=function(){
	if(input.value<1){
		input.value=1;
	}
}
jian.onclick=function(){
	if(input.value>1){
		jian.style.cursor='pointer';
	}
	num(this);
	if(input.value<=1){
		jian.style.cursor='not-allowed';
		return;
	}
}
jia.onclick=function(){
	num(this);
	if(input.value>1){
		jian.style.cursor='pointer';
	}else{
		jian.style.cursor='not-allowed';
	}
}
//调用方法完成轮播
var left=document.getElementById('prve9');
var right=document.getElementById('next9');
var box=document.getElementsByClassName('slick-track')[0];
left.onclick=function(){
	if(!animated){
		animate(1100,-2200,-1100,box);
	}
}
right.onclick=function(){
	if(!animated){
		animate(-1100,-2200,-1100,box);
	}
}
//tab切换栏
var detailNavTab=document.getElementById('detailNavTab');
var item=detailNavTab.getElementsByClassName('innerWrap')[0].getElementsByClassName('item');
var tabContent=detailNavTab.getElementsByClassName('tabContent');
console.log(tabContent);
for(var k=0;k<item.length;k++){
	item[k].index=k;
	item[k].onclick=function(){
		for(var i=0;i<item.length;i++){
			item[i].className='item';
			console.log(i);
			tabContent[i].style.display='none';
		}
		this.className='item active';
		tabContent[this.index].style.display='block';
	}
}