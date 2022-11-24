import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
const __dirname = path.resolve();

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=> {
   res.sendFile(__dirname+'/bmi.html');
});

app.post('/',(req,res)=>{

  console.log(req.body);
  const weight = req.body.weight;

  let height = req.body.height;
  height = height*height;
  const bmi = weight/height;

  if(bmi <= 18.5) {
    res.send(`your bmi is ${bmi}, you are in underweight category`);
  };
  if(bmi >18.5 && bmi <=24.9) {
    res.send(`your bmi is ${bmi}, you are in normalweight category`);
  };
  if(bmi >24.9 && bmi <=29.9) {
    res.send(`your bmi is ${bmi}, you are in overwight category`);
  };
  if(bmi >29.9) {
    res.send(`your bmi is ${bmi}, you are in obesity category`);
  };


});

app.listen(3000, function(){
  console.log("server listening at 3000");
});