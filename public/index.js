// 找到出发事件的元素
var diva7 = document.getElementsByClassName("a7");
var diva8 = document.getElementsByClassName("a8");

// a8下的input框
var inse = diva8[0].firstElementChild;
var icon = document.querySelector('.a8>span');

// 此函数控制输入框出现
function appear() {
    inse.style.width = "177px";
    icon.style.color = "rgba(2,219,148,1)";
}
// 此函数控制输入框消失
function disappear() {
    inse.style.width = "0px";
    icon.style.color = "rgba(255,255,255,1)";
}
diva8[0].addEventListener("mouseenter", appear);
// 通过addeventlistener来解决获取焦点后mouseleave的监听问题
diva8[0].addEventListener("mouseleave", disappear);
// input获取焦点，输入框出现，移除mouseleave监听，即鼠标移除事件不在控制输入框
inse.onfocus = function () {
    appear();
    diva8[0].removeEventListener("mouseleave", disappear);
}
// input失去焦点，输入框消失，添加mouseleave监听，继续监听鼠标移除事件
inse.onblur = function () {
    disappear();
    diva8[0].addEventListener("mouseleave", disappear);
}

// 轮播图效果
var i=0;//现在正在显示第几张图片，从0开始
var liwidth=1920;//每个li的固定宽度
var duration=1000;//每次轮播动画持续的时间
var licount=4;//li 的总个数
// 要移动的ul
var ulImgs=document.getElementById("ul-imgs");
// 从当前位置移动到任意一个范围内的位置
function moverTo(to){
    // 如果用户没有传入要调到第几张图，就默认跳到当前图的下一张
    if(to==undefined){
        to=i+1;
    }
    if(i==0){//如果滚动从头开始，在重新加上transition
        if(to>i){//如果要像看当前位置右边的图片，是不会出问题的
            ulImgs.className="transition";
        }else{//只要i=0在开头，且还要看左边的图片时，才会出问题
            // 为了避免用户再次看到偷梁换柱的效果，先把transition class去掉
            ulImgs.className="";
            // 将ulImgs拉到最左侧
            ulImgs.style.marginLeft=-liwidth*licount+"px";
            // 定时器是为了将偷梁换柱操作和加回transition属性的操作强行隔离开
            setTimeout(function(){
                moverTo(licount-1);
            },100);
            return;
        }
    }
    i=to;//先将表示第几张图片的变量i变为目标位置
    // 在用i计算ulimgs的marginleft距离
    ulImgs.style.marginLeft=-i*liwidth+"px";
    if(i==licount){
        i=0;
        // 当transition动画播放完之后，才
        setTimeout(function(){
            ulImgs.className="";//清掉transition属性
            ulImgs.style.marginLeft=0;//将ulImgs拉回0位置
        },duration);
    }
}

// 轮播左右按钮点击轮播播放
var lastbtn=document.getElementById("lastbtn");
console.log(lastbtn);
var rightbtn=document.getElementById("rightbtn");
console.log(rightbtn);
// 用开关，控制，上次动画没有播放完，下次动画不能开始！
var canClick=true;
rightbtn.onclick=function(){
    // 调用两个按钮公共的移动方法，参数1表示移动到i+1的位置，相当于又移一个
    move(1);
}
// 两个按钮公用的移动函数，n传入1时，移动到i+1位置，左移。n传入-1时，移动到i-1位置，右移
function move(n){
    if(canClick){//只有可以单击时
        moverTo(i+n);//才调用真正移动ul的方法
        canClick=false;//马上把开关关上，禁止再次点击
        // 只有本地transition动画播放完，才能自动打开开关，点击按钮才有反应
        setTimeout(function(){
            canClick=true;
        },duration+1000);
    }
}
lastbtn.onclick=function(){
    move(-1);
}

// 自动轮播
// var interval=5000;//每次轮播之间间隔5秒
var timer=setInterval(function(){
    moverTo()
},5000);
// 鼠标移入 轮播停止，移出，轮播播放
rightbtn.onmouseover=function(){
    clearInterval(timer);
}
rightbtn.onmouseout=function(){
    timer=setInterval(function(){
        moverTo()
    },5000);
}
lastbtn.onmouseover=function(){
    clearInterval(timer);
}
lastbtn.onmouseout=function(){
    timer=setInterval(function(){
        moverTo()
    },5000);
}

