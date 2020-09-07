// 找到frame下的input框
var frameinp = document.getElementsByClassName("frame-inp")[0];
console.log(frameinp);
var input = frameinp.children[0];
var frame = document.getElementsByClassName("frame")[0];
var span = frame.children[1];
console.log(span);
// 此函数控制输入框出现
function appear() {
    input.style.width = "17.2rem";
    input.style.backgroundColor = "#fff";
    span.style.color = "#10b041";
}
// 此函数控制输入框消失
function disappear() {
    input.style.width = "0rem";
    input.style.backgroundColor = "transparent";
    span.style.color = "";
}
// 通过监听事件，来解决 获取交点后鼠标移入问题
frame.addEventListener("mouseenter", appear);
frame.addEventListener("mouseleave", disappear);
// input获取焦点，输入框出现，移除监听效果
input.onfocus = function () {
    appear();
    frame.removeEventListener("mouseleave", disappear);
};
input.onblur = function () {
    disappear();
    frame.addEventListener("mouseleave", disappear);
}

// 鼠标点击轮播图
(function(){
var i = 0;
var liwidth = 52;
var duration = 300;
var licount = 9;
var banner = document.getElementsByClassName("banner")[0];
var ulimgs = banner.children[0];
console.log(ulimgs);
var ulminimgs = document.getElementsByClassName("min_imgs")[0];
var lis = ulminimgs.children;
function moveTo(to) {
    if (to == undefined) {
        to = i + 1;
    }
    if (i == 0) {
        if (to > i) {
            ulimgs.className = "transition imgs";
        } else {
            ulimgs.className = "imgs";
            ulimgs.style.marginLeft = -liwidth * licount + "rem";
            setTimeout(function () {
                moveTo(licount - 1);
            }, 100);
            return;
        }
    }
    i = to;
    ulimgs.style.marginLeft = -i * liwidth + "rem";

    for (var li of lis) {
        li.className = "";
    }
    if (i == licount) {
        i = 0;
        setTimeout(function () {
            ulimgs.className = "imgs";
            ulimgs.style.marginLeft = 0;
        }, duration);
    }
    lis[i].className = "active";
}
var left = document.getElementsByClassName("left")[0];
var right = document.getElementsByClassName("right")[0];
var canclick = true;
right.onclick = function () {
    move(1);
}
function move(n) {
    if (canclick) {
        moveTo(i + n);
        canclick = false;
        setTimeout(function () {
            canclick = true;
        }, duration + 100);
    }
}
left.onclick = function () {
    move(-1);
}
var ulminimgs = document.getElementsByClassName("min_imgs")[0];
ulminimgs.onclick = function (e) {
    var index = parseInt(e.target.src.slice(-5, -4))-1;
    if (e.target.className != "active") {
        moveTo(index);
    }
}
}());
// ys里的点赞功能
var span1=document.querySelectorAll(".icon-aixin");
var span2=document.querySelectorAll(".icon-xinaixin");
// 点击爱心
for(var span of span1){
    span.onclick=function(){
        this.style.display="none";
        this.nextElementSibling.style.display="block";
        var span3=this.nextElementSibling.nextElementSibling;
        span3.innerHTML=parseInt(span3.innerHTML)+1;
    }
}
// 点击爱心2
for(var span of span2){
    span.onclick=function(){
        this.style.display="none";
        this.previousElementSibling.style.display="block";
        var span3=this.nextElementSibling;
        span3.innerHTML=parseInt(span3.innerHTML)-1;
    }
}
// 查看更多内容显示
var more=document.getElementsByClassName("look_more")[0];
var popup=document.getElementsByClassName("popup")[0];
more.onclick=function(){
    popup.style.display="block";
}
var confirm=document.getElementsByClassName("confirm")[0];
confirm.onclick=function(){
    popup.style.display="none";
}
var footer=document.getElementsByClassName("footer")[0];
var timer=setTimeout(function(){
    footer.style.height="7rem";
},11000);
var icon=footer.children[1];
console.log(icon);
icon.onclick=function(){
    footer.style.display="none";
}
// 点击显示溢出隐藏
var click=document.getElementsByClassName("click")[0];
// console.log(click);
var biu=document.getElementsByClassName("biu_artical")[0];
console.log(biu);
click.onclick=function(){
    biu.style.height="33.6rem";
    this.style.display="none";
}
// 鼠标滚轮 
window.onscroll=function(){
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    // console.log(scrollTop);
    var share=document.getElementsByClassName("share")[0];
    if(scrollTop>=100){
        share.classList.remove("on");
    }else{
        share.classList.add("on");
    }
}
// 评论弹框自动轮播
var tip=document.getElementsByClassName("tip")[0];
var tip1=document.getElementsByClassName("tip1")[0];
var tip2=document.getElementsByClassName("tip2")[0];
var tip3=document.getElementsByClassName("tip3")[0];
var tipp1=tip1.querySelector("div:nth-child(3)>span");
var tipp2=tip2.querySelector("div:nth-child(3)>span");
var tipp3=tip3.querySelector("div:nth-child(3)>span");

