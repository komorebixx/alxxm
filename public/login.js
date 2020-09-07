function show_uname(){
    uname_msg.innerHTML="";
}
function check_uname(){
    var $uname=uname.value;
    if(!$uname){
        uname_msg.innerHTML="手机号/请输入邮箱/用户名";
    }else{
        uname_msg.innerHTML="";
    }
}
function show_upwd(){
    upwd_msg.innerHTML="";
}
function check_upwd(){
    var $upwd=upwd.value;
    if(!$upwd){
        upwd_msg.innerHTML="请输入登录密码";
    }else{
        upwd_msg.innerHTML="";
    }
}
function login(){
    var $uname=uname.value;
    // console.log($uname);
    var $upwd=upwd.value;
    // var $phone=phone.value;
    // if(!$phone){phone_msg.innerHTML="手机号码不能为空";return;}
    if(!$uname){uname_msg.innerHTML="用户名不能为空";return;}
    if(!$upwd){upwd_msg.innerHTML="密码不能为空";return;}
    // 1.创建异步对象
    var xhr=new XMLHttpRequest();
    // console.log(xhr);
    // 4.创建监听，接受响应
    xhr.onreadystatechange=function(){
        // console.log(xhr.onreadystatechange);
        if(xhr.readyState==4 && xhr.status==200){
            var r=xhr.responseText;
            if(r==1){
                alert("登录成功");
                location.href="http://127.0.0.1:8080/index.html";
            }else{
                alert("登录失败");
            }
        }
    }
    // 2.创建请求，打开链接
    xhr.open("post","/qy/login",true);
    // 3.创建请求
    var formdata=`name=${$uname}&upwd=${$upwd}`;
    console.log(formdata);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(formdata);
}
