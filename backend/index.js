const express = require('express');
const app = express();
const cors = require('cors');
const { createTodo, updateTodo } = require("./types");
const { todo } = require('./db');




app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173/'
}));



app.post('/todo', async(req, res) => {
   const createPayLoad =  req.body;
   const parsedPayload = createTodo.safeParse(createPayLoad);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false,
    })
    })



app.get('/todos', async(req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    })

})


app.put('/completed',async(req, res) => {
    const updatePayload =  req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
     if(!parsedPayload.success){
         res.status(411).json({
             msg: "you sent wrong inputs"
         })
         return;}
         await todo.update({
            _id: req.body._id
         },{
            completed: true
         })
         res.json({
            msg:"todo marked as completed"
         })
  })


app.listen(3000);