// nav 下的input隐藏显示效果
// 1.查找触发时间的元素
var nav=document.getElementsByClassName("nav");
// console.log(nav[0]);
var nav5=nav[0].firstElementChild;
// console.log(nav5);
var nav1=nav5.children[0];
var nav2=nav5.children[1];
var nav3=nav5.children[2];
// 此函数控制字体样式变600
function appear1(){
    this.style.fontWeight="600";
}
function disappear1(){
    this.style.fontWeight="";
}
nav1.addEventListener("mouseenter",appear1);
nav1.addEventListener("mouseleave",disappear1);
nav2.addEventListener("mouseenter",appear1);
nav2.addEventListener("mouseleave",disappear1);
nav3.addEventListener("mouseenter",appear1);
nav3.addEventListener("mouseleave",disappear1);
// console.log(nav1,nav2,nav3);
var nav4=nav5.nextElementSibling;
var inp=document.getElementsByClassName("inp")[0];
    // console.log(inp);
inp.style.display="none";
var inps=document.getElementsByClassName("inps")[0];
inps.style.display="none";
// 2.绑定事件处理函数
//这里把nav1,nav2,nav3的样式做成了类“on”，定义于：index.css 339行（7月15日）；
// 这里可以优化，可以将三个函数简化成一个，结合昨天学的冒泡和前天学的自定义属性，自己想想。
nav1.onclick=function(){
    inps.style.display="none";
    inp.style.display="none";
    nav4.style.display="block";
    // classList.add 添加新的类名，如已经存在，取消添加
    this.classList.add("on");
    // classList.remove 移除已经存在的类名
    nav2.classList.remove("on");
    nav3.classList.remove("on");
}
nav2.onclick=function(){
    // 3.查找要修改的元素
    nav4.style.display="none";
    inps.style.display="none";
    inp.style.display="block";
    this.classList.add("on");
    nav1.classList.remove("on");
    nav3.classList.remove("on");
}
nav3.onclick=function(){
    nav4.style.display="none";
    inp.style.display="none";
    inps.style.display="block";
    this.classList.add("on");
    nav1.classList.remove("on");
    nav2.classList.remove("on");
}
// 根据页面滚动位置显示浮动框
window.onscroll=function(){
    // 导航栏
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    // 右边回到顶部
    var scrollTop1=document.documentElement.scrollTop||document.body.scrollTop;
    // 泡泡显示
    var scrollTop2=document.documentElement.scrollTop||document.body.scrollTop;
    // console.log(scrollTop2);
    var dt=document.getElementsByClassName("dt")[0];
    // console.log(scrollTop);
    var fudong=document.getElementsByClassName("fudong")[0];
    // 查找事件id
    var papa=document.getElementById("papa");
    var biu=document.getElementById("biu");
    // console.log(papa);
    // 希望当滚动距离>=1000时,让fudong显示
    if(scrollTop>=1000){
        fudong.style.display="block";
    }else{
        fudong.style.display="none";
    }
    if(scrollTop1>=700){
        dt.style.display="block";
    }else{
        dt.style.display="none";
    }
    // 泡泡显示
    if(scrollTop2>=2680){
        setTimeout(function(){
            papa.style.display="none";
            biu.style.display="";
            biu.style.animation="mymove 2s";
        },1000);
    }
}
// 浮动框缓慢返回顶部
function top1(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}
// 找到触发事件的元素
var dt=document.getElementsByClassName("dt")[0];
var sma=dt.children[1];
// console.log(sma);
var dtewm=sma.parentElement.previousElementSibling;
console.log(dtewm);
// 创建监听事件
function block(){
    dtewm.style.display="block";
}
function none(){
    dtewm.style.display="none";
}
sma.addEventListener("mouseenter",block);
sma.addEventListener("mouseleave",none);
// 返回顶部动画
var dt=document.getElementsByClassName("dt")[0];
var as=dt.querySelectorAll(".dt>a");
console.log(as);
var spans=dt.querySelectorAll(".dt>a>span:first-child");
console.log(spans[0]);
