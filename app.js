// 引入exrpess
const express=require("express");
// 引入路由器
const qyRouter=require("./router/qy.js");
// 引入中间件
const bodyParser=require("body-parser");
// 创建web服务器
const app=express();
app.listen(8080);
// 引入中间件
app.use(bodyParser.urlencoded({
    extended:false
}));
app.get('/getpicture',(req,res)=>{
    var a= req.query.id;
})
// 引入静态页面
app.use(express.static("public"));
// 挂载路由器，并添加前缀
app.use("/qy",qyRouter);