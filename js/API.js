//轮播图1
// 淡入淡出轮播方法
function lunBo1(index,img,li){
	for(var i=0;i<img.length;i++){
		if(img[i].className=='op'){
			img[i].className='';
			li[i].style.background='transparent';
			li[i].getElementsByTagName('span')[0].style.background='#fff';
			break;
		}
	}
	li[index].style.background='#D0C4AF';
	li[index].getElementsByTagName('span')[0].style.background='#a7936e';
	img[index].className='op';
}
//方法结束
// 底部小点点击方法(淡入淡出)
function xD(img,li,index){
	for(var j=0;j<img.length;j++){
		if(img[j].className=='op'){
			img[j].className='';
			li[j].style.background='transparent';
			li[j].getElementsByTagName('span')[0].style.background='#fff';
		}
	}
	li[index].style.background='#D0C4AF';
	li[index].getElementsByTagName('span')[0].style.background='#a7936e';
	img[index].className='op';
}
//轮播2(滑动);
// 滑动轮播方法
var animated=false;
function animate(offset,minL,maxL,box) {
	animated=true;
	var Left=parseInt(box.style.left)+offset;
	var speed=0;
	function go() {
		speed=(Left-parseInt(box.style.left))/20;
		if(speed<0){
			speed=Math.floor(speed);
		}else if(speed>0){
			speed=Math.ceil(speed);
		}
		if(parseInt(box.style.left)<Left||parseInt(box.style.left)>Left){
			box.style.left=parseInt(box.style.left)+speed+'px';
			setTimeout(go,10);
		}else{
			animated=false;
			if(Left< minL){
				Left=maxL;
			}else if(Left>maxL){
				Left=minL;
			}
			box.style.left=Left+'px';
		}
	}
	go();
}
// 获取offsetLeft和offsetTop的方法
var getOffsetLeft = function(obj){
	var tmp = obj.offsetLeft;
	var node= obj.offsetParent;
	while(node!= null){
		tmp += node.offsetLeft;
		node= node.offsetParent;
	}
	return tmp;
}
var getOffsetTop =  function(obj){
	var tmp = obj.offsetTop;
	var node= obj.offsetParent;
	while(node!= null){
		tmp += node.offsetTop;
		node= node.offsetParent;
	}
	return tmp;
}
// 方法结束