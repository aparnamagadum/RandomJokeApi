import express from 'express';
import joke from "./jokes.json" assert { type: 'json' };
const port= 4949;
const hostName='127.0.0.1';
const app=express();
app.use(express.json());
app.get("/" ,function (req,res){
    res.send(joke);
})
app.post("/addJokes" , function(req,res){
    const data=req.body;
    joke.push(data);
    res.send(joke);
})
app.put('/updateJokes/:id' , function(req,res){
    const {id}=req.params;
    const data=req.body;
    const result=joke.map((item)=>{
       return item.id===Number(id)?data:item;
    })
    res.send(result);
})
app.delete("/deleteJokes/:id" , function(req,res){
    const {id}=req.params;
    const deleteResult=joke.filter((item)=>{
        return item.id!==Number(id);
    })
    res.send(deleteResult);
})
app.listen(port , hostName , ()=> console.log("server Started at the port"+ " "+port))
