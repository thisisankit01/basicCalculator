import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
const __dirname = path.resolve();

const app = express();
app.use(bodyParser.urlencoded({extended:true})); // always use it when connecteing to a html form


app.get('/',function (req,res){
  res.sendFile(__dirname +"/calculator.html")
});

app.post('/',function (req,res){
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const result = num1+num2;
  console.log(`The result is ${result}`);
  res.send(`The result is ${result}`);
});

app.listen(3000, function(){
  console.log(`listening at 3000`);
});