function time(){
setTimeout(function(){
    tip1.style.animation="tk 1s" ,
    tip1.classList.add("blck")
},10000);
setTimeout(function(){
    tip2.style.animation="tk 1s",
    tip2.classList.add("blck2")
},5000);
setTimeout(function(){
    tip3.style.animation="tk 1s",
    tip3.classList.add("blck3")
},1000);
};
function times(){
    setTimeout(function(){
        tip1.style.animation="tkxs 1s";
        tip1.classList.remove("blck")
    },20000);
    setTimeout(function(){
        tip2.style.animation="tkxs 1s";
        tip2.classList.remove("blck2");
    },25000);
    setTimeout(function(){ 
        tip3.style.animation="tkxs 1s";
        tip3.classList.remove("blck3")
    },30000);
};
var timeer=setInterval(function(){
    time();
    times()
},45000);
tipp1.onclick=function(){
    tip1.classList.remove("blck");
    tip1.style.animation="tkxs 1s";
}
tipp2.onclick=function(){
    tip2.classList.remove("blck2");
    tip2.style.animation="tkxs 1s";
}
tipp3.onclick=function(){
    tip3.classList.remove("blck3");
    tip3.style.animation="tkxs 1s";
}
// 播音器点击播放
var yuys=document.getElementsByClassName("yuys")[0];
var ds1=yuys.children[0];
var ds2=yuys.children[1];
var ds3=yuys.children[2];
yuys.onclick=function(){
    this.classList.add("ds");
    ds1.classList.add("ds1");
    ds2.classList.add("ds2");
    ds3.classList.add("ds3");
    ds3.style.animation="ds3 26s linear"
    var i=26;
    setInterval(function(){
        i--;
        if(i<0){
            yuys.classList.remove("ds");
            ds1.classList.remove("ds1");
            ds2.classList.remove("ds2");
            ds3.classList.remove("ds3");
            ds2.innerHTML=`26"`;
            return
        }else{
            ds2.innerHTML=`0:${i<10?"0"+i:i}`;
        }
    },1000);
}
var bar=document.getElementsByClassName("bar-bottom")[0];
bar.onclick=function(){
    popup.style.display="block";
}

// 3d轮播图
// 小立方体的个数，一共要多少li 切割的效果
var count=40;
// 每个小立方体的宽度，li的宽度不定死，个数除以ul的宽度，就是分布的每一个li的宽度
var width=100/count;
// 找到ul元素
var ul=document.getElementsByClassName("lbt-ul")[0];
// 设置一个层级为0的变量
var z=0;
// 循环生成40个li
for (var i=0;i<count;i++){
    // 如果li循环的个数大于总个数的一半，则层级自减，3d是倾斜的效果，所以数量一半后面的层级要降低
    if(i>count/2){
        z--;
    }
    // 循环页面上的ul下的li 拼接样式  ${width}是每一个li的宽度， ${z}自减之后的层级
    ul.innerHTML+=`<li style="width:${width}rem;z-index:${z}">
    <span style="background-position:-${width*i}rem;"></span>
    <span style="background-position:-${width*i}rem;"></span>
    <span style="background-position:-${width*i}rem;"></span>
    <span style="background-position:-${width*i}rem;"></span>
    </li>`
}
// 点击按钮切换轮播图
// 1.设一个变量i为0
var i=0;
// 9.设置一个变量为true 判断多次点击箭头跳往下一张样式是否冲突的值
var isend=true;
// 2.找到右箭头
var right1=document.getElementsByClassName("right1")[0];
// 3.绑定右箭头事件
right1.onclick=function(){
    // 10.如果值不等于true 则返回 ，不执行点击一张功能，
    if(!isend){
        return;
    }; 
    // 11.把变量值赋值为false 在执行完一次动画效果后 不在继续执行下一次动画效果。
    // 何时改为true， 继续执行动画效果，当li的最后一个过渡效果结束后，才开始新的下一张动画效果
    isend=false;
    // 4.点击右箭头 i自增
    i++;
    // 5.3d是通过旋转来跳转下一张图片 设置变量 图片是通过x轴逆时针旋转90度 所以是负的90度，乘以i
    var rot=-i*90;
    // 6.所有ul下的li
    var li=ul.children;
    // 7.循环li 
    for(var j=0;j<count;j++){
        // 8.这也是修改层级问题的 同上
        if(j>count/2){
            z--;
        }
        // 每个li的下标样式 拼接上 旋转的角度 ，层级 ，transition-delay属性指定何时将开始切换效果,因为有40个li,如果过度属性都一样，就达不到想一个个li切换的效果，所以要给每个li都添加何时开始的切换效果
        li[j].style=`transform:rotatex(${rot}deg);z-index:${z};transition-delay:${j*0.05}s`;
    }
}
// 同右箭头 i-- 反方向旋转 
var left1=document.getElementsByClassName("left1")[0];
left1.onclick=function(){
    if(!isend){
        return;
    }; 
    isend=false;
    i--;
    var rot=-i*90;
    var li=ul.children;
    for(var j=0;j<count;j++){
        if(j>count/2){
            z--;
        }
        li[j].style=`transform:rotatex(${rot}deg);z-index:${z};transition-delay:${j*0.05}s`;
    } 
}
// 12.找到ul下的最后一个li
var li=ul.lastElementChild;
// 13.给最后一个绑定事件 transitionend事件会在 transition 结束后触发. 当transition完成后移除transition属性，
li.ontransitionend=function(){
    // 14.当最后一个li的过度效果结束后，触发函数 ，将isend的值重新赋值为true，开始执行下一项动画
    isend=true;
}
// 14.周期定时器
setInterval(function(){
    right1.click();
},4000);