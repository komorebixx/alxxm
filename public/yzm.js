// 创建数组
var s=[];
for(var i=0;i<=9;i++){
    s.push(i);
}
// 大写字母
String.fromCharCode(65);
for(var i=65;i<=90;i++){
    s.push(String.fromCharCode(i));
}
for(var i=97;i<=122;i++){
    s.push(String.fromCharCode(i));
}
// 随机生成6个随机数
// 创建新数组，保存随机数
// console.log(s);
var code;
function yzm1(){
    code=[];
    var length=6;
    var text=document.getElementById("code");
    // console.log(text);
    for(var i=0;i<length;i++){
        code+=s[parseInt(Math.random()*62)];
        // code=code.toLowerCase();
    }
    text.innerHTML=code;
};
function show_phone(){
    phone_msg.innerHTML="";
}
// 非空验证
 function check_phone(){
    //  var phone_msg=document.getElementById("phone_msg");
     var $phone=phone.value;
     if(!$phone){
        //  phone_msg.style.display="block";
        phone_msg.innerHTML="请输入手机号码";
     }else if($phone.length<11 || $phone.length>11){
        phone_msg.innerHTML="请输入正确的手机号码";
     }else{
        phone_msg.innerHTML="";
}
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var r=xhr.responseText;
            if(r==1){
                phone_msg.innerHTML="手机号已注册";
            };
        }
    }
    xhr.open("get",`/qy/copy?phone=${$phone}`,true);
    xhr.send();
 }
 function show_yzm(){
     yzm_msg.innerHTML="请输入验证码";
 }
 function check_yzm(){
     var $yzm=yzm.value;
     console.log($yzm);
     console.log(code.toLowerCase());
     if(!$yzm){
        yzm_msg.innerHTML="请输入验证码";
     }else if($yzm.toLowerCase()==code.toLowerCase()){
        yzm_msg.innerHTML="";
     }else{
        yzm_msg.innerHTML="验证码输入错误";
     }
 }
function show_uname(){
    uname_msg.innerHTML="";
}
function check_uname(){
    //  var phone_msg=document.getElementById("phone_msg");
     var $uname=uname.value;
     if(!$uname){
        uname_msg.innerHTML="请输入用户名";
     }else if($uname.length<6 || $uname.length>10){
        uname_msg.innerHTML="请输入正确的用户名";
     }else{
        uname_msg.innerHTML="";
    }
     var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4 && xhr.status==200){
                var r=xhr.responseText;
                if(r==1){
                    uname_msg.innerHTML="用户名已被注册";
                };
            }
        }
        xhr.open("get",`/qy/zhuce?name=${$uname}`,true);
        xhr.send();
}
function show_upwd(){
    upwd_msg.innerHTML="";
}
function check_upwd(){
    var $upwd=upwd.value;
    if(!$upwd){
       upwd_msg.innerHTML="请输入密码";
    }else if($upwd.length<=6){
       upwd_msg.innerHTML="安全度低";
    }else if($upwd.length>6&&$upwd.length<=9){
       upwd_msg.innerHTML="安全度中等";
    }else{
        upwd_msg.innerHTML="";
    }
}
function show_upwd1(){
    upwd1_msg.innerHTML="";
}
function check_upwd1(){
    var $upwd=upwd.value;
    var $upwd1=upwd1.value;
    if(!$upwd1){
        upwd1_msg.innerHTML="重新输入密码";
    }else if($upwd1==$upwd){
        upwd1_msg.innerHTML="";
    }else{
        upwd1_msg.innerHTML="密码输入错误";
        upwd.value="";
        upwd1.value="";
    }
}
function zhuce(){
    var $phone=phone.value;
    var $uname=uname.value;
    var $upwd=upwd.value;
    var $upwd1=upwd1.value;
    if(!$phone){phone_msg.innerHTML="手机号码不能为空";return;}
    if(!$uname){uname_msg.innerHTML="用户名不能为空";return;}
    if(!$upwd){upwd_msg.innerHTML="密码不能为空";return;}
    if(!$upwd1){upwd_msg1.innerHTML="请重复输入密码";return;}
    
    // 1.创建异步对象
    var xhr=new XMLHttpRequest();
    // 4.创建监听，接受响应
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var r=xhr.responseText;
            if(r==1){
                alert('注册成功');
                location.href="http://127.0.0.1:8080/index.html";
            }else{
                alert("注册失败");
            }
        }
    }
    //2.创建请求，打开连接
    xhr.open("post","/qy/zhuce",true);
    //3.创建请求
    var formdata=`phone=${$phone}&name=${$uname}&upwd=${$upwd}`
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(formdata);
}
// function zhuce1(){
//     var $phone=phone.value;
//     // var $uname=uname.value;
//     var xhr=new XMLHttpRequest();
//     xhr.onreadystatechange=function(){
//         if(xhr.readyState==4 && xhr.status==200){
//             var r=xhr.responseText;
//             if(r==1){
//                 upwd1_msg.innerHTML="手机号已注册";
//             }else{
//                 upwd1_msg.innerHTML="";
//             }
//         }
//     }
//     xhr.open("get",`/qy/copy?phone=${$phone}`,true);
//     xhr.send();
// }
