//npm i nodemailer
//import thu vien
const express=require('express');
const mailer=require('nodemailer');
const app2=express();//tao doi tuong express
//tao thong tin nguoi gui
let transporter=mailer.createTransport({
service: 'gmail',
auth: {
user: 'duyltph38444@fpt.edu.vn',
pass: 'sdmt xuir xczm obcb'
}
});
//noi dung can gui
let mailOption={
from: 'duyltph38444@fpt.edu.vn',
to: 'duylt02122003@gmail.com',
subject: 'Bài tập gửi mail Lab4',
text: 'Mail này gửi từ duyltph38444@fpt'
};
//thuc hien gui
transporter.sendMail(mailOption,(error,info)=>{
if(error){
console.error(error);
}
else{
console.log("Thanh cong: ",info.messageId);
}
});
//lang nghe
app2.listen(3002,()=>{
console.log("server dang chay o cong 3002");
});