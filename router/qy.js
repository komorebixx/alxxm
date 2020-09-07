// 引入模块
const express=require("express");
// 创建路由
const router=express.Router();
// 引入连接池
const pool=require("../pool.js");
// console.log(pool);
router.post("/zhuce",(req,res)=>{
    var obj=req.body;
    // console.log(obj);
    var sql="insert into qy_uname set ?";
    pool.query(sql,[obj],(err,result)=>{
        // console.log(result);
        if(err) throw err;
        if(result.affectedRows>0){
            res.send('1');
        }else{
            res.send('0');
        }
    });
})
router.post("/login",(req,res)=>{
    var $uname=req.body.name;
    console.log($uname);
    var $upwd=req.body.upwd;
    console.log($upwd);
    var sql="select *from qy_uname where name=? and upwd=?";
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        console.log(result);
        if(err) throw err;
        if(result.length>0){
            res.send('1');
        }else{
            res.send('0');
        }
    })
})
router.get("/zhuce",(req,res)=>{
    var $uname=req.query.name;
    var sql="select *from qy_uname where name=?";
    pool.query(sql,[$uname],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send('1');
        }else{
            res.send('0');
        }
    })
})
router.get("/copy",(req,res)=>{
    var $phone=req.query.phone;
    console.log(req.query);
    var sql="select * from qy_uname where phone=?";
    pool.query(sql,[$phone],(err,result)=>{
        if(err) throw err;
        console.log(result);
        if(result.length>0){
            res.send('1');
        }else{
            res.send('0');
        }
    })
})
// 导出路由器
module.exports=router;