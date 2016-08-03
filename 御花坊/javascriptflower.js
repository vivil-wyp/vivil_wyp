
/************************************欢乐的皮卡丘************************************/
var n=1;
var count=0;
function runPikaqiu(){
	var PKQ=document.getElementById("pikaqiu");
	PKQ.src="resource/"+((n++%4)+1)+".png";
	count++;
	  if(count==4){
		  clearInterval(myPKQ);/*清除对myPKQ事件句柄设置的定时器*/
		  setTimeout("rerunPikaqiu()",1000);/*1秒后再z调用rereunPikaqiu()方法*/
		  count=0;
	  }
  }
  var myPKQ=setInterval("runPikaqiu()",600);/*每隔900毫秒调用一次runPikaqiu()方法皮卡丘动一下*/
  function rerunPikaqiu(){
	  myPKQ=setInterval("runPikaqiu()",600);/*皮卡丘又会继续重新动*/
 }

/********************************************上部小菜单显示************************************/
function show(xid){
	//alert(yid);
	//document.getElementById(yid).style.bgColor="#4088D0";
	document.getElementById(xid).style.display ="block";/*id为xid的元素以块显示*/
	}
/**************************************上部侧小菜单隐藏***************************************/
function latent(xid){
	//alert(xid);
	//obj.style.display ="none";
	document.getElementById(xid).style.display ="none";/*id为xid的元素隐藏*/
	}
/********************************************弹出登录界面************************************/	
function myLogon(){
   myUserlogon = document.getElementById("UserlogonDiv"); 
   myUserlogon.style.display = "block";
   myUserlogon.style.position = "absolute";
   myUserlogon.style.top = "30%";
   myUserlogon.style.left = "50%";
   myUserlogon.style.marginTop = "-75px";
   myUserlogon.style.marginLeft = "-150px";
   
   mybg = document.createElement("div");//创建一个div元素
   mybg.setAttribute("id", "mybg");//为创建的div设置id值为mybg
   mybg.style.background = "#000000";
   mybg.style.width = "100%";
   mybg.style.height = "100%";
   mybg.style.position = "absolute";
   mybg.style.top = "0";
   mybg.style.left = "0";
   mybg.style.zIndex = "500";//为创建的div设置元素的堆叠顺序
   mybg.style.opacity = "0.3";//为创建的divz设置透明度
   mybg.style.filter = "Alpha(opacity=30)";//IE浏览器兼容的透明度
   document.body.appendChild(mybg);//将创建的div添加在body中
   //document.body.style.overflow = "hidden";//body隐藏溢出
}
/********************************************弹出注册界面************************************/
function myLogon1(){
   myUserlogon = document.getElementById("UserlogonDiv1"); 
   myUserlogon.style.display = "block";
   myUserlogon.style.position = "absolute";
   myUserlogon.style.top = "30%";
   myUserlogon.style.left = "50%";
   myUserlogon.style.marginTop = "-75px";
   myUserlogon.style.marginLeft = "-150px";
   
   mybg = document.createElement("div");//创建一个div元素
   mybg.setAttribute("id", "mybg");//为创建的div设置id值为mybg
   mybg.style.background = "#000000";
   mybg.style.width = "100%";
   mybg.style.height = "100%";
   mybg.style.position = "absolute";
   mybg.style.top = "0";
   mybg.style.left = "0";
   mybg.style.zIndex = "500";//为创建的div设置元素的堆叠顺序
   mybg.style.opacity = "0.4";//为创建的div设置透明度
   mybg.style.filter = "Alpha(opacity=30)";//IE浏览器兼容的透明度
   document.body.appendChild(mybg);//将创建的div添加在body中
}
/********************************************关闭注册或登录界面************************************/
function myClose(){
        myUserlogon.style.display = "none";
        mybg.style.display = "none";
  }
 /********************************************回到顶部************************************/
function BackTop() { 
document.body.scrollTop=0; 
}
/********************************************新窗口打开本页************************************/
function openself(){
	open("御花坊.html","-blank");
	}