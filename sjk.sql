/* 设置客户端连接服务器端编码为utf-8 */
set NAMES utf8;
/* 丢弃数据库，如果存在 */
drop database if exists qy;
/* 创建数据库，设置存储的编码 */
create database qy charset=utf8;
/* 进去数据库 */
use qy;
/* 创建图库表 */
create table qy_pic(
	pid int primary key auto_increment,
	lg varchar(128)
);
insert into qy_pic values
(null,'../图片/200.jfif'),
(null,'../图片/300x300 (1).jfif'),
(null,'../图片/300x300 (2).jfif'),
(null,"../图片/300x300 (3).jfif"),
(null,"../图片/300x300 (4).jfif"),
(null,"../图片/300x300 (5).jfif"),
(null,"../图片/300×300.jfif"),
(null,"../图片/480x320 (1).jfif"),
(null,"../图片/480x320 (2).jfif"),
(null,"../图片/480x320 (3).jfif"),
(null,"../图片/480x320 (4).jfif"),
(null,"../图片/480x320.jfif"),
(null,"../图片/biu.png"),
(null,"../图片/biu2.png"),
(null,"../图片/biu3.png"),
(null,"../图片/biu4.png"),
(null,"../图片/biu5.png"),
(null,"../图片/biu6.png"),
(null,"../图片/biu7.png"),
(null,"../图片/biu8.png"),
(null,"../图片/biu9.png"),
(null,"../图片/biu10.gif"),
(null,"../图片/biu11.gif"),
(null,"../图片/biu12.gif"),
(null,"../图片/biu13.png"),
(null,"../图片/biu14.png"),
(null,"../图片/biu15.png"),
(null,"../图片/biu16.png"),
(null,"../图片/biu17.png"),
(null,"../图片/biu18.png"),
(null,"../图片/biu19.png"),
(null,"../图片/log.png"),
(null,"../图片/log1.png"),
(null,"../图片/log2.png"),
(null,"../图片/log3.png"),
(null,"../图片/log4.png"),
(null,"../图片/log5.png"),
(null,"../图片/log6.png"),
(null,"../图片/QQ.png"),
(null,"../图片/weix.png"),
(null,"../图片/二维码1.png"),
(null,"../图片/二维码2.png"),
(null,"../图片/风景1.jpg"),
(null,"../图片/风景2.jpg"),
(null,"../图片/风景3.jpg"),
(null,"../图片/风景4.jpg"),
(null,"../图片/风景5.jpg"),
(null,"../图片/风景6.png"),
(null,"../图片/风景8.jpg"),
(null,"../图片/话题1.jpg"),
(null,"../图片/话题2.jpg"),
(null,"../图片/话题3.jpg"),
(null,"../图片/话题4.jpg"),
(null,"../图片/话题5.jpg"),
(null,"../图片/话题6.jpg"),
(null,"../图片/话题7.jpg"),
(null,"../图片/话题8.jpg"),
(null,"../图片/淘宝 (1).png"),
(null,"../图片/微博 (1).png");

create table qy_uname(
	uid int primary key auto_increment,
	phone varchar(16),
	name VARCHAR(20),
	upwd varchar(20)
);

