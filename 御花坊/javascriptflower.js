
/************************************���ֵ�Ƥ����************************************/
var n=1;
var count=0;
function runPikaqiu(){
	var PKQ=document.getElementById("pikaqiu");
	PKQ.src="resource/"+((n++%4)+1)+".png";
	count++;
	  if(count==4){
		  clearInterval(myPKQ);/*�����myPKQ�¼�������õĶ�ʱ��*/
		  setTimeout("rerunPikaqiu()",1000);/*1�����z����rereunPikaqiu()����*/
		  count=0;
	  }
  }
  var myPKQ=setInterval("runPikaqiu()",600);/*ÿ��900�������һ��runPikaqiu()����Ƥ����һ��*/
  function rerunPikaqiu(){
	  myPKQ=setInterval("runPikaqiu()",600);/*Ƥ�����ֻ�������¶�*/
 }

/********************************************�ϲ�С�˵���ʾ************************************/
function show(xid){
	//alert(yid);
	//document.getElementById(yid).style.bgColor="#4088D0";
	document.getElementById(xid).style.display ="block";/*idΪxid��Ԫ���Կ���ʾ*/
	}
/**************************************�ϲ���С�˵�����***************************************/
function latent(xid){
	//alert(xid);
	//obj.style.display ="none";
	document.getElementById(xid).style.display ="none";/*idΪxid��Ԫ������*/
	}
/********************************************������¼����************************************/	
function myLogon(){
   myUserlogon = document.getElementById("UserlogonDiv"); 
   myUserlogon.style.display = "block";
   myUserlogon.style.position = "absolute";
   myUserlogon.style.top = "30%";
   myUserlogon.style.left = "50%";
   myUserlogon.style.marginTop = "-75px";
   myUserlogon.style.marginLeft = "-150px";
   
   mybg = document.createElement("div");//����һ��divԪ��
   mybg.setAttribute("id", "mybg");//Ϊ������div����idֵΪmybg
   mybg.style.background = "#000000";
   mybg.style.width = "100%";
   mybg.style.height = "100%";
   mybg.style.position = "absolute";
   mybg.style.top = "0";
   mybg.style.left = "0";
   mybg.style.zIndex = "500";//Ϊ������div����Ԫ�صĶѵ�˳��
   mybg.style.opacity = "0.3";//Ϊ������divz����͸����
   mybg.style.filter = "Alpha(opacity=30)";//IE��������ݵ�͸����
   document.body.appendChild(mybg);//��������div�����body��
   //document.body.style.overflow = "hidden";//body�������
}
/********************************************����ע�����************************************/
function myLogon1(){
   myUserlogon = document.getElementById("UserlogonDiv1"); 
   myUserlogon.style.display = "block";
   myUserlogon.style.position = "absolute";
   myUserlogon.style.top = "30%";
   myUserlogon.style.left = "50%";
   myUserlogon.style.marginTop = "-75px";
   myUserlogon.style.marginLeft = "-150px";
   
   mybg = document.createElement("div");//����һ��divԪ��
   mybg.setAttribute("id", "mybg");//Ϊ������div����idֵΪmybg
   mybg.style.background = "#000000";
   mybg.style.width = "100%";
   mybg.style.height = "100%";
   mybg.style.position = "absolute";
   mybg.style.top = "0";
   mybg.style.left = "0";
   mybg.style.zIndex = "500";//Ϊ������div����Ԫ�صĶѵ�˳��
   mybg.style.opacity = "0.4";//Ϊ������div����͸����
   mybg.style.filter = "Alpha(opacity=30)";//IE��������ݵ�͸����
   document.body.appendChild(mybg);//��������div�����body��
}
/********************************************�ر�ע����¼����************************************/
function myClose(){
        myUserlogon.style.display = "none";
        mybg.style.display = "none";
  }
 /********************************************�ص�����************************************/
function BackTop() { 
document.body.scrollTop=0; 
}
/********************************************�´��ڴ򿪱�ҳ************************************/
function openself(){
	open("������.html","-blank");
	}